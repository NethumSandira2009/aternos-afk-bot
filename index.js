const mineflayer = require("mineflayer");

function startBot() {
  const bot = mineflayer.createBot({
    host: process.env.HOST,  // Railway will set this
    username: "AFK_Bot",
    version: false
  });

  bot.on("spawn", () => {
    console.log("Bot connected!");
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
