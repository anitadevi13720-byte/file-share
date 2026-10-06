/*CMD
  command: /owner
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
CMD*/
let ownerId = 8710308658;
if(user.telegramid != ownerId) { return; }

let btns = [
  [{title: "🟢 Promote Admin", command: "/owner_promote"}, {title: "🔴 Demote Admin", command: "/owner_demote"}],
  [{title: "🔗 Get Channel Link", command: "/owner_getlink"}, {title: "🗄 Set Storage", command: "/owner_setstorage"}]
];
Bot.sendInlineKeyboard(btns, "👑 *Super Owner Panel*\n\nUse these tools to manage channels where the bot is an Admin.");