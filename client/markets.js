Meteor.call("getMarkets", function(error, result) {
  if (error)
      console.log(error)
  return Session.set("marketPrices", result);
});

Template.markets.helpers({
  allMarkets: function () {
    return Session.get("marketPrices");
  }
}); 
