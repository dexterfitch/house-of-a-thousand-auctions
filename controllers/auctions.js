Hoata.AuctionsView = Ember.View.extend({
  didInsertElement: function() {
    this.$('#calendar').fullCalendar({});
  }
});


// This is how to load custom JS that is bound to a DOM element into an Ember template.
