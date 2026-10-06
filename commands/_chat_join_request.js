/*CMD
  command: @chat_join_request
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
CMD*/
// Auto-approve join requests for private channels
Api.approveChatJoinRequest({
  chat_id: request.chat.id,
  user_id: request.from.id
});
// Set user as joined
Bot.setProperty("has_joined_" + request.from.id, true, "boolean");