import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function(){
      var gem = this.get('model');
      //console.log(gem.get('name'));
      gem.save();
      this.transitionToRoute('gem', gem);
    }
  }

});
