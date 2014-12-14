// Config
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

// Routes
Router.map(function() {
  
  // this.route('homepage', {
  //     path: '/'
  // });

  this.route('homepage', {
    path: '/',
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
});