import translate from '@vitalets/google-translate-api'
import fetch from 'node-fetch'
let handler = async (m, { args, usedPrefix, command }) => {
let msg = `*[βππππβ] πππΎ π²πΎπππ΄π²ππΎ π³π΄π» π²πΎπΌπ°π½π³πΎ ${usedPrefix + command} (idioma) (texto)*\n*π΄πΉπ΄πΌπΏπ»πΎ:*\n*${usedPrefix + command} es Hello*\n\n*π²πΎπ½πΎπ²π΄ π»πΎπ πΈπ³πΈπΎπΌπ°π π°π³πΌπΈππΈπ³πΎπ π΄π½:*\n*- https://cloud.google.com/translate/docs/languages*`
if (!args || !args[0]) return m.reply(msg)  
let lang = args[0]
let text = args.slice(1).join(' ')
const defaultLang = 'es'
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')}
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
try {      
let result = await translate(`${text}`, { to: lang, autoCorrect: true })
await m.reply('*TraducciΓ³n:* ' + result.text)
} catch {
try {    
let lol = await fetch(`https://api.lolhuman.xyz/api/translate/auto/${lang}?apikey=${lolkeysapi}&text=${text}`)
let loll = await lol.json()
let result2 = loll.result.translated
await m.reply('*TraducciΓ³n:* ' + result2)
} catch { 
await m.reply('*[βππππβ] ERROR, VUELVA A INTENTARLO*')    
}}}
handler.command = /^(translate|traducir|trad)$/i
export default handler
