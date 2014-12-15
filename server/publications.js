Meteor.publish('usdPrices', function() {
  return BitcoinPrices.find();
});

Meteor.publish('btc5min', function() {
  return Btc5min.find();
});