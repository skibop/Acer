const client = require("../index");
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem();
require("dotenv").config();

client.on("ready", () => {
  cs.setMongoURL(process.env.mongoPath);
  cs.setDefaultWalletAmount(100);
  cs.setDefaultBankAmount(1000);
});
