/*CMD
  command: WaitChannel
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
CMD*/
if(message == "0"){
    Bot.setProperty("force_channel_id", null, "string");
    Bot.setProperty("force_channel_link", null, "string");
    Bot.sendMessage("✅ Force Channel Disabled.");
    return;
}

let parts = message.split(" ");
if(parts.length < 2){
    Bot.sendMessage("❌ Invalid format. Please try again.");
    return;
}

Bot.setProperty("force_channel_id", parts[0], "string");
Bot.setProperty("force_channel_link", parts[1], "string");
Bot.sendMessage("✅ Force Channel successfully set!");