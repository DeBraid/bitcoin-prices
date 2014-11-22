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
  var _this = result;

  var data = [
    {
      time : _this.time_stamp,
      coin : _this.coin_name,
      currency : _this.ticker_currency,
      price : _this.last_price
    }
  ];
  return Session.set("CNY24", data);
});


Meteor.call("getBTCCADPrice", function(error, result) {
  if (error)
      console.log(error)
  var getBTCCADPrice = result;
});

// Meteor.call("getChinaData", function(error, result) {
//   if (error)
//       console.log(error)
//   var _this = result;
//   console.log(_this);

//   var china = [
//     {
//       time : _this.time_stamp,
//       coin : _this.coin_name,
//       currency : _this.ticker_currency,
//       price : _this.last_price
//     }
//   ];
//   console.log(china);
//   return Session.set("chinaData", china);

// });


// var ticks = [];

Meteor.call("getPrice", function(error, result) {
  if (error)
      console.log(error)
  var price = result;
  var tick1 = price.time_stamp;
  ticks.push(tick1);
  var tick0 = ticks[ticks.length - 1];

  Meteor.startup(function () {
    Meteor.setInterval(function() {
     Prices.insert(price);
    }, 1800000); //30min
  });
    

});

Template.showPrices.helpers({
  priceData: function () {
    return Session.get("currentPrice");
  }
}); 

Template.canada.helpers({
  CAD24: function () {
    return Session.get("CAD24");
  }
}); 

Template.china.helpers({
  CNY24: function () {
    return Session.get("CNY24");
  }
}); 


