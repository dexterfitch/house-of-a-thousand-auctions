Hoata.LotsController = Ember.ArrayController.extend({
  isAddingNewLot: false,
  actions: {
    addNewLot: function() {
      this.set('isAddingNewLot', true);
    },
    save: function() {
      var addLot = this.store.createRecord('lot', {
        title: this.get('title'),
        description: this.get('description'),
        owner: this.get('owner'),
        date: new Date()
      });
      addLot.save();

      this.set('isAddingNewLot', false);
      this.set('title', null);
      this.set('description', null);
      this.set('owner', null);
      this.transitionToRoute('lots');
    }
  }
});
