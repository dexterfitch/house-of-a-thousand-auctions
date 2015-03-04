Hoata.LotController = Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true)
    },
    save: function() {
      this.set('is Editing', false)
    },
    delete: function() {
      if (confirm('I will DESTROY you!')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('lots');
      }
    }
  }
});
