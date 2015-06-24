import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('gems', function(){
    this.route('show', { path: '/:gem_id'});
  });
});

export default Router;
