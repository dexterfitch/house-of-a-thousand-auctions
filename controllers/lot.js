Hoata.LotController = Ember.ObjectController.extend({
  // image: function() {
  //   var firstItem = this.get('model.items.firstObject');
  //   var item = this.store.find('item', firstItem.id);
  //   // debugger;
  //   return item.get('name');
  // }.property(),
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('is Editing', false);
    },
    delete: function() {
      if (confirm('I will DESTROY you!')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('lots');
      }
    }
  }
});
