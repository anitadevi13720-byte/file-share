/*CMD
  command: /checkJoined
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
CMD*/
let fChannelId = Bot.getProperty("force_channel_id");
if(!fChannelId){
    Bot.runCommand("/onCheckResultTrue");
    return;
}

let hasJoined = User.getProperty("has_joined");
if(hasJoined){
    Bot.runCommand("/onCheckResultTrue");
    return;
}

Api.getChatMember({
  chat_id: fChannelId,
  user_id: user.telegramid,
  on_result: "/onCheckResult"
});