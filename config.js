require("./lib/module")

// SETTING 
global.owner = "2348054470353"
global.ownername = "𝗣𝗔𝗜𝗡-𝗩𝟯"
global.ownernumber = "2348054470353"
global.Creator = "𝕯ᴇᴠ 𝕸ᴀʏᴏʀ"
global.Dec = "𝕯ᴇᴠ 𝕸ᴀʏᴏʀ 𝕴ɴᴄ"
global.autoJoin = false
global.antilink = false

// THUMBNAIL 
global.imageurl = 'https://files.catbox.moe/4t9l3a.jpg'
global.channel = 'https://whatsapp.com/channel/0029VamAEGJFnSzHbdcRcZ18'

// STICKER
global.packname = "𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐁𝐲"
global.author = "𝙋𝘼𝙄𝙉-𝙑𝟥"
global.jumlah = "5"


//false=disable and true=enable
global.autoRecording = true //auto recording
global.autoTyping = true //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti92 = true //auto block +92 
global.autoswview = true //auto view status/story
















// RESPON BOT
global.onlyprem = `\`[ 👑 ] 𝖯𝖠𝖨𝖭-𝖵𝟥\` \n*Only Premium User*`
global.onlyown = `\`[ 👑 ] 𝗣𝗔𝗜𝗡-𝗩𝟯\` \n*Only O𝘸𝘯𝘦𝘳*`
global.onlygroup = `\`[ 👑 ] 𝗣𝗔𝗜𝗡-𝗩𝟯\` \n*Only Group*`
global.onlyadmin = `\`[ 👑 ] 𝗣𝗔𝗜𝗡-𝗩𝟯\` \n*Only Admin*`
global.notext = `\`[ 👑 ] 𝗣𝗔𝗜𝗡-𝗩𝟯\` \n*No Text*`
global.noadmin = `\`[ 👑 ] 𝗣𝗔𝗜𝗡-𝗩𝟯\` \n*You are not admin*`
global.succes = `\`[ 👑 ] 𝗣𝗔𝗜𝗡-𝗩𝟯\` \n*𝘋𝘰𝘯𝘦*`
global.invalid = `\`[ 👑 ] 𝗣𝗔𝗜𝗡-𝗩𝟯\` \n*invalid command or text*`
global.bugrespon = `\`[ 👑 ] 𝗣𝗔𝗜𝗡-𝗩𝟯\` \n*𝗠𝗔𝗬𝗢𝗥 𝗜𝗦 𝗦𝗘𝗡𝗗𝗜𝗡𝗚 𝗣𝗔𝗜𝗡*`

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})