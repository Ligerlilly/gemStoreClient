import Ember from 'ember';

export default Ember.Controller.extend({
  // model: function(params){
  //   return this.store.findById('user', params.id);
  // },
  actions: {
    edit: function(model){
      this.transitionToRoute('edit', model);
    }
  }
});
