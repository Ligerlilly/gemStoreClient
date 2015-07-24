import Ember from 'ember';

export default Ember.Controller.extend({
  // model: function(params){
  //   return this.store.findById('user', params.id);
  // },
  actions: {
    edit: function(model){
      this.transitionToRoute('edit', model);
    },
    delete: function(){
      this.get('model').deleteRecord();
      this.get('model').save();
      this.transitionToRoute('gems');
    }
  }
});
