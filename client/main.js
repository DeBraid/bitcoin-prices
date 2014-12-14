Meteor.call("getPrice", function(error, result) {
  if (error)
      console.log(error)
  var price = result;

  var data = [
    {
      time : price.time_stamp,
      coin : price.ticker.coin_name,
      price : price.ticker.bnc_price_index_usd
    }
  ];

  return Session.set("currentPrice", data);
});

Meteor.call("getCAD24Price", function(error, result) {
  if (error)
      console.log(error)
  var _this = result;

  var data = [
    {
      time : _this.time_stamp,
      coin : _this.coin_name,
      currency : _this.ticker_currency,
      price : _this.last_price
    }
  ];
  return Session.set("CAD24", data);
});

Meteor.call("getChinaData", function(error, result) {
  if (error)
      console.log(error)
  var _this = result,
  date = new Date(_this.time_stamp * 1000);

  var data = [
    {
      time : date,
      coin : _this.coin_name,
      currency : _this.ticker_currency,
      price : _this.last_price
    }
  ];
  return Session.set("CNY24", data);
});

Meteor.call("getIndia", function(error, result) {
  if (error)
      console.log(error)
  var _this = result;

  var data = [
    {
      time : _this.time_stamp,
      coin : _this.coin_name,
      currency : _this.ticker_currency,
      price : _this.last_price
    }
  ];
  return Session.set("INR24", data);
});


Meteor.call("getBTCCADPrice", function(error, result) {
  if (error)
      console.log(error)
  var getBTCCADPrice = result;
});

Template.showPrices.helpers({
  priceData: function () {
    return Session.get("currentPrice");
  }
}); 

Template.global.helpers({
  CAD24: function () {
    return Session.get("CAD24");
  },
  CNY24: function () {
    return Session.get("CNY24");
  },
  INR24: function () {
    return Session.get("INR24");
  }
}); 