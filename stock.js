require("dotenv").config();
const http = require("axios");
const { Telegram } = require("telegraf");

const telegram = new Telegram(process.env.BOT_TOKEN);

const main = async () => {
  const data = await http.get("https://www.nseindia.com/api/equity-stockIndices?index=NIFTY%2050");
  const nifty50 = data.data.data.sort((a, b) => b.pChange - a.pChange);

  let stockMessage = "";
  for (let stock of nifty50) {
    stockMessage += `${stock.symbol}  (${stock.lastPrice}₹ | ${stock.pChange}%)\n`;
  }

  await telegram.sendMessage(process.env.MY_CHAT_ID, stockMessage);
};

main();
