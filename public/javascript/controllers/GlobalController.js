(function() {
  "use strict";
  angular.module('app')
  .controller('GlobalController', GlobalController);
  function GlobalController(UserFactory, $state) {
    var vm = this;
    vm.isLogin = true; //switch between the login and register view on the login_register.html page
    vm.user = {};
    vm.status = UserFactory.status;

    vm.logout = function() {
      UserFactory.logout();
      $state.go('Login');
    };

    vm.registerUser = function() {
      UserFactory.registerUser(vm.user).then(function() {
        $state.go('Home');
      });
    };

    vm.loginUser = function() {
      UserFactory.loginUser(vm.user).then(function() {
        $state.go('Home');
        vm.user = {};
      });
    };

    vm.pageTop = function() {
      window.scrollTo(0, 0);
    }

    vm.nextChapter = function() {
      window.scrollTo(0, 250);
    }




  }
})();
