Meteor.methods({
  getWeighted: function () {
    var result = Meteor.http.call("GET", "http://api.bitcoincharts.com/v1/weighted_prices.json");
    return JSON.parse(result.content);
  }  
});

Meteor.methods({
  getExchangeRates: function () {
    var result = Meteor.http.call("GET", "http://openexchangerates.org/api/latest.json?app_id=13f51522da3d4c0988504c2a52194cda");
    return result;
  }  
}); 

Meteor.methods({
  getMarkets: function () {
    var result = Meteor.http.call("GET", "http://api.bitcoincharts.com/v1/markets.json");
    return JSON.parse(result.content);
  }  
});


Meteor.methods({
  getPrice: function () {
    var result = Meteor.http.call("GET", "http://api.bravenewcoin.com/ticker/bnc_ticker_btc.json");
    return result.data;
  }  
});


Meteor.methods({
  getBTCCADPrice: function () {
    var result = Meteor.http.call("GET", "http://api.bravenewcoin.com/ticker/bnc_ticker_btc_cad.json");
    return result.data;
  }
});

Meteor.methods({
  getCAD24Price: function () {
    var result = Meteor.http.call("GET", "http://api.bravenewcoin.com/ticker/bnc_ticker_btc_cad_24hr.json");
    return result.data;
  }  
});

Meteor.methods({
  getChinaData: function () {
    var result = Meteor.http.call("GET", "http://api.bravenewcoin.com/ticker/bnc_ticker_btc_cny_24hr.json");
    return result.data;
  }
});


Meteor.methods({
  getIndia: function () {
    var result = Meteor.http.call("GET", "http://api.bravenewcoin.com/ticker/bnc_ticker_btc_inr_24hr.json");
    return result.data;
  }
});