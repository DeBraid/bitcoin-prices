Meteor.call("getPrice", function(error, result) {
  if (error)
      console.log(error)
  var price = result;

  console.log(price);
  
  // Session.set("currentPrice", price);
});
