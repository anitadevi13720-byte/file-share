/*CMD
  command: WaitPromote
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
CMD*/
let parts = message.split(" ");
if(parts.length < 2) { Bot.sendMessage("❌ Invalid."); return; }
Api.promoteChatMember({
  chat_id: parts[0],
  user_id: parts[1],
  can_manage_chat: true,
  can_change_info: true,
  can_post_messages: true,
  can_edit_messages: true,
  can_delete_messages: true,
  can_invite_users: true,
  can_restrict_members: true,
  can_pin_messages: true,
  can_promote_members: false
});
Bot.sendMessage("✅ Admin Promoted.");