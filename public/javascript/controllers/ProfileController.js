(function() {
  'ues strict';
  angular.module('app')
  .controller('ProfileController', ProfileController);
  function ProfileController($state, $stateParams, UserFactory, HomeFactory, btfModal) {
    var vm = this;
    vm.statevisit = {};
    vm.profile = {};
    vm.edittedProfile = {};
    vm.States = HomeFactory.States;

    // FINDING AN INDIVIDUAL PROFILE FROM CACHE
    if(localStorage.oneProfile){
      vm.oneProfile = JSON.parse(localStorage.oneProfile);
      console.log(vm.oneProfile);
      localStorage.removeItem('oneProfile');
    }

    // Display's all Profiles
  console.log('welcome to my profile')
  UserFactory.showProfiles(vm.profile).then(function(res){
    console.log(res);
    vm.profile = res;
  });

    // SHOW SINGLE PROFILE
  vm.getProfileById = function(oneProfile){
    console.log(oneProfile);
    localStorage.setItem("oneProfile", JSON.stringify(oneProfile));
    $state.go('ProfilePage',{id: oneProfile._id});
  };


  vm.getCopy = function(blog) {
    					return angular.copy(blog);
    			};


  vm.editProfile = function(profileId, profile){
			//Pass blog ID and editted blog info as one object to HomeFactory edit function
			UserFactory.EditProfile({IDofProfileToEdit: profileId, edittedProfile: profile}).then(function(res){
				console.log(profile);
        vm.oneProfile = profile;
				console.log(vm.oneProfile);
				console.log('Made it back');
				vm.edittedProfile = null;
				$state.go('Profile');
			});
  			};
    vm.deleteProfile = function(){
      // vm.posts = [];
      console.log();
			  UserFactory.deleteProfile(vm.oneProfile._id).then(function(){
        vm.profile.splice(vm.profile.indexOf(vm.oneProfile),1);
        $state.go('Profile');
				});
			};

      // UserFactory.getUserBlog(vm.status._id).then (function(res){
      //   vm.user = res;
      // });



  }
})();
