Meteor.call("getWeighted", function(error, result) {
  if (error)
      console.log(error)
  return Session.set("weightedPrices", result);
});

Template.weighted.helpers({
  weightedPrices: function () {
    var foo = Session.get("weightedPrices");
    console.log(foo);
    _.each(foo, function (d,i) {
      console.log("d",d);
    })
  }
}); 

// Template.weighted.USD = function () {
//   return JSON.parse(this.USD).USD;
// }