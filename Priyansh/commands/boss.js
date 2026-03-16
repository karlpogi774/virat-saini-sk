const fs = require("fs");
module.exports.config = {
	name: "boss",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "virat", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🙂",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("sumit")==0 || event.body.indexOf("@Mèla Baçha")==0 || event.body.indexOf("mela bacha")==0) {
		var msg = {
				body: "Mere Boss ka Nam mat lo apni gandi juban se Yahi Thok dungi pakad ke 🤨🤨🤨",
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😡", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }
