Meteor.call("getMarkets", function(error, result) {
  if (error)
      console.log(error)
  return Session.set("marketPrices", result);
});

Template.markets.helpers({
  allMarkets: function () {
    var quotes = Session.get("marketPrices"),
        data = [],
        finalData = [],
        tickers = ["AUD","BRL","CAD","CHF","CNY","EUR","GBP","IDR","ILS","MXN","NOK","NZD","PLN","RON","RUB","SEK","SGD","USD","ZAR"];
      

    _.sortBy(quotes, function ( quote, i )  {
      var vol = quote.volume;
      if ( vol > 1 ) {
        return data.push(quote);
      };
    });
    var currencies = data.reverse();

    _.map(currencies, function ( curr, i ) {
      var crr = curr.currency;
      if ( _.contains(tickers, crr)) {
        return finalData.push(curr);
      };
    })

    return finalData;
  }
}); 