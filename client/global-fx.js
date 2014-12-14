Meteor.call("getExchangeRates", function(error, result) {
  if (error)
      console.log(error)
  var exRates = result,
  rates = exRates.data.rates,
  data = [];

  _.object(_.map(rates, function (value, key) {
    return data.push({curr: key, fxRate: value});
  }));
  return Session.set("globalFx", data);
});

Template.globalFx.helpers({
  'globalFx': function () {
    return Session.get("globalFx");
  }
});