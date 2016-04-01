(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);
	function HomeFactory($http, $q) {

		var o = {};
		var blog = {};
		o.States = [
			{state: 'ALABAMA', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX7Oe9a_v74czjDlKGcrwoohjrNmu4maIfbdb-Husk4_GPIt1ijg', laws: {gen : 'http://www.alabama.gov/',traf : 'http://www.dmv.org/al-alabama/safety-laws.php',gun : 'http://www.ago.state.al.us/Page-Alabama-Weapon-Law',bus : 'http://www.alabama.gov/category/business'}},
			{state: 'ALASKA', image: 'http://www.netstate.com/states/symb/flags/images/ak_fi.gif', laws: {gen : 'http://alaska.gov/',traf : 'http://www.dmv.org/ak-alaska/automotive-law/vehicle-code.php',gun : 'http://dps.alaska.gov/statewide/permitslicensing/concealedhandguns.aspx',bus : 'http://alaska.gov/businesshome.html'}},
			{state: 'ARIZONA', image: 'http://www.statesymbolsusa.org/sites/statesymbolsusa.org/files/styles/large/public/Arizona_state_flag.png?itok=MgpWrqRw', laws: {gen : 'https://az.gov/',traf : 'http://www.dmv.org/az-arizona/automotive-law/vehicle-code.php',gun : 'http://www.azdps.gov/services/concealed_weapons/',bus : 'https://az.gov/work/business'}},
			{state: 'ARKANSAS', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arkansas.svg/2000px-Flag_of_Arkansas.svg.png', laws: {gen : 'http://www.arkansas.gov/',traf : 'http://www.ghsa.org/html/stateinfo/bystate/ar.html',gun : 'http://asp.arkansas.gov/services-and-programs/detail/concealed-handgun-licensing',bus : 'http://www.arkansas.gov/business/'}},
			{state: 'CALIFORNIA', image:'http://www.50states.com/flag/image/nunst0006.gif', laws: {gen : 'http://www.ca.gov',traf : 'https://www.dmv.ca.gov/portal/dmv',gun : 'https://oag.ca.gov/firearms',bus : 'http://business.ca.gov/'}},
			{state: 'COLORADO', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Flag_of_Colorado.svg/2000px-Flag_of_Colorado.svg.png',laws: {gen: 'https://www.colorado.gov/', traf: 'http://www.ghsa.org/html/stateinfo/bystate/co.html', gun: 'https://www.colorado.gov/pacific/csp/colorado-gun-laws', bus: 'https://www.colorado.gov/business-resources'}},
			{state: 'CONNECTICUT', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_Connecticut.svg/2000px-Flag_of_Connecticut.svg.png', laws: {gen: 'http://portal.ct.gov/', traf: 'http://portal.ct.gov/driving/?TaxId=249', gun: 'http://www.ct.gov/despp/cwp/view.asp?a=4213&q=494614', bus: 'http://portal.ct.gov/business/?TaxId=118'}}];


		// POSTING BLOG IN DATABASE
o.postBlog = function(blog) {
	console.log(blog);
	console.log('on route to post blog');
	var q = $q.defer();
	$http.post('/api/blog/', blog).then(function(res){
		console.log('blog posted');
		q.resolve(res.data);
	});
	return q.promise;
};

				// GETTING ALL BLOGS
o.getAllBlogs = function(){
	var q = $q.defer();
	$http.get('/api/blog').then(function(res) {
		q.resolve(res.data);
	});
	return q.promise;
};

// o.addCom = function() {
// 	var q = $q.defer();
// $http.post('/api/blog').then(function() {
// 		q.resolve();
// 	});
// 	return q.promise;
// };

o.EditBlog = function(id){
			var q= $q.defer();
			$http.put('/api/blog', id).then(function(res){
			console.log("at Factory");
				q.resolve(res.data);
			});
			o.getAllBlogs();
			return q.promise;
		};
		o.deleteBlog = function(id){
					var q = $q.defer();
					$http.delete('/api/blog/' + id).then(function(){
						q.resolve();
					});
					return q.promise;
				};

				o.addBlogComment = function(comment){
					var q = $q.defer();
					console.log(comment);
					console.log('post here');
					$http.post('/api/blog/', comment).then(function(res){
						q.resolve(res.data);
						console.log("I'm posted");
					});
					return q.promise;
				};




		return o;
	}
})();
