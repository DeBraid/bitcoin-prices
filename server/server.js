Meteor.methods({
  getPrice: function () {
    var result = Meteor.http.call("GET", "http://api.bravenewcoin.com/ticker/bnc_ticker_btc.json");

    return result.data;
   }
});