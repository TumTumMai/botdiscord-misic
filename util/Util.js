exports.canModifyQueue = (member) => member.voice.channelID === member.guild.voice.channelID;

let config;

try {
  config = require("../config.json");
} catch (error) {
  config = null;
}

exports.TOKEN = "ODkzODA0OTgwNjY5MTQxMDMw.YVgywQ.1RJYgZe7bD3_yj0WRC1KEYwWaWs"
exports.YOUTUBE_API_KEY = "AIzaSyDl0ubZlhzNBCi3OhtW6ZoLXxDh5Uh_xFw"
exports.SOUNDCLOUD_CLIENT_ID = config ? config.SOUNDCLOUD_CLIENT_ID : process.env.SOUNDCLOUD_CLIENT_ID;
exports.PREFIX = (config ? config.PREFIX : process.env.PREFIX) || "/";
exports.MAX_PLAYLIST_SIZE = (config ? config.MAX_PLAYLIST_SIZE : parseInt(process.env.MAX_PLAYLIST_SIZE)) || 10;
exports.PRUNING = (config ? config.PRUNING : (process.env.PRUNING === 'true' ? true : false));
exports.STAY_TIME = (config ? config.STAY_TIME : parseInt(process.env.STAY_TIME)) || 30;
exports.DEFAULT_VOLUME = (config ? config.DEFAULT_VOLUME : parseInt(process.env.DEFAULT_VOLUME)) || 100;
exports.LOCALE = (config ? config.LOCALE : process.env.LOCALE) || "th";