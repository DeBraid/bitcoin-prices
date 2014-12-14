// BitcoinPrices = new Meteor.Collection('bitcoin_prices'); 

SyncedCron.start();

SyncedCron.add({
  name: "get Bitcoin Prices for DB",
  schedule: function(parser){
    return parser.text('every 5 minutes');
  },
  job: function(){
    return Meteor.call("getBitcoinPricesForDatabase");
  }
});

Meteor.methods({
  getBitcoinPricesForDatabase: function () {
    var result = Meteor.http.call("GET", "http://api.bravenewcoin.com/ticker/bnc_ticker_btc.json");
    var data = result.data;

    BitcoinPrices.insert({
      timestamp : data.time_stamp,
      price : data.ticker.bnc_price_index_usd,
      symbol : data.ticker.coin_id,
      name : data.ticker.coin_name,
      mkt_cap_24hr_pct : data.ticker.mkt_cap_24hr_pcnt,
      mkt_cap_usd : data.ticker.mkt_cap_usd,
      price_24hr_pct : data.ticker.price_24hr_pcnt,
      total_supply : data.ticker.total_supply,
      vol_24hr_pct : data.ticker.vol_24hr_pcnt,
      volume_24hr_usd : data.ticker.volume_24hr_usd,
    });

    return data;
  }  
});

