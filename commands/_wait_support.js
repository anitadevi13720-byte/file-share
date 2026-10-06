/*CMD
  command: WaitSupport
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
CMD*/
Bot.setProperty("support_username", message, "string");
Bot.sendMessage("✅ Support username updated to: " + message);