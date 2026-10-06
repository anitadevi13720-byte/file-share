/*CMD
  command: /admin
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
CMD*/
let adminId = Bot.getProperty("custom_admin_id");
if(user.telegramid != adminId && user.telegramid != 8710308658){
    Bot.sendMessage("⛔ *Access Denied*\nAdministrator privileges are required to view this panel.", {parse_mode: "Markdown"});
    return;
}

let btns = [
  [{title: "📢 Broadcast Message", command: "/admin_broadcast"}, {title: "🔐 Set Force Channel", command: "/admin_setchannel"}],
  [{title: "📊 Users Database", command: "/admin_users 0"}, {title: "📥 Export to CSV", command: "/admin_export"}]
];
let adminMsg = "⚙️ *Administrator Dashboard*\n\nWelcome to the control center. Here you can manage your bot's audience, enforce channel memberships, and broadcast updates.";
Bot.sendInlineKeyboard(btns, adminMsg, {parse_mode: "Markdown"});