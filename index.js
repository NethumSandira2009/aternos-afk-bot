const mineflayer = require("mineflayer");

function startBot() {
  const bot = mineflayer.createBot({
    host: process.env.HOST,      // Railway will insert your Aternos IP
    username: "AFK_Bot",
    version: "1.16.5"            // <-- IMPORTANT: set MC version here
  });

  bot.on("spawn", () => {
    console.log("Bot connected to 1.16.5 server!");
    bot.setControlState("sneak", true);
  });

  bot.on("end", () => {
    console.log("Bot disconnected. Reconnecting...");
    setTimeout(startBot, 5000);
  });

  bot.on("kicked", console.log);
  bot.on("error", console.log);
}

startBot();
