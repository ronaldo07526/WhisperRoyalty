
# 🤖 yourhïghness - Next-Gen WhatsApp Bot v1.0

<div align="center">

[![GitHub Stars](https://img.shields.io/github/stars/horlapookie/WhisperRoyalty?style=for-the-badge&logo=github&color=gold)](https://github.com/horlapookie/WhisperRoyalty/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/horlapookie/WhisperRoyalty?style=for-the-badge&logo=github&color=blue)](https://github.com/horlapookie/WhisperRoyalty/network)
[![License](https://img.shields.io/github/license/horlapookie/WhisperRoyalty?style=for-the-badge&color=green)](https://github.com/horlapookie/WhisperRoyalty/blob/main/LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-v18+-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![Replit](https://img.shields.io/badge/Deploy%20on-Replit-667881?style=for-the-badge&logo=replit)](https://replit.com)

**⚡ Advanced Multi-Purpose WhatsApp Bot with AI Integration**

[📖 Documentation](#-documentation) • [🚀 Quick Start](#-quick-start) • [🎮 Features](#-features) • [💡 Support](#-support)

</div>

---

## 🌟 **What Makes yourhïghness Special?**

yourhïghness isn't just another WhatsApp bot - it's a **complete digital assistant ecosystem** packed with cutting-edge features:

- 🧠 **AI-Powered Intelligence** - Gemini AI integration for smart conversations
- ⚔️ **Epic Pokemon Universe** - Complete battle system with 4v4 strategic gameplay
- 🛡️ **Ethical Hacking Toolkit** - Educational cybersecurity tools
- 🎵 **Media Powerhouse** - Download music, videos, and social content
- 🎮 **Interactive Gaming** - Chess, trivia, hangman, and more
- 📊 **Utility Arsenal** - 135+ commands for productivity
- 👥 **Advanced Group Management** - Comprehensive moderation tools
- 🔄 **Auto Features** - View status, react, typing indicators, and more
- 📱 **Multi-Platform Ready** - Deploy anywhere with ease

---

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js v18+ installed
- WhatsApp account
- Gemini API key (free from Google AI Studio)

### **Installation**

1. **Clone & Setup**
   ```bash
   git clone https://github.com/horlapookie/WhisperRoyalty.git
   cd WhisperRoyalty
   npm install
   ```

2. **Configure Settings**
   ```javascript
   // Edit settings.js
   export const settings = {
       ownerNumber: "YOUR_NUMBER@s.whatsapp.net", // Format: 2349122222622@s.whatsapp.net
       geminiApiKey: "YOUR_GEMINI_API_KEY",
       sessionBase64: "YOUR_SESSION_DATA", // Get from wa.me/2349122222622
       prefix: ".",
       botName: "yourhïghness"
   };
   ```

3. **Get Session Data**
   - Visit: https://horlapair-olamilekans-projects-1c056653.vercel.app/
   - Use the 8-digit pairing code with your WhatsApp
   - Copy the session data to `settings.js`
   - Alternative: Message wa.me/2349122222622?text=session+loading+link+for+your+bot

4. **Launch Bot**
   ```bash
   npm start
   # or
   node index.js
   ```

5. **Success!** 🎉
   ```
   ✅ Bot connected successfully!
   📨 Connection notification sent to owner
   🤖 Bot is now running...
   ```

---

## 🎮 **Core Features**

### 🧠 **AI & Machine Learning**
| Command | Description | Example |
|---------|-------------|---------|
| `.ai <question>` | Chat with Gemini AI | `.ai What is quantum computing?` |
| `.translate <text> \| <lang>` | Multi-language translation | `.translate Hello \| Spanish` |
| `.img <prompt>` | AI image generation | `.img sunset over mountains` |

### ⚔️ **Pokemon Battle System**
| Command | Description | Usage |
|---------|-------------|-------|
| `.spawnpokemon` | Spawn wild Pokemon | Auto-spawning system |
| `.catch` | Catch spawned Pokemon | Quick-time catching |
| `.pvp challenge @user` | Challenge to 4v4 battle | Strategic team battles |
| `.pvp party` | Manage battle team | View active Pokemon |
| `.pokedex` | View collection | Complete Pokemon stats |

### 🎵 **Media & Entertainment**
| Feature | Commands | Capabilities |
|---------|----------|--------------|
| **Music** | `.music <song>`, `.lyrics <song>` | MP3 download, lyrics search |
| **Video** | `.yt <url>`, `.tiktok <url>` | YouTube/TikTok download |
| **Social** | `.instagram <url>`, `.twitter <url>` | Social media content |

### 🛡️ **Ethical Hacking (Educational)**
| Tool | Command | Purpose |
|------|---------|---------|
| **Network** | `.nmap <target>` | Port scanning info |
| **DNS** | `.dns <domain>` | Domain analysis |
| **Security** | `.whois <domain>` | Registration details |
| **Analysis** | `.headers <url>` | HTTP security headers |

### 🎮 **Interactive Games**
- ♟️ **Chess** - Full board game with notation
- 🎯 **Trivia** - Multi-category questions
- 🎪 **Hangman** - Word guessing with hints
- 🎲 **Dice Games** - Custom dice rolling
- 🃏 **8Ball** - Magic 8-ball predictions

### 🛠️ **Tools & Utilities**
| Command | Description | Usage |
|---------|-------------|-------|
| `.save` | Save status/media to private chat | `.save` (reply to status) |
| `.restart` | Restart bot system | `.restart` (owner only) |
| `=>gitupdate` | Update from GitHub repo | `=>gitupdate` (owner only) |
| `$command` | Execute bash commands | `$ls -la` (owner only) |

---

### 👑 **Owner Commands**

Exclusive controls for bot administrators:

```bash
.on/.off          # Bot power control
.public/.private   # Access mode switching
.autoview on/off   # Status auto-viewing
.autoreact on/off  # Auto-emoji reactions
.chatbot on/off    # DM AI responses
.block/.unblock    # WhatsApp contact blocking
.ban/.unban        # Bot user management
.autodel on/off    # Deleted message alerts
.restart          # Restart bot and resend connection message
.save             # Save status/media and send to private chat
=>gitupdate       # Update bot from GitHub repository
$ls               # Execute terminal commands (bash)
```

---

## 🔧 **Auto Features**

yourhïghness comes with powerful automation features:

| Feature | Command | Description |
|---------|---------|-------------|
| **Auto View Status** | `.autoview on/off` | Automatically view WhatsApp statuses |
| **Auto React** | `.autoreact on/off` | Auto-react to messages with random emojis |
| **Auto Typing** | `.autotyping on/off` | Show typing indicator automatically |
| **Auto Recording** | `.autorecording on/off` | Show recording indicator |
| **Auto Read** | `.autoread on/off` | Automatically read all messages |
| **Auto Status React** | `.autoreactstatus on/off` | React to status updates |
| **Chatbot Mode** | `.chatbot on/off/girl/boy` | AI responses in DMs with personality |
| **Delete Alerts** | `.autodel on/off` | Get notified of deleted messages |

---

## 🚀 **Deployment**

### **Deploy on Replit (Recommended - Always Free)**

1. **Fork this repository on Replit**
2. **Update `settings.js`** with your configuration
3. **Click the Run button**
4. **✅ Done!** Your bot is live 24/7

### **Environment Variables (Optional)**
Set these in your deployment platform:
```env
GEMINI_API_KEY=your_gemini_api_key
YOUTUBE_API_KEY=your_youtube_api_key
PORT=3000
```

### **Multiple Platform Support**
The bot includes configuration files for:
- 🔴 **Replit** (Recommended)
- 🟢 **Render**
- 🔵 **Railway**
- ⚫ **Vercel**
- 🟠 **Heroku**
- 🟡 **Fly.io**
- 🟣 **Netlify**
- 🐳 **Docker**

See `DEPLOYMENT.md` for detailed instructions.

---

## 📊 **Performance Stats**

```
🚀 Command Count: 135+ active commands
⚡ Response Time: <500ms average
🔄 Uptime: 99.9% reliability
📊 Multi-language: 100+ languages supported
🛡️ Security: Advanced anti-spam protection
🤖 AI Integration: Gemini-powered responses
🔧 System Control: GitHub integration & terminal access
💾 Auto-save: Status & media preservation
📱 Multi-Platform: Works on all devices
```

---

## 🎯 **Usage Examples**

### **Pokemon Battles**
```bash
# Start your Pokemon journey
.spawnpokemon              # Wild Pokemon appears
.catch                     # Catch the Pokemon
.pvp transfer2party 1      # Add to battle team
.pvp challenge @friend     # Challenge someone
.pvp accept               # Accept challenge
.pvp move1                # Use first move
```

### **AI Conversations**
```bash
# Smart AI interactions
.ai How do I code in Python?
.ai Write a poem about cats
.translate Bonjour | English
.img anime girl with sword
```

### **Media Downloads**
```bash
# Get your favorite content
.music Imagine Dragons Believer
.yt https://youtube.com/watch?v=...
.lyrics Shape of You
.tiktok https://tiktok.com/@user/video/...
```

### **Group Fun**
```bash
# Interactive group activities
.tagall Time for game night! 🎮    # Tags all members with @
.poll Should we order pizza? Yes|No
.trivia                            # Start quiz game
.chess                            # Begin chess match
```

---

## 🔒 **Security Features**

- 🛡️ **Anti-Spam System** - Rate limiting & cooldowns
- 🔐 **Owner-Only Commands** - Secure admin controls
- 🛠️ **Error Handling** - Graceful failure recovery
- 📝 **Audit Logging** - Complete activity tracking
- 🚫 **User Banning** - Block problematic users
- 📱 **Multi-Owner Support** - Multiple admin accounts

---

## 📱 **Platform Compatibility**

| Platform | Status | Notes |
|----------|--------|-------|
| 🤖 **Android** | ✅ Full Support | Recommended |
| 🍎 **iOS** | ✅ Full Support | All features work |
| 💻 **Desktop** | ✅ WhatsApp Web | Complete functionality |
| 🌐 **Multi-Device** | ✅ Synced | Cross-platform sync |

---

## 📞 **Support & Community**

<div align="center">

### **🆘 Need Help?**

| Support Type | Link | Description |
|--------------|------|-------------|
| 🐛 **Bug Reports** | [GitHub Issues](https://github.com/horlapookie/WhisperRoyalty/issues) | Report bugs & issues |
| 💡 **Feature Requests** | [GitHub Discussions](https://github.com/horlapookie/WhisperRoyalty/discussions) | Suggest new features |
| 📞 **Direct Support** | [WhatsApp](https://wa.me/2349122222622) | Direct developer contact |
| 📚 **Documentation** | [Wiki](https://github.com/horlapookie/WhisperRoyalty/wiki) | Detailed guides |
| 🔧 **Replit Deploy** | [Deploy Now](https://replit.com) | One-click deployment |

### **🌟 Show Your Support**

If yourhïghness has helped you, consider:
- ⭐ **Starring** the repository
- 🔄 **Sharing** with friends
- 💰 **Sponsoring** development
- 🤝 **Contributing** code

</div>

---

## 🤝 **Contributing**

We welcome contributions! Here's how to get started:

1. **⭐ Star this repository** (Required for access)
2. **👤 Follow @horlapookie** on GitHub
3. **🍴 Fork** the repository
4. **🔧 Create** your feature branch
5. **📝 Commit** your changes
6. **📤 Push** to the branch
7. **🔄 Open** a Pull Request

### **Development Guidelines**
- Follow existing code patterns
- Add proper documentation
- Test all new features
- Update README if needed
- Deploy and test on Replit first

---

## 📄 **License & Legal**

```
MIT License - Free for personal and commercial use
Copyright (c) 2024 horlapookie

Educational Tools Notice:
All ethical hacking tools are for educational purposes only.
Users are responsible for compliance with local laws.
```

---

<div align="center">

**🚀 Ready to dominate WhatsApp? Deploy yourhïghness today! 🚀**

[⚡ Deploy on Replit Now](https://replit.com) • [📖 Read Documentation](https://github.com/horlapookie/WhisperRoyalty/wiki) • [💬 Join Community](https://wa.me/2349122222622)

</div>
