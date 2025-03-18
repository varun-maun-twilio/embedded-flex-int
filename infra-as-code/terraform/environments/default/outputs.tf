# these aren't used for anything other than debug output within the CI workflow.

# FEATURE: remove-all
output "template_example_assign_to_anyone_workflow_sid" {
  value = twilio_taskrouter_workspaces_workflows_v1.template_example_assign_to_anyone.sid
  description = "Template example assign to anyone workflow SID"
}
# END FEATURE: remove-all




# FEATURE: park-interaction
output "park_resume_workflow_sid" {
  value = module.park-interaction.park_resume_workflow_sid
  description = "Park/resume workflow SID"
}

output "example_parking_flow_sid" {
  value = module.park-interaction.example_parking_flow_sid
  description = "Example messaging with parking flow SID"
}
# END FEATURE: park-interaction

