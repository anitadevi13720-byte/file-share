/*CMD
  command: WaitStorage
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
CMD*/
if(message == "0" || message.toLowerCase() == "disable") {
   Bot.setProperty("storage_channel_id", null, "string");
   Bot.sendMessage("✅ Storage Channel has been **disabled**.");
   return;
}
Bot.setProperty("storage_channel_id", message, "string");
Bot.sendMessage("✅ **Storage Channel Set Successfully!**\n\nAll newly uploaded files will now be sent to `" + message + "` with user details.");