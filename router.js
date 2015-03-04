Hoata.Router.map(function() {
  this.resource('lots', {path: '/'});
  this.resource('contact');
  this.resource('add-lot');
  this.resource('auctions');
  this.resource('lot', {path: 'lots/:lot_id'}, function() {
    this.resource('new-item');
  });

});
