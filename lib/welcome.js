const fs = require('fs-extra')

module.exports = welcome = async (client, event) => {
    //console.log(event.action)
    const welkom = JSON.parse(fs.readFileSync('./lib/welcome.json'))
    const isWelkom = welkom.includes(event.chat)
    try {
        if (event.action == 'add' && isWelkom) {
            const gChat = await client.getChatById(event.chat)
            const pChat = await client.getContact(event.who)
            const { contact, groupMetadata, name } = gChat
            const pepe = await client.getProfilePicFromServer(event.who)
            const capt = `╭════•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙
│    𝗜𝗡𝗙𝗢 𝗡𝗘𝗪 𝗠𝗘𝗠𝗕𝗘𝗥
│    @${num.split('@')[0]}\
│  ꜱᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ ɢʀᴜʙ
│      *${mdata.subject}*
│  ꜱɪʟᴀᴋᴀɴ ɪꜱɪ ꜰᴏʀᴍᴜʟɪʀɴʏᴀ
│         𝐚𝐬𝐬𝐚𝐥𝐚𝐦𝐮𝐚𝐥𝐚𝐢𝐤𝐮𝐦
│ Nama  :  
│ Umur   :
│ asal     :  
 |  laki-laki/perempuan :
│ 𝗧𝗲𝗿𝗶𝗺𝗮𝗸𝗮𝘀𝗶𝗵 𝗱𝗮𝗻 𝘀𝗮𝗹𝗮𝗺 𝗸𝗲𝗻𝗮𝗹
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙
𝚈𝚊𝚗𝚐 𝚗𝚐𝚐𝚊𝚔 𝚒𝚗𝚝𝚛𝚘 𝚊𝚗𝚊𝚔 𝚋𝚊𝚋𝚒:>`
            if (pepe == '' || pepe == gagal❗) {
                await client.sendFileFromUrl(event.chat, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQcODjk7AcA4wb_9OLzoeAdpGwmkJqOYxEBA&usqp=CAU', 'profile.jpg', capt)
            } else {
                await client.sendFileFromUrl(event.chat, pepe, 'profile.jpg', capt)
            }

        }
    } catch (err) {
        console.log(err)
    }
}
