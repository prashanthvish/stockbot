# Stock Bot

A bot which texts you about stock price & percentage changes in Nifty50 every working day at 9:20am and 3:20pm.
<br>
<br>

## How to Setup

- Chat with @BotFather and get your Bot Token
- Find out your Telegram CHAT ID
- Clone the Repo
- `cd stockbot` and `npm install`
- `cp .env.example .env` and fill `.env`
- Setup the cron job `crontab -e`
- `20 9,15 * * 1-5 cd $FULL_PATH/stockbot; node stock.js`
  <br>
  <br>

## License

MIT
