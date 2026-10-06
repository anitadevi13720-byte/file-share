/*CMD
  command: /admin_export
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
CMD*/
let users = Bot.getProperty("all_users", []);
let csv = "ID,Name,Username\n";
for(let i=0; i<users.length; i++){
    csv += users[i].id + "," + users[i].name + "," + (users[i].username || "") + "\n";
}
Api.sendDocument({document: {value: csv, filename: "users.csv"}});