Meteor.call("getWeighted", function(error, result) {
  if (error)
      console.log(error)
  return Session.set("weightedPrices", result);
});

Template.weighted.helpers({
  weightedPrices: function () {
    var foo = Session.get("weightedPrices");
    console.log(foo);
    var data = [];

    _.each(foo, function (quote, ticker) {
  
    data.push({
      curr : ticker,
      seven:  quote["7d"] , 
      thirty: quote["30d"] , 
      sixty:  quote["24h"], 
    });

    })
    console.log(data);
    return data;
  }
}); 

// Template.weighted.USD = function () {
//   return JSON.parse(this.USD).USD;
// }