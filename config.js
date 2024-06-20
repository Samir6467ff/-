import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['201129003230', '𝐵𝛩𝑺𝑺 👑', true], ['201129003230'], ['201129003230'], ['201129003230'], ['201129003230'], ['201129003230'], ['201129003230'], ['201129003230'], ['201129003230'], ['201129003230'], ['201129003230']]
global.owner = [['17253349206', '𝑃𝐴𝐵𝐿𝛩 👑', true], ['17253349206'], ['17253349206'], ['17253349206'], ['17253349206'], ['17253349206'], ['17253349206'], ['17253349206'], ['17253349206'], ['17253349206'], ['17253349206']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.animxscans = ['201129003230']
global.suittag = ['201129003230']
global.mods = []
global.prems = []

global.packname = '『 +201129003230 』'
global.author = '『 𝑻𝑼𝑹𝑩𝑶 𝑩𝑶𝑻⦖🇵🇸 』'
global.wm = '『𝑻𝑼𝑹𝑩𝑶 𝑩𝑶𝑻 』'
global.wm2 = '『 𝐏𝐀𝐁𝐋𝐎 』'
global.azami = '『𝐵𝛩𝑺𝑺 』'
global.cb = '『 𝑻𝑼𝑹𝑩𝑶 』'

global.vs = 'V2 • 1.0.5'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.KMA = '╰━━━〔 *🛡️ 1.7.9* 〕━━━━━⬣'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '© TURBO_BOT'
global.devnum = '+201129003230'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
