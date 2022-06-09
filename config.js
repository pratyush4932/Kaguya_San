

const fs = require('fs')
const chalk = require('chalk')

// Other
let gg = process.env.MODS
if (!gg) {
	gg = "917003213983"
}
global.owner = gg.split(",");
global.packname = process.env.PACKNAME || "kaguya",
global.prefix= process.env.PREFIX || "-",
global.author = process.env.AUTHOR || "ARUS",
global.sessionName = 'arus'
global.menu = '🎫 *Kaguya-San\'s Command Liste* 🎫\n\n💻 *Dev*\n❐ ```update, broadcast, ban, unban, chatid, session, join```\n\n🔮 *General*\n❐ ```groupinfo, help, delete, info, rank, profile```\n\n💠 *Fun*\n❐ ```ship, quote, leaderboard,react, fact, bot```\n\n🔈 *Media*\n❐ ```yta, ytv, play, gify, yts, lyrics```\n\n👑 *Moderation*\n❐ ```demote, remove, ping, promote, deact, act, invite, group, seticon, setdesc```\n\n💮 *Weeb*\n❐ ```anime, manga, charecter, haigusha, neko, pokemon, holo, fox_girl, kemonomimi```\n\n🖇 *Utils*\n❐ ```google, image, meme, subreddit, tourl, img, iguser, gif, sticker, take, pinterest, carbon```\n\n🗃️ *Notiz: Nutze -report <text> report the bug if you use it more then 5 times in a row you will be ban*'
global.thumb = fs.readFileSync('./src/info.jpeg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
