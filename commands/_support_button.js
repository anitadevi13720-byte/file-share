/*CMD
  command: 🛠️ Developer Support
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
CMD*/
let supportUser = Bot.getProperty("support_username", "Codevexa.t.me");
Bot.sendMessage("🛠️ *Developer Support*\n\nFor any issues or custom bot development, contact: " + supportUser, {parse_mode: "Markdown"});