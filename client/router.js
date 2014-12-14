// Config
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});
// Filters
// var filters = {
//   clearInputValue: function () {
//     var inp = $('.reactive-table-input');
//     inp.val('');
//     inp.trigger('keyup');
//   }
// }
// Router.onBeforeAction(filters.clearInputValue);

// Routes
Router.map(function() {
  
  this.route('homepage', {
      path: '/'
  });

  this.route('usd', {
    path: '/usd',
    template: 'usd',
    waitOn: function () {
      return Meteor.subscribe('usdPrices');
    },
    data: function () {
      return {
        usdPrices: BitcoinPrices.find()
      }
    }
  });

  // this.route('contact');
  

  // this.route('heartballoons', {
  //   path: '/heartballoons',
  //   template: 'heartballoons',
  //   yieldTemplates: {
  //     'charges': {to: 'charges'},
  //     'filterdropdown': {to: 'filterdropdown'},
  //   }, 
  //   waitOn: function () {
  //     return [Meteor.subscribe('heartballoons'),
  //             Meteor.subscribe('hearttags'),
  //             Meteor.subscribe('adwpals'),
  //             Meteor.subscribe('charges')];
  //   },
  //   data: function () {
  //     return {
  //       heartballoons: Heartballoons.find(),
  //       tags: Hearttags.find(),
  //       pals: Adwpals.find(),
  //       charges: Charges.find()
  //     }
  //   }
  // });
});