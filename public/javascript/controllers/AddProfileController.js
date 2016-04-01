(function() {
  "use strict";
  angular.module('app')
  .controller('AddProfileController', AddProfileController);
  function AddProfileController(UserFactory, $state, $stateParams) {
    var vm = this;
    vm. newProfile = {};
    vm.profile = {};
    vm.status = UserFactory.status;


    // Add Profile
  vm.addProfile = function(){
    console.log('hi ADD');
  UserFactory.addProfile(vm.profile).then(function(res){
    vm.newProfile = res;
    vm.newProfile = {};
    $state.go('Profile');
  });
};




  }
})();
