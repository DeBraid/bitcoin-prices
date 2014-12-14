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

Meteor.call("getExchangeRates", function(error, result) {
  if (error)
      console.log(error)
  var exRates = result,
  rates = exRates.data.rates,
  data = [];

  _.object(_.map(rates, function (value, key) {
    return data.push({curr: key, fxRate: value});
  }));
  return Session.set("globalFx", data);
});

Template.globalFx.helpers({
  'globalFx': function () {
    return Session.get("globalFx");
  }
})

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

var ticks = [];

Meteor.call("getPrice", function(error, result) {
  if (error)
      console.log(error)
  var price = result;
  // console.log("price", price);
  // var tick1 = price.time_stamp;
  // ticks.push(tick1);
  // var tick0 = ticks[ticks.length - 1];

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



// UI.registerHelpers({
//   weightedPrices: function () {
//     var quotes = Session.get("weightedPrices"),
//         data = [];

//     _.each(quotes, function (quote, ticker) {
//       var day = quote["24h"], 
//           wk = quote["7d"],  
//           mth = quote["30d"], 
      
//       if ( ticker == 'USD') {
//         console.log("this ticker is", ticker);
//         var usd = day;
//         console.log(usd);

        
//       };


//       data.push({
//         curr : ticker,
//         day : day, 
//         wk : wk, 
//         mth : mth,
//         vsWk : vsWk,
//         vsMth : vsMth 
//       });
//     })
//     return data;
//   }
// });