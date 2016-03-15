import Ember from 'ember';


export default Ember.Route.extend({
	beforeModel: function() {
		if (this.get("session.isAuthenticated")){
			this.transitionTo('index');
		}
	},

	actions: {
		login: function() {
			var con = this.get('controller');
			var e = con.get('email');
			var p = con.get('password');
			this.get('session').open('firebase', {
				provider: 'password',
				email: e,
				password: p 
			}).then(function(data) {
				console.log(data.currentUser);
				this.transitionTo('index');
			}, function(error){
				console.log(error);
				console.log(con.get('error'));
				con.set('error', error);
			});
		}
	}
});
