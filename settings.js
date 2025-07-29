export const settings = {
    // Bot Configuration
    botName: 'yourhïghness',
    version: '1.0',
    prefix: '?',

    // Owner Configuration
    ownerNumber: '260765012260@s.whatsapp.net', // Replace with actual owner number
    ownerNumbers: ['260765012260', '2349122222622@s.whatsapp.net'], // Multiple owner formats for recognition

    // Session Configuration (Manual Session)
    // To change session: Replace the base64 string below with your new session data
    sessionBase64: "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0UwZ24xZ3VoeDVhVmc4c2xob0YzR2tKbjdYbEVtbGFvcEJ4NWo0eG5sYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMC93Z1hsOXJuYmw2UnJSZUJKeWJZU0FMR1VuY0E4K0hWOEtuLzlmSFpDMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2QzFGL1Y4NjVuc1JBRmtEQ1ExY2tiaUNRbjJyVWRXcUNuMVRLNitpaTJ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTd3ViUjc1U0FFV2N1aE9HUXhrdlBBbEdMRWdHc3g2QW1Wd2x0M01XMVJzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFFVUR4dnpIZ1ZTdml2emJ5WFYvN1JGZk1rTHpsNmlRVkxzcm1KOXRqMVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVLaVRyRXdKcWpOZjFTMFhHbnYvbExETTA4S2RkM2U5V3hsVXVjRFdyMlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUhqTXlWMmhyNi9Cc3ZXZWtocXU3SmdES01MdWFnazNuMndtMzQ5dFVtVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTFlueFg5cHU4Sk5ncVNxTDRQMUxUYk9YU3c3UFN6c2dqVWV2UTlMb3pCdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlTVHdUSVIyNm1Qc3FNQnVBNFlWRWYrRGRVeUhlZ2tWRjVjVzJFUExBRWM0VTY3VEFYRGwvSm1TR28yanFhL2pOek5tNGs3anQ3S2Y2eDRBY3VQMkFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIwLCJhZHZTZWNyZXRLZXkiOiJSTFowdmRveDRaMEpLVW1ZSzFuMFVsNDdBY1VGZUZRM2txV0Jmd1U3blJzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2MDc2NTAxMjI2MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDNjcxQUQzNEUzMEE2NDQxNDA4QTQ3OEJCMUQyOTREQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUzNzMyOTc0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjA3NjUwMTIyNjBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQzMxMjA0MTI4ODk2ODEwODIyRDZBNkQ1NzlDMDZEMEQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MzczMjk3Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiVFhCNk5ENkQiLCJtZSI6eyJpZCI6IjI2MDc2NTAxMjI2MDoxM0BzLndoYXRzYXBwLm5ldCIsImxpZCI6Ijg4ODYzMjc2MDE1ODE2OjEzQGxpZCIsIm5hbWUiOiLigJTNns2fzZ7Nn/CWo5jhtrvhtYnKs+G1kuKAlM2ezZ/Nns2f8JajmCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS2E4OE1VREVOR3VuOFFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNlkwbVRGemorYnVobzhrR1VmbkdrdGFLMzBVMGFMNWFTbFBMb0ovSmF6TT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNEliNklQRDVpNE9yN2VpcFZ6UStLbzVUTlg0U1U4elY0eFNUeGdMdmNBUDJrdFhvbm54UW1KRFM0VUxHbCtlc241NEVFeGllZXAyVERvdjBUNkpXRHc9PSIsImRldmljZVNpZ25hdHVyZSI6IkxpdE5Jak5HTE53OXdHY0U4MWZkZUlEenB2d2pyY3dBTzhMQ2YwVS9ZcUs0eUx3cmdwd2JrWkV0b3hoSnRoV0VHeGhsTzRzelZjdXFrRDhJaVlvaURBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYwNzY1MDEyMjYwOjEzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVtTkpreGM0L203b2FQSkJsSDV4cExXaXQ5Rk5HaStXa3BUeTZDZnlXc3oifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MzczMjk1OSwibGFzdFByb3BIYXNoIjoiMkc0QW11IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIdW0ifQ==", // Fresh session data

    // API Keys
    geminiApiKey: process.env.GEMINI_API_KEY || 'AIzaSyArdMt3se0P2U5PCWjprpBZlzGZ2bHJklg',
    youtubeApiKey: process.env.YOUTUBE_API_KEY || 'AIzaSyBvVo--Jslb084-F8ATSWgsgqOl2JVh660',
    geniusApiKey: "NrGLCWeRCNlny8qtUzXhxalvAwWWjcjWdwyCe3aUrXJZLlzs3lwSd5ddu_Iy3q5O", // Get from https://genius.com/api-clients
    openaiApiKey: "", // Get from https://platform.openai.com/account/api-keys
    auddApiKey: "583afeb81eebfed8c59a404242418635", // AudD API for Shazam functionality
    truecallerId: 'a1i0x--L2j_d8lF4BTFZ7e3p0t',

    // Profile Pictures
    profilePics: [
        'https://files.catbox.moe/mq8b1n.png',
        'https://files.catbox.moe/dm7w9d.jpeg',
        'https://files.catbox.moe/0j5tnz.jpeg',
        'https://files.catbox.moe/b7wnah.jpeg',
        'https://files.catbox.moe/oo7yfn.jpeg',
        'https://files.catbox.moe/57l61y.jpeg',
        'https://files.catbox.moe/q64syc.jpeg'
    ],

    // Anti-spam settings
    antiSpam: {
        enabled: false,
        maxMessages: 5,
        timeWindow: 60000, // 1 minute
        cooldownTime: 30000 // 30 seconds
    }
};
