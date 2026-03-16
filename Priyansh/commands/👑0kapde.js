const fs = require("fs");
module.exports.config = {
	name: "kapde",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🙂",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("@Kapde Fad Dungi")==0 || event.body.indexOf("sabke kapde fad do")==0 || event.body.indexOf("iske kapde fad do")==0 || event.body.indexOf("Kapde fad do")==0) {
		var msg = {
				body: "mera naam mat lo nale me dalke sb kuch fad dungi 🤨🤨",
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤠", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
