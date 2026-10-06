/*CMD
  command: /onGetLinkResult
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
CMD*/
let link = options.result.invite_link;
Bot.sendMessage("🔗 **Invite Link:**\n" + link);