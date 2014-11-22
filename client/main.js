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
  console.log("_this", _this);
  console.log("_this.ticker_currency", _this.ticker_currency);

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


Meteor.call("getBTCCADPrice", function(error, result) {
  if (error)
      console.log(error)
  var getBTCCADPrice = result;
  console.log("getBTCCADPrice", getBTCCADPrice);

  // var data = [
  //   {
  //     time : price.time_stamp,
  //     coin : price.ticker.coin_name,
  //     price : price.ticker.bnc_price_index_usd
  //   }
  // ];
  // return Session.set("currentPrice", data);
});

var ticks = [];

Meteor.call("getPrice", function(error, result) {
  if (error)
      console.log(error)
  var price = result;
  var tick1 = price.time_stamp;
  ticks.push(tick1);
  var tick0 = ticks[ticks.length - 1];
  console.log(ticks);
  console.log(tick0);
  console.log(tick1);
  
  // Meteor.setInterval(function() {
  //     // update contents of slide data
  //     tick += 1;
  //     // set currentSlide Session object -- which triggers a redraw
  //     Session.set('currentSlide', tick);
  // }, 1000);

  // if (tick0 != tick1 ) {
  // }
    Prices.insert(price);

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


