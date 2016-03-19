import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // must be logged in to see index.
  this.authenticatedRoute('/');
  this.route('login');
});

export default Router;
