import { ScriptInclude } from '@servicenow/sdk/core'

/**
 * Script Include: DroneAnalysisUtil
 * Encapsulates all logic for sending drone images to Claude AI Vision API
 * and saving the structured field health report to the hire request record.
 *
 * Requires system property: x_agri_hire.claude_api_key (password2 type)
 * Optional property:        x_agri_hire.claude_model  (default: claude-opus-4-5)
 */
export const DroneAnalysisUtil = ScriptInclude({
    $id: Now.ID['drone_analysis_util'],
    name: 'DroneAnalysisUtil',
    active: true,
    accessibleFrom: 'public',
    description:
        'Calls Claude AI Vision API to analyse drone-captured field images and generate crop health reports.',
    script: Now.include('../../server/script-includes/DroneAnalysisUtil.server.js'),
})
