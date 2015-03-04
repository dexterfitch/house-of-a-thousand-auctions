Hoata.NewItemController = Ember.Controller.extend({
  needs: ['lot'],
  actions: {
    save: function() {
      var item = this.store.createRecord('item', {
        name: this.get('name'),
        description: this.get('description'),
        image: this.get('image'),
        owner: this.get('owner'),
        price: this.get('price'),
        premierYear: this.get('premierYear'),
        movieName: this.get('movieName'),
      });
      item.save();

      var lot = this.get('controllers.lot.model');
      lot.get('items').pushObject(item);
      lot.save();

      this.transitionToRoute('lot', lot.id);
    }
  }
});
