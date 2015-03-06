Hoata.Router.map(function() {
  this.resource('lots', {path: '/'});
  this.resource('contact');
  this.resource('auctions');
  this.resource('lot', {path: 'lots/:lot_id'}, function() {
    this.resource('newItem');
  });

});
