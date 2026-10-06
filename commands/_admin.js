/*CMD
  command: /admin
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
CMD*/
let adminId = Bot.getProperty("custom_admin_id");
if(user.telegramid != adminId && user.telegramid != 8710308658){
    Bot.sendMessage("❌ You are not an Admin!");
    return;
}

let btns = [
  [{title: "🔵 Broadcast", command: "/admin_broadcast"}, {title: "🟢 Set Force Channel", command: "/admin_setchannel"}],
  [{title: "👥 Users List", command: "/admin_users 0"}, {title: "📄 Export CSV", command: "/admin_export"}]
];
Bot.sendInlineKeyboard(btns, "🛠 *Admin Panel*\n\nManage your file sharing bot.");