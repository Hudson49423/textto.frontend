import Ember from 'ember';


export default Ember.Route.extend({
	beforeModel: function() {
		if (this.get("session.isAuthenticated")){
			this.transitionTo('index');
		}
	},

	actions: {
		login: function() {
			this.get('session').open('firebase', {
				provider: 'google',
			}).then(function(data) {
				console.log(data.currentUser);
				this.transitionTo('index');
			}, function(error){
				console.log(error);
			});
		}
	}
});
