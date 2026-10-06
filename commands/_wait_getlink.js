/*CMD
  command: WaitGetLink
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
CMD*/
Api.createChatInviteLink({
  chat_id: message,
  on_result: "/onGetLinkResult"
});