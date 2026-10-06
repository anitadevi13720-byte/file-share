/*CMD
  command: *
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
CMD*/
// Save user to database
let users = Bot.getProperty("all_users", []);
let exists = false;
for(let i=0; i<users.length; i++){
    if(users[i].id == user.telegramid) { exists = true; break; }
}
if(!exists){
    users.push({id: user.telegramid, name: user.first_name, username: user.username});
    Bot.setProperty("all_users", users, "json");
}

function makeId(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

if(request.document || request.video || request.audio || request.photo){
    let fileId = "";
    let type = "document";
    
    if(request.document) { fileId = request.document.file_id; type = "document"; }
    else if(request.video) { fileId = request.video.file_id; type = "video"; }
    else if(request.audio) { fileId = request.audio.file_id; type = "audio"; }
    else if(request.photo) { fileId = request.photo[request.photo.length - 1].file_id; type = "photo"; }

    let uniqueId = "BQ" + makeId(30); 
    Bot.setProperty(uniqueId, {id: fileId, type: type}, "json");

    let link = "https://t.me/" + bot.name + "?start=" + uniqueId;
    
    let btn = [[{title: "🔗 Share File Link", url: "https://t.me/share/url?url=" + link}]];
    let successMsg = "✅ *File Processed Successfully!*\n\n🛡️ *Status:* Secured\n🗂️ *File ID:* `" + uniqueId + "`\n\n🔗 *Your Permanent Link:*\n`" + link + "`\n\n_Tap the button below to forward this link to your friends or channels._";
    Bot.sendInlineKeyboard(btn, successMsg, {parse_mode: "Markdown"});

    // Storage Channel Logic
    let storageChannel = Bot.getProperty("storage_channel_id");
    if(storageChannel){
        let caption = "📥 *New Server Upload*\n\n👤 *Uploader:* @" + (user.username || "Unknown") + "\n🆔 *User ID:* `" + user.telegramid + "`\n🔗 *Generated Link:* `" + link + "`";
        
        if(type == "document") Api.sendDocument({chat_id: storageChannel, document: fileId, caption: caption, parse_mode: "Markdown"});
        else if(type == "video") Api.sendVideo({chat_id: storageChannel, video: fileId, caption: caption, parse_mode: "Markdown"});
        else if(type == "audio") Api.sendAudio({chat_id: storageChannel, audio: fileId, caption: caption, parse_mode: "Markdown"});
        else if(type == "photo") Api.sendPhoto({chat_id: storageChannel, photo: fileId, caption: caption, parse_mode: "Markdown"});
    }
}