Meteor.methods({
  getPrice: function () {
    var result = Meteor.http.call("GET", "http://api.bravenewcoin.com/ticker/bnc_ticker_btc.json");

    // console.log("result", result);


    var data = [{
      time : result.data.time_stamp,
      coin : result.data.ticker.coin_name,
      price : result.data.ticker.bnc_price_index_usd
    }];

    return data;
    // Prices.insert({
    //   time : result.
    // }, callback);
  }
});