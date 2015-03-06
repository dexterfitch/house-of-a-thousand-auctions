Hoata.AuctionRoute = Ember.Route.extend({
  model: function() {
    return {
      events: Ember.A([
      {title: "Scary Movie Night", start: Date.now()},
        ])
    };
  }
});
// this is the route for adding events to full calendar
// we have not actually added this functionality into the program yet
// further instructions on how : search for full calendar ember 
