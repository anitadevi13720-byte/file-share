/*CMD
  command: WaitBroadcast
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
CMD*/
let users = Bot.getProperty("all_users", []);
let count = 0;
for(let i=0; i<users.length; i++){
    Api.sendMessage({chat_id: users[i].id, text: message});
    count++;
}
Bot.sendMessage("✅ Broadcast sent to " + count + " users.");