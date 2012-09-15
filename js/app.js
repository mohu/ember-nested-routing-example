App = Ember.Application.create();

App.ApplicationView = Ember.View.extend({
  templateName:'application'
});
App.ApplicationController = Ember.Controller.extend();


App.OverviewView = Ember.View.extend({
  templateName:'overview'
});
App.OverviewController = Ember.Controller.extend();


App.BatchView = Ember.View.extend({
  templateName:'batch'
});
App.BatchController = Ember.Controller.extend();


App.ArtworkView = Ember.View.extend({
  templateName:'artwork'
});
App.ArtworkController = Ember.Controller.extend();


App.Router = Ember.Router.extend({
  enableLogging:true,
  root:Ember.Route.extend({

    home:Ember.Route.extend({

      route:'/',
      redirectsTo:'overview'


    }),
    overview:Ember.Route.extend({
      route:'/overview',
      initialState : 'index',
      index:Ember.Route.extend({
        /* no children, therefore valid end-route */
        route:'/',

        gotoBatch:Ember.Route.transitionTo('batch'),

        connectOutlets:function (router) {
          router.get('applicationController').connectOutlet('overview');
        }
      }),


      batch:Ember.Route.extend({
        route:'/batch',
        initialState : 'index',
        index:Ember.Route.extend({
          /* no children, therefore valid end-route */
          route:'/',

          gotoOverview:Ember.Route.transitionTo('overview'),
          gotoArtwork:Ember.Route.transitionTo('artwork'),

          connectOutlets:function (router) {
            router.get('applicationController').connectOutlet('batch');
          }

        }),

        artwork:Ember.Route.extend({
          /* no children, therefore valid end-route */
          route:'/artwork',
          gotoBatch:Ember.Route.transitionTo('batch'),
          gotoOverview:Ember.Route.transitionTo('overview'),

          connectOutlets:function (router) {
            router.get('applicationController').connectOutlet('artwork');
          }

        })
      })

    })
  })
});


App.initialize();