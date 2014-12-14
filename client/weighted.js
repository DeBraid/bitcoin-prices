Meteor.call("getWeighted", function(error, result) {
  if (error)
      console.log(error)
  return Session.set("weightedPrices", result);
});

Template.weighted.helpers({
  weightedPrices: function () {
    var quotes = Session.get("weightedPrices"),
        data = [];

    _.each(quotes, function (quote, ticker) {
      var day = quote["24h"], 
          wk = quote["7d"],  
          mth = quote["30d"], 
          vsWk = ((day - wk)/wk).toFixed(3),
          vsMth = ((day - mth)/mth).toFixed(3);
      

      data.push({
        curr : ticker,
        day : day, 
        wk : wk, 
        mth : mth,
        vsWk : vsWk,
        vsMth : vsMth 
      });
    })
    return data;
  }
});