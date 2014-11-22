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

Template.showPrices.helpers({
  priceData: function () {
    return Session.get("currentPrice");
  }
}); 