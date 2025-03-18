# FEATURE: remove-all
resource "twilio_taskrouter_workspaces_task_channels_v1" "voice" {
  workspace_sid	= var.TWILIO_FLEX_WORKSPACE_SID
  friendly_name	= "Voice"
  unique_name = "voice"
}
# END FEATURE: remove-all





# FEATURE: park-interaction
module "park-interaction" {
  source = "../../modules/park-interaction"
  
  workspace_sid = var.TWILIO_FLEX_WORKSPACE_SID
  everyone_queue_sid = twilio_taskrouter_workspaces_task_queues_v1.template_example_everyone.sid
  example_sales_queue_sid = twilio_taskrouter_workspaces_task_queues_v1.template_example_sales.sid
  example_support_queue_sid = twilio_taskrouter_workspaces_task_queues_v1.template_example_support.sid
}
# END FEATURE: park-interaction

