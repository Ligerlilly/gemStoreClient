import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function(){
      this.get('model').set('creationDate', new Date());
      this.get('model').save();
      this.transitionToRoute('gem', this.get('model'));
    }
  }
});
