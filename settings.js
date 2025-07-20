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
    sessionBase64: "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUszRlNWOGI1RktpdkJRUjZNakZTSFoxMWVsWXNwamZ0Z2JZRXhqZTcyOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKzJOM0ZNVFdpSFlHTlFJSXh4aHVQMk12MVJmNXoxRXJkVmVxMWVraWRuVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHQmxaTDl0UTVyRHFDYS9neDFkTDQwdWRCb1JkMVd6by84MUtwOGp3U2tVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYRHY0WGdBdUJ3a1FwTG15cStkWFpYeW9IVWZ0SnltbU1oWjh3TDFFcURvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklDazZMUHFScUJEQUhtYnovSVJuS0Z4YjdyQXZXdFNrRWNRNFZZaFl4Rnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVnTGo5cFptelBRRFpIZlcvYVRaaHVZOElSWmpWcjF6YVZFeG1kaThJM1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidURGSEp5cXZPa0gwOWhRVFptQUdRS1l0ejFiTmx3Tjl4NlM2K3JyWTMwND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieCtPa3MydktuU3lxanFENzdoZEdCdmJXUFEzMHBuV1lGaTJDZCs5SU1rOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjgzMnR0blI4cVF0dEhRcmhEeEtlbSt5M004MHpBVm1vUU1WZDVLZU9aT3NCN3FxSXZZQ1FkblJ4NHB5KzRSUFhjQ3MzVzdWc2c1eDZhZnJ2QmQzeWd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI5LCJhZHZTZWNyZXRLZXkiOiJLMUpiWFJwSVB2SCtSNzZMMHJncEN2enY5OWNqbUNLN0p4eERJT21hKzc4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxMjIyMjI2MjJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0VEQjRCNkJDODNFNkZDMTkxQjlCRTk0REZCMzM1MzAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MjkzNDYxOX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTEyMjIyMjI2MjJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiREIxMzVFOTBGN0E5QkVBQkQxOEUxM0I0M0UyQzQ3RTUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MjkzNDYyOH1dLCJuZXh0UHJlS2V5SWQiOjMzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzMsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiTE5QOE41RlciLCJtZSI6eyJpZCI6IjIzNDkxMjIyMjI2MjI6NTBAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxODI3MjU0NzQ1NTM5ODY6NTBAbGlkIiwibmFtZSI6IvCfp6xb4oCgXWjDuHJsw6DigIXigqrDuMO4a8Ovw6td4oCgXfCfp6wifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BUVHZNOEdFTWZSN3NNR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkhadnVWNmZ3c0RTVW1rTHJoUXQrRktZTS9mcnkwMGdtakhMRHlJb1ZwaVE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik5RQ2RDMGJHYzRIRmhra3dkdW1lelNmUEt3WDVsZjhldE1HRzNCdktNd3U1ejBVY21pT2wxWHJyME8rQVlwS1J1QTZBSlo4ZGk5SWpRRnpWbW5iQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IjhCUmY5VkZWYWludjBDRzJCOHhJR0wwQU1KQVJHMnYzN2Q2VU9WcVl6UmhvU0ZUb0UrVEpZdGpTZmxKa1p3WHJpUXNHOXlqc1FuS2FyTUNrM1kwdWlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTEyMjIyMjYyMjo1MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSMmI3bGVuOExBMGxGcEM2NFVMZmhTbURQMzY4dE5JSnN4eXc4aUtGYVlrIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTI5MzQ2MTIsImxhc3RQcm9wSGFzaCI6Im5tM0JiIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLOUsifQ==", // Fresh session data

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
