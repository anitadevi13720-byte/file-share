/*CMD
  command: /owner_setstorage
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
CMD*/
Bot.sendMessage("Send the **Channel ID** where you want to securely store all uploaded files.\n_(Make sure the bot is an Admin in that channel!)_\n\nExample: `-100123456789`\n\nTo disable this feature, just send `0`.");
Bot.runCommand("WaitStorage");