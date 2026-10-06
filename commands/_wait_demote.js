/*CMD
  command: WaitDemote
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
  can_manage_chat: false,
  can_change_info: false,
  can_post_messages: false,
  can_edit_messages: false,
  can_delete_messages: false,
  can_invite_users: false,
  can_restrict_members: false,
  can_pin_messages: false,
  can_promote_members: false
});
Bot.sendMessage("✅ Admin Demoted.");