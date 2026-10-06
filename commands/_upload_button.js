/*CMD
  command: 📤 Upload File
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
CMD*/
let uploadMsg = "📤 *File Upload Center*\n\nI support seamless sharing for all file types:\n\n📄 *Documents & PDFs*\n🎬 *Videos & Movies*\n🎵 *Music & Audio files*\n🖼️ *Photos & Images*\n\n⚡ *Action Required:*\nSimply send or forward the file directly to this chat, and I will instantly generate your unique shareable link.";
Bot.sendMessage(uploadMsg, {parse_mode: "Markdown"});