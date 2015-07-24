import Ember from 'ember';

export default Ember.Controller.extend({
  deleteMode: false,
  actions: {
    delete: function(){
      this.toggleProperty('deleteMode');
    },
    cancelDelete: function(){
      this.set('deleteMode', false);
    },

    confirmDelete: function(){
      this.get('model').deleteRecord();
      this.get('model').save();
      this.transitionToRoute('gems');
    }
  }
});
