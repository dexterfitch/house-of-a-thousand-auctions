Hoata.AuctionRoute = Ember.Route.extend({
  model: function() {
    return {
      events: Ember.A([
      {title: "Scary Movie Night", start: Date.now()},
        ])
    };
  }
});
