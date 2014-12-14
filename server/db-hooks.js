Meteor.call("getWeighted", function(error, result) {
  if (error)
      console.log(error)
  console.log(result);
});