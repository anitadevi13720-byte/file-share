/*CMD
  command: WaitGetLink
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
CMD*/
Api.createChatInviteLink({
  chat_id: message,
  on_result: "/onGetLinkResult"
});