import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.authenticatedRoute('/'); // must be logged in to see index.
  this.route('login');
});

export default Router;
