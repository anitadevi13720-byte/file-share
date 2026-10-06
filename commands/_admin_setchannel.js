/*CMD
  command: /admin_setchannel
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
CMD*/
Bot.sendMessage("Send the Channel ID and Invite Link separated by a space.\n\nExample:\n`-100123456789 https://t.me/mychannel`\n\nSend `0` to disable Force Channel.");
Bot.runCommand("WaitChannel");