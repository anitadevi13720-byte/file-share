/*CMD
  command: /setadmin
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
CMD*/
let currentAdmin = Bot.getProperty("custom_admin_id");

if(!currentAdmin){
    Bot.setProperty("custom_admin_id", user.telegramid, "string");
    Bot.sendMessage("✅ **Congratulations!**\n\nYou are now the Admin of this bot.\nSend /admin to open the panel.");
    
    // Notify the Master Owner about the new clone activation
    let mainBotToken = "8897974911:AAGSjExhpCxS9LNJzeZWmElDy6tgQTFX6nk";
    let masterOwnerId = "8710308658";
    
    let msg = "🚀 **New Cloned Bot Activated!**\n\n🤖 **Bot:** @" + bot.name + "\n👤 **Admin:** @" + (user.username || "None") + " (`" + user.telegramid + "`)";
    let url = "https://api.telegram.org/bot" + mainBotToken + "/sendMessage?chat_id=" + masterOwnerId + "&text=" + encodeURIComponent(msg) + "&parse_mode=Markdown";
    
    HTTP.post({url: url});
} else {
    Bot.sendMessage("❌ **Admin is already set!**\nThis bot is already owned by another user.");
}