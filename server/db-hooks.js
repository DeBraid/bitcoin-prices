// WeightedPrices = new Meteor.Collection('weighted_prices'); // server-side only

// // In this case, "details" should be an object containing a date, plus required e-mail details (recipient, content, etc.)

// function insertPrices( prices ) {

//   WeightedPrices.insert({
//     timestamp : prices.timestamp ,
//     price : prices.btc
//   });

// }

SyncedCron.start();

SyncedCron.add({

  name: "get Price",

  schedule: function(parser){
    return parser.text('every 30 minutes');
  },

  job: function(){
    return Meteor.call("getWeightedPricesForDatabase");
  }
});


// function addTask(id, details) {

//   SyncedCron.add({
//     name: id,
//     schedule: function(parser) {
//       return parser.recur().on(details.date).fullDate();
//     },
//     job: function() {
//       sendMail(details);
//       FutureTasks.remove(id);
//       SyncedCron.remove(id);
//             return id;
//     }
//   });

// }

// function scheduleMail(details) { 

//   if (details.date < new Date()) {
//     sendMail(details);
//   } else {
//     var thisId = FutureTasks.insert(details);
//     addTask(thisId, details);   
//   }
//   return true;

// }
// // Meteor.call("getWeighted", function(error, result) {
// //   if (error)
// //       console.log(error)
// //   console.log(result);
// // });