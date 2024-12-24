require("./lib/global")

const func = require("./lib/place")
const readline = require("readline");
const usePairingCode = true
const question = (text) => {
  const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};

async function startSesi() {
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState(`./session`)
const { version, isLatest } = await fetchLatestBaileysVersion()
    console.log(chalk.red.bold(`
┏━━━｢ 𝙋𝘼𝙄𝙉 - 𝙑 3 𝘾𝙍𝘼𝙎𝙃𝙀𝙍 ｣ ━━━
┃ 𝐒𝐂𝐑𝐈𝐏𝐓 𝐕𝐄𝐑𝐒𝐈 : 𝙑3
┃ 𝐎𝐖𝐍𝐄𝐑 : +𝟐𝟑𝟒𝟗𝟎𝟕𝟐𝟔𝟏𝟔𝟎𝟓𝟔✍
┃ 𝐒𝐓𝐀𝐓𝐔𝐒 : 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙐𝙎𝙀𝙍
┗━━━━━━━━━━━━━━┛
𝖯𝖮𝖶𝖤𝖱𝖤𝖣 𝖡𝖸 𝖬𝖠𝖸𝖮𝖱 𝖳𝖤𝖢𝖧 𝖨𝖭𝖢
`))
const connectionOptions = {
version,
keepAliveIntervalMs: 30000,
printQRInTerminal: !usePairingCode,
logger: pino({ level: "fatal" }),
auth: state,
browser: [ "Ubuntu", "Chrome", "20.0.04" ]   
// browser: ['Chrome (Linux)', '', '']
}
const mayor = func.makeWASocket(connectionOptions)
if(usePairingCode && !mayor.authState.creds.registered) {
		const phoneNumber = await question(color(`
┏━━━｢ 𝗣𝗔𝗜𝗡-𝗩𝟯 ｣ ━━━
┃ 𝐒𝐂𝐑𝐈𝐏𝐓 𝐕𝐄𝐑𝐒𝐈 : 𝐕𝟯
┃ 𝐎𝐖𝐍𝐄𝐑 : +𝟮𝟯𝟰𝟵𝟬𝟳𝟮𝟲𝟭𝟲𝟬𝟱𝟲✍
┃ 𝐒𝐓𝐀𝐓𝐔𝐒 : 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙐𝙎𝙀𝙍
┗━━━━━━━━━━━━━━┛
𝗠𝗔𝗬𝗢𝗥 𝗦𝗔𝗬𝗦 𝗜𝗡𝗣𝗨𝗧 𝗬𝗢𝗨𝗥 𝗗𝗜𝗚𝗜𝗧 𝗙𝗢𝗥𝗠𝗔𝗧 = 234 :\n`, 'red'));
console.log(color(`
┏━━━━━━━━━━━━━━━•
┃𝐬𝐞𝐧𝐝 𝐧𝐮𝐦𝐛𝐞𝐫
┗━━━━━━━━━━━━━━━━━━━•`))
		const code = await mayor.requestPairingCode(phoneNumber.trim())
		console.log(chalk.green(`𝗣𝗔𝗜𝗡-𝗩𝟯 𝗕𝗬 𝗠𝗔𝗬𝗢𝗥 𝗧𝗘𝗖𝗛 : ${code} `))

	}
store.bind(mayor.ev)

mayor.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
console.log(color(lastDisconnect.error, 'deeppink'))
if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
process.exit()
} else if (reason === DisconnectReason.badSession) {
console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
process.exit()
} else if (reason === DisconnectReason.connectionClosed) {
console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionLost) {
console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
mayor.logout()
} else if (reason === DisconnectReason.loggedOut) {
console.log(color(`Device Logged Out, Please Scan Again And Run.`))
mayor.logout()
} else if (reason === DisconnectReason.restartRequired) {
console.log(color('Restart Required, Restarting...'))
await startSesi()
} else if (reason === DisconnectReason.timedOut) {
console.log(color('Connection TimedOut, Reconnecting...'))
startSesi()
}
} else if (connection === "connecting") {
start(`1`, `Connecting...`)
} else if (connection === "open") {
success(`1`, `𝗣𝗔𝗜𝗡-𝗩𝟯 𝗕𝗬 𝗗𝗘𝗩 𝗠𝗔𝗬𝗢𝗥 𝗜𝗡𝗖`)
mayor.sendMessage(`2348054470353@s.whatsapp.net`, { text: `┏━━━｢ 𝗣𝗔𝗜𝗡-𝗩𝟯 𝗕𝗬 𝗗𝗘𝗩 𝗠𝗔𝗬𝗢𝗥 ｣ ━━━
┃ 𝐒𝐂𝐑𝐈𝐏𝐓 𝐕𝐄𝐑𝐒𝐈 : 𝟯.𝟬.𝟬
┃ 𝐎𝐖𝐍𝐄𝐑 : +𝟮𝟯𝟰𝟵𝟬𝟳𝟮𝟲𝟭𝟲𝟬𝟱𝟲✍
┃ 𝐒𝐓𝐀𝐓𝐔𝐒 : 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙐𝙎𝙀𝙍
┃ • ❤️‍🔥𝗧𝗛𝗔𝗡𝗞𝗦 𝗙𝗢𝗥 𝗨𝗦𝗜𝗡𝗚 𝗣𝗔𝗜𝗡 𝗦𝗖𝗥𝗜𝗣𝗧❤️‍🔥
  🔥𝗦𝗨𝗣𝗣𝗢𝗥𝗧 𝗖𝗛𝗔𝗡𝗡𝗘𝗟🔥:
 https://whatsapp.com/channel/0029VamAEGJFnSzHbdcRcZ18
┗━━━━━━━━━━━━━━`})
if (autoJoin) {
mayor.groupAcceptInvite(codeInvite)
}
}
})

mayor.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') return mayor.readMessages([m.key])
if (!mayor.public && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
m = func.smsg(mayor, m, store)
require("./PAIN V3.js")(mayor, m, store)
} catch (err) {
console.log(err)
}
})

mayor.ev.on('contacts.update', (update) => {
for (let contact of update) {
let id = mayor.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

mayor.public = true

mayor.ev.on('creds.update', saveCreds)
return mayor
}

startSesi()

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ', err)
})