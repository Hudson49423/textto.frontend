import Ember from 'ember';


export default Ember.Route.extend({
	beforeModel: function() {
		if (this.get("session.isAuthenticated")){
			this.transitionTo('index');
		}
	},

	actions: {
		login: function() {
			var route = this
			this.get('session').open('firebase', {
				provider: 'google',
			}).then(function(data) {
				console.log(data.currentUser);
				route.transitionTo('index');
			}, function(error){
				console.log(error);
			});
		}
	}
});
