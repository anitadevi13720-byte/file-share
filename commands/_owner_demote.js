/*CMD
  command: /owner_demote
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
CMD*/
Bot.sendMessage("Send Channel ID and User ID to demote.\nExample:\n`-100123456789 987654321`");
Bot.run({command: "WaitDemote"});