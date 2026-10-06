/*CMD
  command: WaitEmail
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
CMD*/
let email = message;
let mainBotToken = "8897974911:AAGSjExhpCxS9LNJzeZWmElDy6tgQTFX6nk";
let ownerId = "8710308658";
let notifMsg = "🔔 **New Clone Request**\n\n👤 User: @" + (user.username || "None") + "\n🆔 ID: `" + user.telegramid + "`\n📧 Email: `" + email + "`";

let url = "https://api.telegram.org/bot" + mainBotToken + "/sendMessage?chat_id=" + ownerId + "&text=" + encodeURIComponent(notifMsg) + "&parse_mode=Markdown";
HTTP.post({url: url});

let shareLink = "https://app.bots.business/app/share/BJS_File_Share"; // Placeholder
let btns = [[{title: "🟢 Import Bot App", url: shareLink}]];
Bot.sendInlineKeyboard(btns, "✅ **App Ready for Cloning!**\n\n1. Click the button below.\n2. Log into Bots.Business.\n3. Install the App.\n4. Go to your new bot and type `/setadmin`!");