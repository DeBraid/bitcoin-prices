Meteor.methods({
  getPrice: function () {
    var result = Meteor.http.call("GET", "http://api.bravenewcoin.com/ticker/bnc_ticker_btc.json");
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
  getBTCCADPrice: function () {
    var result = Meteor.http.call("GET", "http://api.bravenewcoin.com/ticker/bnc_ticker_btc_cad.json");
    return result.data;
  }  
});
