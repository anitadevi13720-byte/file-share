/*CMD
  command: /onCheckResult
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
CMD*/
let status = options.result.status;

if(status == "member" || status == "creator" || status == "administrator"){
    User.setProperty("has_joined", true, "boolean");
    Bot.runCommand("/onCheckResultTrue");
} else {
    let fChannelLink = Bot.getProperty("force_channel_link");
    let btn = [
      [{title: "🔵 Join Channel", url: fChannelLink}],
      [{title: "🔵 Try Again", command: "/checkJoined"}]
    ];
    Bot.sendInlineKeyboard(btn, "❌ **You haven't joined the channel yet!**\n\nPlease join to get the file.");
}