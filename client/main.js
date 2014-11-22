Meteor.call("getPrice", function(error, result) {
  if (error)
      console.log(error)
  var price = result;

  console.log(price);
  console.log("time", price[0].time);
  
  Session.set("currentPrice", price);
  Session.set("time", parseInt(price[0].time));
});

Template.showPrices.helpers({
  time: function () {
    return Session.get("time");
  }, 
  priceData: function () {
    return Session.get("currentPrice");
  }
}); 