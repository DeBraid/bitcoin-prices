Meteor.call("getWeighted", function(error, result) {
  if (error)
      console.log(error)
  console.log("weighted result client:", result);

  return Session.set("weightedPrices", result);

});

Template.weighted.helpers({
  weightedPrices: function () {
    return Session.get("weightedPrices");
  }
}); 