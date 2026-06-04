/**
 * Script Include: DroneAnalysisUtil
 * Sends a drone-captured image (as base64) to the Claude AI Vision API
 * and parses the structured field health report back into the hire request record.
 *
 * Usage (from a business rule or UI action):
 *   var util = new DroneAnalysisUtil();
 *   util.analyzeImage(hireRequestSysId, attachmentSysId);
 */

var DroneAnalysisUtil = Class.create();

DroneAnalysisUtil.prototype = {

    initialize: function () {
        // Claude API configuration — store your key in a System Property:
        // Name: x_agri_hire.claude_api_key  |  Type: password2
        this.CLAUDE_API_KEY = gs.getProperty('x_agri_hire.claude_api_key', '');
        this.CLAUDE_MODEL = gs.getProperty(
            'x_agri_hire.claude_model',
            'claude-opus-4-5'
        );
        this.CLAUDE_API_URL = 'https://api.anthropic.com/v1/messages';
        this.MAX_TOKENS = 1500;
    },

    /**
     * Main entry point.
     * @param {string} hireRequestSysId - sys_id of the x_agri_hire_hire_request record
     * @param {string} attachmentSysId  - sys_id of the sys_attachment record (drone image)
     */
    analyzeImage: function (hireRequestSysId, attachmentSysId) {
        try {
            if (!this.CLAUDE_API_KEY) {
                gs.addErrorMessage(
                    'Claude API key not configured. Set system property: x_agri_hire.claude_api_key'
                );
                this._updateStatus(hireRequestSysId, 'failed');
                return false;
            }

            // Fetch attachment as base64
            var base64Image = this._getAttachmentBase64(attachmentSysId);
            if (!base64Image) {
                gs.addErrorMessage('Could not read attachment. Please ensure the file is a valid image.');
                this._updateStatus(hireRequestSysId, 'failed');
                return false;
            }

            var mediaType = this._getMediaType(attachmentSysId);

            // Build the Claude Vision API prompt
            var prompt = this._buildPrompt();

            // Call Claude API
            var response = this._callClaudeAPI(base64Image, mediaType, prompt);
            if (!response) {
                this._updateStatus(hireRequestSysId, 'failed');
                return false;
            }

            // Parse and save the report
            this._saveReport(hireRequestSysId, response);
            return true;

        } catch (e) {
            gs.error('DroneAnalysisUtil.analyzeImage error: ' + e.message);
            this._updateStatus(hireRequestSysId, 'failed');
            return false;
        }
    },

    /**
     * Reads a sys_attachment record and returns its content as a base64 string.
     */
    _getAttachmentBase64: function (attachmentSysId) {
        try {
            var sa = new GlideSysAttachment();
            var attachGr = new GlideRecord('sys_attachment');
            if (!attachGr.get(attachmentSysId)) {
                return null;
            }
            var bytes = sa.getBytes(attachGr);
            if (!bytes) return null;
            return GlideStringUtil.base64Encode(bytes);
        } catch (e) {
            gs.error('DroneAnalysisUtil._getAttachmentBase64 error: ' + e.message);
            return null;
        }
    },

    /**
     * Determines the media type (MIME) from the attachment record.
     */
    _getMediaType: function (attachmentSysId) {
        var attachGr = new GlideRecord('sys_attachment');
        if (attachGr.get(attachmentSysId)) {
            var ct = attachGr.getValue('content_type') || 'image/jpeg';
            // Normalise to Claude-accepted types
            if (ct.indexOf('png') !== -1) return 'image/png';
            if (ct.indexOf('gif') !== -1) return 'image/gif';
            if (ct.indexOf('webp') !== -1) return 'image/webp';
            return 'image/jpeg';
        }
        return 'image/jpeg';
    },

    /**
     * Builds the structured analysis prompt sent to Claude.
     */
    _buildPrompt: function () {
        return (
            'You are an expert agricultural field analyst. ' +
            'Analyse this drone-captured field image and produce a structured JSON report. ' +
            'Return ONLY a valid JSON object (no markdown fences, no extra text) with these exact keys:\n\n' +
            '{\n' +
            '  "crop_health_assessment": "<string: overall crop condition, color, density>",\n' +
            '  "irrigation_areas": "<string: describe zones that appear water-stressed or need irrigation>",\n' +
            '  "fertilizer_areas": "<string: describe zones showing nutrient deficiency or needing fertilizer>",\n' +
            '  "pest_detection": "<string: any visible pest damage, disease patches, or anomalies. Say None if not detected.>",\n' +
            '  "health_score": <integer 1-10: overall field health where 10 is perfect>,\n' +
            '  "summary": "<string: 2-3 sentence executive summary for the farmer>"\n' +
            '}'
        );
    },

    /**
     * Calls the Anthropic Claude Messages API with a vision (image) payload.
     */
    _callClaudeAPI: function (base64Image, mediaType, prompt) {
        try {
            var rm = new sn_ws.RESTMessageV2();
            rm.setEndpoint(this.CLAUDE_API_URL);
            rm.setHttpMethod('POST');
            rm.setRequestHeader('x-api-key', this.CLAUDE_API_KEY);
            rm.setRequestHeader('anthropic-version', '2023-06-01');
            rm.setRequestHeader('content-type', 'application/json');

            var body = {
                model: this.CLAUDE_MODEL,
                max_tokens: this.MAX_TOKENS,
                messages: [
                    {
                        role: 'user',
                        content: [
                            {
                                type: 'image',
                                source: {
                                    type: 'base64',
                                    media_type: mediaType,
                                    data: base64Image,
                                },
                            },
                            {
                                type: 'text',
                                text: prompt,
                            },
                        ],
                    },
                ],
            };

            rm.setRequestBody(JSON.stringify(body));
            rm.setHttpTimeout(60000); // 60-second timeout for vision calls

            var response = rm.execute();
            var statusCode = response.getStatusCode();

            if (statusCode !== 200) {
                gs.error(
                    'DroneAnalysisUtil: Claude API returned status ' +
                        statusCode +
                        ' — ' +
                        response.getBody()
                );
                return null;
            }

            var responseBody = JSON.parse(response.getBody());
            if (
                responseBody &&
                responseBody.content &&
                responseBody.content.length > 0
            ) {
                return responseBody.content[0].text;
            }
            return null;

        } catch (e) {
            gs.error('DroneAnalysisUtil._callClaudeAPI error: ' + e.message);
            return null;
        }
    },

    /**
     * Parses the JSON response from Claude and persists it to the hire request.
     */
    _saveReport: function (hireRequestSysId, rawResponse) {
        var hireGr = new GlideRecord('x_agri_hire_hire_request');
        if (!hireGr.get(hireRequestSysId)) {
            gs.error('DroneAnalysisUtil: Hire request not found — ' + hireRequestSysId);
            return;
        }

        try {
            var report = JSON.parse(rawResponse);

            hireGr.setValue('crop_health_assessment', report.crop_health_assessment || 'N/A');
            hireGr.setValue('irrigation_areas', report.irrigation_areas || 'N/A');
            hireGr.setValue('fertilizer_areas', report.fertilizer_areas || 'N/A');
            hireGr.setValue('pest_detection', report.pest_detection || 'None detected');
            hireGr.setValue('health_score', parseInt(report.health_score) || 0);
            hireGr.setValue('field_health_report', report.summary || rawResponse);
            hireGr.setValue('drone_image_analyzed', 'completed');

            hireGr.update();
            gs.addInfoMessage('Drone field health analysis completed successfully.');

        } catch (e) {
            // If Claude returned non-JSON text, store it as a raw report
            gs.warn('DroneAnalysisUtil: Could not parse JSON response. Storing raw report.');
            hireGr.setValue('field_health_report', rawResponse);
            hireGr.setValue('drone_image_analyzed', 'completed');
            hireGr.update();
        }
    },

    /**
     * Updates the drone_image_analyzed status field on the hire request.
     */
    _updateStatus: function (hireRequestSysId, status) {
        var hireGr = new GlideRecord('x_agri_hire_hire_request');
        if (hireGr.get(hireRequestSysId)) {
            hireGr.setValue('drone_image_analyzed', status);
            hireGr.update();
        }
    },

    type: 'DroneAnalysisUtil',
};
