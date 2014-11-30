Meteor.call("getMarkets", function(error, result) {
  if (error)
      console.log(error)
  return Session.set("marketPrices", result);
});

Template.markets.helpers({
  allMarkets: function () {
    var quotes = Session.get("marketPrices"),
        data = [];

    _.sortBy(quotes, function ( quote, i )  {
      var vol = quote.volume;
      if ( vol > 1 ) {
        return data.push(quote);
      };
    });
    return data;
  }
}); 
