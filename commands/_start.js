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
                   [{title: "🔵 Join Channel", url: fChannelLink}], 
                   [{title: "🟢 Joined", command: "/checkJoined"}]
                 ];
                 Bot.sendInlineKeyboard(btn, "⚠️ *Access Denied!*\n\nYou must join our channel to get this file.");
                 return;
             }
        }
        Bot.runCommand("/sendFile " + fileParam);
    } else {
        Bot.sendMessage("❌ File not found or link is invalid.");
    }
} else {
    let btns = [
       [{title: "📤 Upload File", command: "/upload"}],
       [{title: "🤖 Clone Bot (Make your own bot)", command: "/clone"}],
       [{title: "🔵 Support", url: "https://t.me/technicalKali"}]
    ];
    Bot.sendInlineKeyboard(btns, "👋 *Welcome to File Sharing Bot!*\n\nI can securely store your files and generate shareable links.\n\n👇 **Click 'Upload File' or just send any file here!**");
}