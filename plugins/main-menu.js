//Copyright ©JOANIMI/KILLUA
//https://whatsapp.com/channel/0029Vab5oDNElagpHtJjmT0B

import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    const mentionId = m.key.participant || m.key.remoteJid;

    if (device !== 'desktop' || device !== 'web') {      
        var joanimiimg = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/0f8c2b3a0a56eba1f9173.jpg'}}, { upload: conn.waUploadToServer })
        const interactiveMessage = {
            body: { text: `test`.trim() },
            footer: { text: `©𝑻𝑼𝑹𝑩𝑶 𝑩𝑶𝑻`.trim() },  
            header: {
                title: `ازيك ي @${mentionId.split('@')[0]}`,
                subtitle: `test`,
                hasMediaAttachment: true,
                imageMessage: joanimiimg.imageMessage,
            },
            nativeFlowMessage: {
  						buttons: [
  							{
  								name: 'single_select',
  						  	buttonParamsJson: JSON.stringify({
  						  		title: '🐧دوس هنا',
  						  		sections: [
  						  			{
  						  				title: 'قائمه',
  							  	    highlight_label: 'ON',
  						  		    rows: [
  						  		    	{
  						  		    		header: 'قسم الجروب',
  										      title: '',
  									    	  description: '.الجروب',
  								    		  id: 'test'
  						  		    	}
  						  		    ]
  						  			},
  						  			{
  						  				highlight_label: 'مميز',
  						  				rows: [
  						  					{
  						  		    		header: 'قسم المطور',
  										      title: '',
  									    	  description: '.قائمتي',
  								    		  id: 'tes'
  						  		    	}
  						  				]
  						  			},
  						  			{
  						  				highlight_label: 'مميز',
  						  				rows: [
  						  					{
  						  		    		header: 'لجميع الاقسام',
  										      title: '',
  									    	  description: '.المهام',
  								    		  id: 'te'
  						  		    	}
  						  				]
  						  			}
  						  		]
  						  	})
  							},
                              {
                                  name: 'quick_reply',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'quick_reply',
                                      id: `message`
                                  })
                              },
                              {
                                  name: 'cta_url',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'url',
                                      url: 'https://www.google.com',
                                      merchant_url: ''
                                  })
                              },
                              {
                                  name: 'cta_call',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'call',
                                      id: 'message'
                                  })
                              },
                              {
                                  name: 'cta_copy',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'نسخ',
                                      id: '123456789',
                                      copy_code: 'message'
                                  })
                              },
                              {
                                  name: 'cta_reminder',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'cta_reminder',
                                      id: 'message'
                                  })
                              },
                              {
                                  name: 'cta_cancel_reminder',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'cta_cancel_reminder',
                                      id: 'message'
                                  })
                              },
                              {
                                  name: 'address_message',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'address_message',
                                      id: 'message'
                                  })
                              },
                              {
                                  name: 'send_location',
                                  buttonParamsJson: JSON.stringify({
                                  })
                              }
  			  		],
                messageParamsJson: ''
            }
        };        

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m })
        msg.message.viewOnceMessage.message.interactiveMessage.contextInfo = { mentionedJid: [mentionId] };
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    } else {
        conn.sendFile(m.chat, 'JoAnimi•Error.jpg', m);      
    }    
};
handler.help = ['imgboton'];
handler.tags = ['For Test'];
handler.command = /^(اوامر)$/i;
export default handler;
