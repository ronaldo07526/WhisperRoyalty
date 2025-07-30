export const settings = {
    // Bot Configuration
    botName: 'yourhïghness',
    version: '1.0',
    prefix: '?',

    // Owner Configuration
    ownerNumber: '270619017546@s.whatsapp.net', // Replace with actual owner number
    ownerNumbers: ['270619017546', '270619017546@s.whatsapp.net'], // Multiple owner formats for recognition

    // Session Configuration (Manual Session)
    // To change session: Replace the base64 string below with your new session data
    sessionBase64: "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEYyVU1xNjR2Zk1rYkhrRU9GdjRnTjh1STF2V0R6NnRVRWVXOCtabUJrMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTjNvRFdqY3l4VFloMzBFYUdhellZVGl1bFBuS3VUdE1QeWdHb3QxTFl3VT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJS0FKSDRRMWRFTENueFVLS2ZBOXBlcmVoZjZ0QTkxQlJMejRkQzRiTjNVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQakNXTzNkWEhXT3ppTmdkOFc4UEJ5VEJ2WmJuZlJHN1dWbndVOTZZN3g4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBCSGdMajNUZDJiV1lQeDYvUThKWVBmSzBCM2tLV1I4bEtvL29DUVZwVzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZQVWl6SDJpVUdZRGQ3YTVpL0pxQjlQQVIyVGNQMytrZWJpbURyeXhHR0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS09tSFNZbUpGUlBQWDhZSno0cUNVQ2FURGxLNVFLeVZhOWlJLzBBd0NFRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSG01VWdkbnB5M05TenVpTDRYMHVGSENjeGdodk5iSVF5ZjlYYk40UWJRVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNOTFM5WE93amM1TUYxYUpid1Jma0dtaWVTUnkvcCs1ZkYwcGQ4Wnlldi93d1ExcDE4bGtrR2Zhcm1Ja1htYjd0aHZCMUMvR3QwQ0pWZWRJbjJsQmd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk2LCJhZHZTZWNyZXRLZXkiOiJWbThnY2NPY1VBSzhiS25DaUFpajhscktDalB1VkxHZER3ZVVScndKM0Y4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI3NjE5MDE3NTQ2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkU0OUZBNDVFMUQ0NTkwN0JGN0Y4RTMwRUZCRkFEQjY4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTM4NzQzNjZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI3NjE5MDE3NTQ2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkZCNDlDMTk0MjJBNEUyNkQ0QThDMUFFODQ3RTZGNUY0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTM4NzQzNjd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkpBRkxDUE1RIiwibWUiOnsiaWQiOiIyNzYxOTAxNzU0NjoyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ilplcm8iLCJsaWQiOiIxMTQwNDA1MDg1NDMxMDA6MkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lMMm9iTUhFSTMvcDhRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IitGWUtyN1htU2FRSXlsRm9pekJ0ZHNtclMvR0ovL21DVjNWSS9sNERDemM9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImZhNnRMMzA1SDd6aG9MbEhOaDBmY2dIUFhHeUE5SWdEckVwaGRTcUEzR1NNckZoQXdNcG1TY090UkpkQzBzcHFSbDVYdzNGVlRsckNmclpZait2MUJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJJV0ZOMEZ0V1kwWVB5c3owL3dQVGMyMExWYUNRaHRnTDFJcUdxSW1kWWVZK2NEdXFEZTU2UVY4Q0Q1elh2djcyVmtSV2I4ODdFYkZ4T2poSTIzV3dqZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3NjE5MDE3NTQ2OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZmhXQ3ErMTVrbWtDTXBSYUlzd2JYYkpxMHZ4aWYvNWdsZDFTUDVlQXdzMyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUzODc0MzMxLCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZnViJ9", // Fresh session data

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
