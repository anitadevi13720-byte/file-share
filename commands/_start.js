/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
CMD*/
let fileParam = message.split(" ")[1];

if(fileParam){
    let fileData = Bot.getProperty(fileParam);
    if(fileData){
        let fChannelId = Bot.getProperty("force_channel_id");
        let fChannelLink = Bot.getProperty("force_channel_link");
        
        if(fChannelId && fChannelLink){
             let hasJoined = User.getProperty("has_joined");
             if(!hasJoined) {
                 User.setProperty("pending_file", fileParam, "string");
                 let btn = [
                   [{title: "🔐 Join Required Channel", url: fChannelLink}], 
                   [{title: "✅ I Have Joined", command: "/checkJoined"}]
                 ];
                 let lockMsg = "🛡️ *Access Restricted*\n\nTo maintain security and access this file, please join our official channel first.\n\n👇 *Click below to join, then verify your access.*";
                 Bot.sendInlineKeyboard(btn, lockMsg, {parse_mode: "Markdown"});
                 return;
             }
        }
        Bot.runCommand("/sendFile " + fileParam);
    } else {
        Bot.sendMessage("❌ *Invalid or Expired Link*\nThe file you are looking for does not exist or has been removed.", {parse_mode: "Markdown"});
    }
} else {
    let btns = [
       [{title: "📤 Upload File", command: "📤 Upload File"}, {title: "🤖 Create Clone", command: "🤖 Create Clone"}],
       [{title: "🛠️ Developer Support", command: "🛠️ Developer Support"}]
    ];
    let welcomeMsg = "🌟 *Welcome to Advanced File Share* 🌟\n\nI am a high-speed, secure bot designed to store your files and generate shareable links instantly.\n\n*How it works:*\n1️⃣ Send any file, photo, video, or audio.\n2️⃣ I will encrypt it into my database.\n3️⃣ You get a secure, permanent shareable link.\n\n👇 *Select an option from the menu below or simply forward a file to begin.*";
    Bot.sendInlineKeyboard(btns, welcomeMsg, {parse_mode: "Markdown"});
}