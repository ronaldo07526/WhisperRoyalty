export const settings = {
    // Bot Configuration
    botName: 'yourhïghness',
    version: '1.0',
    prefix: '?',

    // Owner Configuration
    ownerNumber: '2349122222622@s.whatsapp.net', // Replace with actual owner number
    ownerNumbers: ['2349122222622', '2349122222622@s.whatsapp.net'], // Multiple owner formats for recognition

    // Session Configuration (Manual Session)
    // To change session: Replace the base64 string below with your new session data
    sessionBase64: "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK05YMmlVZHd4WnVWbjFQVEVlRDBWcGZPWEpUSGJhRVRNSkNDTXpHaDZrdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTFBucnhMVllmOG9QMVlLU1BEa3RZK3A0dXNkZzc2dlRRL3JaUzNyblQzUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnQUlOME11ZXFaRGJ0cU94TGpnN0IrYjFXUFdyZU0vaWhCeVNlVDZ0eUYwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3V051RVMzSVRxWkRKejd6b0d1VU1JdnFpTVRoU0JLZlNMNFVQUWhtdFJBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFJdzRXdy9ORC9VNlRGUmtOdDRTT1VQbW1iMmFmcWhWcmJzdmxmQWU0RXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpiVG5kWWR3ZWgzcG1KVlNPSURTSWpRQUNRMmNlOWlYbE56eVhDVUxKaXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0FxSWgwWGorVnI3SS93UTZKZWYrVWNRaGVuMGx2YVRpMzFYbmtvcm5Hdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicjRHSThhcURoSTVsUVduVjFFV0k3bW04dnIvRWNJVWpLUGdHazI3aVp5VT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9jMDZ0RGl3U1ZXZlVZZEZmQnlmT0tKSGNuVXZhTDZld3BBaXRYM3hBVWVtbjRQSTFOR2UxdXFsQVU5N1ZobkJneHZoQ0Zkc05ncFQ3YXNnSGZ5M2p3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTEsImFkdlNlY3JldEtleSI6ImdLc0RIUWJVV2duUUVnWDhmbG54aTZ5SFNhNmZPMlU3TCtlNVNnM3hjTEU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTEyMjIyMjYyMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzODY5QUM5RTVCRDVBQUJCNTQwNjQzMUM4MzMzQzNFOSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUzMzQ2NDI3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MTIyMjIyNjIyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijg2NkM1NThCRTNCNTkwNDJFRDdFREE1MkFDQUQwM0IzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTMzNDY0MzZ9XSwibmV4dFByZUtleUlkIjozMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMzLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjcxOUpaQUhOIiwibWUiOnsiaWQiOiIyMzQ5MTIyMjIyNjIyOjUzQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTgyNzI1NDc0NTUzOTg2OjUzQGxpZCIsIm5hbWUiOiJhbGxhaW5hY29sIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLdTc2K01CRU9maWg4UUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJIL1czVWlDZnpQaVA1SUl6SXpoU2Yyd2t6Ni81U3BPM2cyNjFaOXdRS1RFPSIsImFjY291bnRTaWduYXR1cmUiOiJSZ2wvZnB2OHpWQzUrNW5GeDc5MllZc3YzMTNjMTFPSjRRQldHZmd6TU1SWVU5OHRDekNXNWpKNWk0TVJoV0tzckNJdEkrTkZTT1JORk1jN1lRaFdEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiK1NrODVwSG9RdGM2UUNGMlVuemlCUE1oNEJveTg5K00wZTRqNzN1Wkp2eUJMVTV5b0FLOStyUE5aTlNJbWxnMDVPc0c0ZVBVNW4wMitPYjh2UGpKaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTIyMjIyNjIyOjUzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlIvMXQxSWduOHo0aitTQ015TTRVbjlzSk0rditVcVR0NE51dFdmY0VDa3gifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MzM0NjQyMSwibGFzdFByb3BIYXNoIjoibm0zQmIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9OKyJ9", // Fresh session data

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
