/*CMD
  command: /onCheckResultTrue
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
CMD*/
Bot.sendMessage("✅ **Thanks for joining!**");
let pending = User.getProperty("pending_file");
if(pending){
    User.setProperty("pending_file", null, "string");
    Bot.runCommand("/sendFile " + pending);
}