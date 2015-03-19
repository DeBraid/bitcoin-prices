Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

Router.map(function() {
  
  this.route('homepage', {
    path: '/',
    yieldTemplates: {
      'globalFx': {to: 'fx'},
      'usd': {to: 'chart'}
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

  this.route('charts', {
    path: '/charts',
    template: 'lineChart',
    waitOn: function () {
      return Meteor.subscribe('btc5min');
    },
    data: function () {
      return {
        btc5min: Btc5min.find()
      }
    }
  });

  this.route('heatmap', {
    path: '/heatmap'
  });
});