(function() {
  "use strict";
  angular.module('app')
  .controller('AddBlogController', AddBlogController);
  function AddBlogController(HomeFactory, $state) {
    var vm = this;
    vm.blog = {};
    vm.user ={};

    vm.PostBlog = function(){
      console.log(vm.blog);
      HomeFactory.postBlog(vm.blog).then(function(res){
        $state.go('Blog');
      });
    };




  }
})();
