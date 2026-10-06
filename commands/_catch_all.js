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
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// Handle File Uploads
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
    
    let btn = [[{title: "🟢 Share File", url: "https://t.me/share/url?url=" + link}]];
    Bot.sendInlineKeyboard(btn, "✅ *File Saved Successfully!*\n\n🔗 Your Shareable Link:\n`" + link + "`", {parse_mode: "Markdown"});

    // Storage Channel Logic
    let storageChannel = Bot.getProperty("storage_channel_id");
    if(storageChannel){
        let caption = "📤 **New File Uploaded**\n👤 **By:** @" + (user.username || "None") + "\n🆔 **User ID:** `" + user.telegramid + "`\n🔗 **File Link:** `" + link + "`";
        
        if(type == "document") Api.sendDocument({chat_id: storageChannel, document: fileId, caption: caption, parse_mode: "Markdown"});
        else if(type == "video") Api.sendVideo({chat_id: storageChannel, video: fileId, caption: caption, parse_mode: "Markdown"});
        else if(type == "audio") Api.sendAudio({chat_id: storageChannel, audio: fileId, caption: caption, parse_mode: "Markdown"});
        else if(type == "photo") Api.sendPhoto({chat_id: storageChannel, photo: fileId, caption: caption, parse_mode: "Markdown"});
    }
}