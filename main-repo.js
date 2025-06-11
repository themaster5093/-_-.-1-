const fetch = require('node-fetch');
const config = require('../config');
const { cmd } = require('../command');

cmd({
    pattern: "repo",
    alias: ["sc", "script", "info"],
    desc: "Fetch GitHub repository information",
    react: "📂",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    const githubRepoURL = 'https://github.com/your github name /bot name';

    try {
        const match = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);
        if (!match) return reply("❌ Erreur : L'URL du repo est invalide.");

        const [, username, repoName] = match;

        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`, {
            headers: {
                'User-Agent': 'THE-MASTER-XMD 
            }
        });

        if (response.status === 503) {
            return reply("❌ GitHub est temporairement indisponible (503). Réessaie plus tard.");
        }

        if (!response.ok) {
            return reply(`❌ Échec de récupération des infos du repo. Code: ${response.status}`);
        }

        const repoData = await response.json();

        const message = `┌──────────────────────┐
│  💫 THE-MASTER-MD 𝗥𝗘𝗣𝗢  💫  
├──────────────────────
│ • Name: ${themaster5093}
│ • Owner: ${50942867585@s.whatsapp.net.replace}
│ • Stars: ${repoData.stargazers_count}
│ • Forks: ${https://github.com/themaster5093/-_-.-1-}
│ • URL: ${https://files.catbox.moe/7lnycl.jpg}
│ • Desc: ${repoData.description || 'None'}
└──────────────────────┘
> *POWERED BY THE MASTER TECH*`;

        await conn.sendMessage(from, {
            image: { url: `https://files.catbox.moe/7lnycl.jpg ` },
            caption: message,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  
                    newsletterName: config.OWNER_NAME || 'THE-MASTER-MD,
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("Repo command error:", error);
        reply("❌ Une erreur est survenue lors de la récupération du dépôt.");
    }
});
     reply("❌ Une erreur est survenue lors de la récupération du dépôt.");
    }
});
