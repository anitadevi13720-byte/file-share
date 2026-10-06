/*CMD
  command: /admin_users
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
CMD*/
let users = Bot.getProperty("all_users", []);
let page = params ? parseInt(params) : 0;
let perPage = 10;
let total = users.length;
let maxPage = Math.ceil(total/perPage) - 1;

if(total == 0){
    Bot.sendMessage("No users yet.");
    return;
}

let start = page * perPage;
let end = start + perPage;
let list = "👥 **Users (Page " + (page+1) + ")**\n\n";

for(let i=start; i<end && i<total; i++){
    list += (i+1) + ". `" + users[i].id + "` - @" + (users[i].username || "None") + "\n";
}

let btns = [];
if(page > 0) btns.push({title: "🔵 Prev", command: "/admin_users " + (page-1)});
if(page < maxPage) btns.push({title: "🟢 Next", command: "/admin_users " + (page+1)});

Bot.sendInlineKeyboard([btns], list);