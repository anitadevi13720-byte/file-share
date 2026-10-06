/*CMD
  command: /admin_setsupport
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
CMD*/
Bot.sendMessage("Send the support username or link (e.g. Codevexa.t.me or @myusername):");
Bot.run({command: "WaitSupport"});