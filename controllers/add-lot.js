Hoata.AddLotController = Ember.Controller.extend({
  actions: {
    save: function() {
      var addLot = this.store.createRecord('lot', {
        title: this.get('title'),
        description: this.get('description'),
        owner: this.get('owner'),
        date: new Date()
      });

      addLot.save();
      this.transtionToRoute('lots');
    }
  }
});
