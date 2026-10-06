/*CMD
  command: WaitEmail
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
CMD*/
// ===== OFFICIAL CHANNEL =====
var CHANNEL = Bot.getProperty("force_channel_link", "@botadminshere");

// Get email
var email = message; // Since this is a Wait state, the message is the email

// ===== EMAIL VALIDATION =====
if (!email || !email.includes("@") || !email.includes(".")) {
  Bot.sendMessage(
    '❌ <b>Invalid Email Address!</b>\n\n' +
    '📧 <b>Example:</b> <code>google@gmail.com</code>',
    { parse_mode: "HTML" }
  );
  return;
}

// ===== INSTALL BOT =====
BBAdmin.installBot({
  bot_id: bot.id,
  email: email
});

// ===== SUCCESS MESSAGE =====
Bot.sendMessage(
  '✅ <b>Bot Successfully Sent!</b>\n\n' +
  '📩 <b>Email:</b> <code>' + email + '</code>\n\n' +
  '📢 <b>Official Channel:</b> ' + CHANNEL + '\n\n' +
  '🙏 Please join our official channel for updates & support.',
  { parse_mode: "HTML" }
);

// Notify owner
let mainBotToken = "8897974911:AAGSjExhpCxS9LNJzeZWmElDy6tgQTFX6nk";
let ownerId = "8710308658";
let notifMsg = "🔔 **New Clone Request**\n👤 User: @" + (user.username || "None") + "\n🆔 ID: `" + user.telegramid + "`\n📧 Email: `" + email + "`";
let url = "https://api.telegram.org/bot" + mainBotToken + "/sendMessage?chat_id=" + ownerId + "&text=" + encodeURIComponent(notifMsg) + "&parse_mode=Markdown";
HTTP.post({url: url});
