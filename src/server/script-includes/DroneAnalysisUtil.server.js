/**
 * Script Include: DroneAnalysisUtil
 *
 * Calls the Claude API (claude-sonnet-4-20250514) with a drone image attachment
 * to analyse field health and write a structured report back to the Hire Request.
 *
 * Fields populated on x_agri_hire_hire_request:
 *   - crop_health_assessment
 *   - irrigation_areas       (areas needing irrigation)
 *   - fertilizer_areas       (areas needing fertilizer)
 *   - pest_detection         (pest / disease detection)
 *   - health_score           (field health score 0-10)
 *   - field_health_report    (full narrative report)
 *   - drone_image_analyzed   → 'completed' | 'failed'
 *
 * Required system property:
 *   x_agri_hire.claude_api_key  (Type: password2) — your Anthropic API key
 */

var DroneAnalysisUtil = Class.create();

DroneAnalysisUtil.prototype = {

    initialize: function () {
        this.CLAUDE_API_KEY = gs.getProperty('x_agri_hire.claude_api_key', '');
        this.CLAUDE_MODEL   = 'claude-sonnet-4-20250514';
        this.CLAUDE_API_URL = 'https://api.anthropic.com/v1/messages';
        this.MAX_TOKENS     = 1500;
    },

    /**
     * Main entry point.
     * @param {string} hireRequestSysId - sys_id of the hire request record
     * @param {string} attachmentSysId  - sys_id of the drone image attachment
     */
    analyzeImage: function (hireRequestSysId, attachmentSysId) {
        try {
            if (!this.CLAUDE_API_KEY) {
                gs.error('DroneAnalysisUtil: Claude API key not set. Add system property: x_agri_hire.claude_api_key');
                this._setStatus(hireRequestSysId, 'failed');
                return false;
            }

            this._setStatus(hireRequestSysId, 'processing');

            var base64Image = this._getBase64(attachmentSysId);
            if (!base64Image) {
                gs.error('DroneAnalysisUtil: Could not read attachment ' + attachmentSysId);
                this._setStatus(hireRequestSysId, 'failed');
                return false;
            }

            var mediaType = this._getMediaType(attachmentSysId);
            var rawResponse = this._callClaude(base64Image, mediaType);

            if (!rawResponse) {
                this._setStatus(hireRequestSysId, 'failed');
                return false;
            }

            this._saveReport(hireRequestSysId, rawResponse);
            return true;

        } catch (e) {
            gs.error('DroneAnalysisUtil.analyzeImage: ' + e.message);
            this._setStatus(hireRequestSysId, 'failed');
            return false;
        }
    },

    // ── Private helpers ────────────────────────────────────────────────────────

    _getBase64: function (attachmentSysId) {
        try {
            var sa = new GlideSysAttachment();
            var gr = new GlideRecord('sys_attachment');
            if (!gr.get(attachmentSysId)) return null;
            var bytes = sa.getBytes(gr);
            return bytes ? GlideStringUtil.base64Encode(bytes) : null;
        } catch (e) {
            gs.error('DroneAnalysisUtil._getBase64: ' + e.message);
            return null;
        }
    },

    _getMediaType: function (attachmentSysId) {
        var gr = new GlideRecord('sys_attachment');
        if (gr.get(attachmentSysId)) {
            var ct = gr.getValue('content_type') || 'image/jpeg';
            if (ct.indexOf('png')  !== -1) return 'image/png';
            if (ct.indexOf('gif')  !== -1) return 'image/gif';
            if (ct.indexOf('webp') !== -1) return 'image/webp';
        }
        return 'image/jpeg';
    },

    _buildPrompt: function () {
        return (
            'You are an expert agricultural field analyst reviewing a drone-captured field image. ' +
            'Analyse the image carefully and return ONLY a valid JSON object — no markdown fences, ' +
            'no extra commentary — with exactly these keys:\n\n' +
            '{\n' +
            '  "crop_health_assessment": "<string: describe overall crop health, colour, density, uniformity>",\n' +
            '  "areas_needing_irrigation": "<string: identify zones that appear dry or water-stressed>",\n' +
            '  "areas_needing_fertilizer": "<string: describe zones showing nutrient deficiency or pale patches>",\n' +
            '  "pest_disease_detection": "<string: describe any visible pest damage or disease patterns; say None if not detected>",\n' +
            '  "field_health_score": <integer 0-10: 10 = excellent, 0 = severely damaged>,\n' +
            '  "field_health_report": "<string: 3-4 sentence executive summary and recommended actions for the farmer>"\n' +
            '}'
        );
    },

    _callClaude: function (base64Image, mediaType) {
        try {
            var rm = new sn_ws.RESTMessageV2();
            rm.setEndpoint(this.CLAUDE_API_URL);
            rm.setHttpMethod('POST');
            rm.setRequestHeader('x-api-key', this.CLAUDE_API_KEY);
            rm.setRequestHeader('anthropic-version', '2023-06-01');
            rm.setRequestHeader('content-type', 'application/json');
            rm.setHttpTimeout(60000);

            var body = {
                model: this.CLAUDE_MODEL,
                max_tokens: this.MAX_TOKENS,
                messages: [{
                    role: 'user',
                    content: [
                        {
                            type: 'image',
                            source: {
                                type: 'base64',
                                media_type: mediaType,
                                data: base64Image
                            }
                        },
                        {
                            type: 'text',
                            text: this._buildPrompt()
                        }
                    ]
                }]
            };

            rm.setRequestBody(JSON.stringify(body));
            var response = rm.execute();
            var status   = response.getStatusCode();

            if (status !== 200) {
                gs.error('DroneAnalysisUtil: Claude API returned HTTP ' + status + ' — ' + response.getBody());
                return null;
            }

            var parsed = JSON.parse(response.getBody());
            if (parsed && parsed.content && parsed.content.length > 0) {
                return parsed.content[0].text;
            }
            return null;

        } catch (e) {
            gs.error('DroneAnalysisUtil._callClaude: ' + e.message);
            return null;
        }
    },

    _saveReport: function (hireRequestSysId, rawText) {
        var gr = new GlideRecord('x_agri_hire_hire_request');
        if (!gr.get(hireRequestSysId)) {
            gs.error('DroneAnalysisUtil._saveReport: Hire request not found — ' + hireRequestSysId);
            return;
        }

        try {
            var report = JSON.parse(rawText);

            gr.setValue('crop_health_assessment', report.crop_health_assessment   || 'N/A');
            gr.setValue('irrigation_areas',       report.areas_needing_irrigation  || 'N/A');
            gr.setValue('fertilizer_areas',       report.areas_needing_fertilizer  || 'N/A');
            gr.setValue('pest_detection',         report.pest_disease_detection    || 'None detected');
            gr.setValue('health_score',           parseInt(report.field_health_score) || 0);
            gr.setValue('field_health_report',    report.field_health_report       || rawText);
            gr.setValue('drone_image_analyzed',   'completed');
            gr.update();

            gs.info('DroneAnalysisUtil: Field health analysis completed for request ' + hireRequestSysId);

        } catch (e) {
            // Claude returned non-JSON — store raw text as the report
            gs.warn('DroneAnalysisUtil._saveReport: JSON parse failed, storing raw response.');
            gr.setValue('field_health_report',  rawText);
            gr.setValue('drone_image_analyzed', 'completed');
            gr.update();
        }
    },

    _setStatus: function (hireRequestSysId, status) {
        var gr = new GlideRecord('x_agri_hire_hire_request');
        if (gr.get(hireRequestSysId)) {
            gr.setValue('drone_image_analyzed', status);
            gr.update();
        }
    },

    type: 'DroneAnalysisUtil'
};
