/*CMD
  command: /clone
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
CMD*/
let cloneMsg = "🤖 *Bot Cloning System*\n\nWant to run your own version of this File Sharing bot?\n\n1️⃣ Download the *Bots.Business* app.\n2️⃣ Create an account.\n3️⃣ Send me your **registered Email Address** below.\n\n_I will generate an automated installation link for you._";
Bot.sendMessage(cloneMsg, {parse_mode: "Markdown"});
Bot.runCommand("WaitEmail");