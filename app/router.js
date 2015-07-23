import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('gems', { path: '/' }, function(){
    this.route('create');

  });
  this.resource('gem', { path: 'gems/:gem_id' }, function(){
    this.route('edit');
  });





});

export default Router;
