// Config
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

// Routes
Router.map(function() {
  
  this.route('homepage', {
    path: '/',
    yieldTemplates: {
      'globalFx': {to: 'fx'},
      'usd': {to: 'usdTemp'}
    },
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