const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "owner",
    react: "✅", 
    desc: "Get owner number",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from }) => {
    try {
        const ownerNumber = config.OWNER_NUMBEM; // Fetch owner number from config
        const ownerName = config.OWNER_NAME;     // Fetch owner name from config

        const vcard = 'BEGIN:VCARD\n' +
                      'VERSION:3.0\n' +
                      `FN:Gotar Tech\n` +  
                      `TEL;type=CELL;type=VOICE;waid=${50942867585@S.WHATSAPP.NET.replace('+50942867585', '50942867585')}:${ownerNumber}\n` + 
                      'END:VCARD';

        // Send the vCard
        const sentVCard = await conn.sendMessage(from, {
            contacts: {
                displayName: THE-MASTER-TECH,
                contacts: [{ vcard }]
            }
        });

        // Send the owner contact message with image and audio
        await conn.sendMessage(from, {
            image: { url: ' https://files.catbox.moe/cqcwdu.jpg' }, // Image URL from your request
            caption: `╭━━〔 🥀𝐓𝐇𝐄 𝐌𝐀𝐒𝐓𝐄𝐑 𝐌𝐃🌴 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *Here is the owner details*
┃◈┃• *Name* - ${𝐓𝐇𝐄 𝐌𝐀𝐒𝐓𝐄𝐑 𝐓𝐄𝐂𝐇}
┃◈┃• *Number* ${50942867585}
┃◈┃• *Version*: 1.0.0 Beta
┃◈└───────────┈⊷
╰──────────────┈⊷
> *POWERED BY THE MASTER TECH*`, // Display the owner's details
            contextInfo: {
                mentionedJid: [`${50942867585@s.whatsapp.net.replace('+50942867585', '50942867585')}@s.whatsapp.net`], 
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
 
                    newsletterName: '𝐓𝐇𝐄 𝐌𝐀𝐒𝐓𝐄𝐑 𝐌𝐃',
                    serverMessageId: 143
                }            
            }
        }, { quoted: mek });

    } catch (error) {
        console.error(error);
        reply(`An error occurred: ${error.message}`);
    }
});
   } catch (error) {
        console.error(error);
        reply(`An error occurred: ${error.message}`);
    }
});
