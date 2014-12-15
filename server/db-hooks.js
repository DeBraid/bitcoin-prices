SyncedCron.start();

SyncedCron.add({
  name: "get hourly Bitcoin Prices for DB",
  schedule: function(parser){
    return parser.text('every 1 hour');
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

SyncedCron.add({
  name: "btc 5 min",
  schedule: function(parser){
    return parser.text('every 30 seconds');
  },
  job: function(){
    return Meteor.call("getBtc5minPrices");
  }
});

Meteor.methods({
  getBtc5minPrices: function () {
    var result = Meteor.http.call("GET", "http://api.bravenewcoin.com/ticker/bnc_ticker_btc.json");
    var data = result.data;

    Btc5min.insert({
      timestamp : data.time_stamp,
      price : data.ticker.bnc_price_index_usd
    });
    return data;
  }  
});