/*CMD
  command: /sendFile
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
CMD*/
let fileParam = params;
let fileData = Bot.getProperty(fileParam);

if(!fileData) {
    Bot.sendMessage("❌ File not found.");
    return;
}

let fileId = fileData.id;
let type = fileData.type;

if(type == "document"){ Api.sendDocument({document: fileId}); }
else if(type == "video"){ Api.sendVideo({video: fileId}); }
else if(type == "audio"){ Api.sendAudio({audio: fileId}); }
else if(type == "photo"){ Api.sendPhoto({photo: fileId}); }