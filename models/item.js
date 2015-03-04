Hoata.Item = DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  owner: DS.attr(),
  price: DS.attr(),
  premierYear: DS.attr(),
  movieName: DS.attr(),
  lot: DS.belongsTo('lot', {async: true})
})
