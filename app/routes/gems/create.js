import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('gem');
  },
  renderTemplate: function(){
    this.render('gem.edit', { controller: 'gems.create' });
  }
});
