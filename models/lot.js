Hoata.Lot = DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  owner: DS.attr(),
  date: DS.attr(),
  items: DS.hasMany('item', {async: true})
})
