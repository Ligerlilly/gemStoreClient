import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  quantity: DS.attr('number'),
  price: DS.attr('number'),
  image: DS.attr('string')
});
