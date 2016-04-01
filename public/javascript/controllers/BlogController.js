(function() {
  'use strict';
  angular.module('app')
  .controller('BlogController', BlogController);
  function BlogController($state, $stateParams, HomeFactory){
    var vm = this;
    vm.blog = {};
    vm.posts = [];
    vm.posts.push(vm.blog);
  	vm.edittedBlog = {};
    vm.showComment = false;
    vm.NoComment = false;
    vm.YesComment = false;
    vm.images = [
      'http://wikitravel.org/upload/shared//0/0a/Pan_American_Highway_Banner.jpg',
      'http://wikitravel.org/upload/shared//c/c0/South_America_Banner.jpg',
      'http://wikitravel.org/upload/shared//b/b1/Dalton_Highway_Banner.jpg'
    ];

    if(localStorage.oneBlog){
      vm.oneBlog = JSON.parse(localStorage.oneBlog);
      console.log(vm.oneBlog);
      localStorage.removeItem('oneBlog');
    }
    // if(localStorage.comment) {
    //   vm.comment = JSON.parse(localStorage.comment);
    //   localStorage.removeItem('comment')
    // }
    vm.ShowBlogs = function() {
      console.log('show blog');
    HomeFactory.getAllBlogs(vm.blog).then(function(res){
      console.log(res);
      vm.blog = res;
    });
  };
  vm.ShowBlogs();


  vm.getBlogById = function(oneBlog){
    localStorage.setItem("oneBlog", JSON.stringify(oneBlog));
    $state.go('BlogPage',{id: oneBlog._id});
  };


  vm.addBlogComment = function(){
    HomeFactory.addBlogComment(vm.comment).then(function() {
    $state.go('BlogPage',{id: oneBlog._id});
    });
  };

  vm.getCopy = function(blog) {
  					return angular.copy(blog);
  			};


  vm.editBlog = function(blogId, blog){
			//Pass blog ID and editted blog info as one object to HomeFactory edit function
			HomeFactory.EditBlog({IDofBlogToEdit: blogId, edittedBlog: blog}).then(function(res){
				console.log(blog);
        vm.oneBlog = blog;
				console.log(vm.oneBlog);
				console.log('Made it back');
				vm.edittedBlog = null;
				$state.go('Blog');
			});
  	};
    vm.deleteBlog = function(){
      // vm.posts = [];
      console.log();
				HomeFactory.deleteBlog(vm.oneBlog._id).then(function(){
        vm.blog.splice(vm.blog.indexOf(vm.oneBlog),1);
        $state.go('Blog');
				});
			};
      // vm.addCom = function(){
      // 			console.log("adding comment");
      // 		HomeFactory.postCom(vm.comment).then(function(res){
      // 				console.log('comment added');
      // 			vm.comment = res.body;
      // 			console.log(res.body);
      // 			if(!$stateParams.id) $state.go('Home');
      // 			HomeFactory.getBlogById($stateParams.id).then(function(res){
      // 				console.log(res);
      // 				vm.blog = res;
      // 			});
      // 		});
      // 		vm.comment = {};
      // 	};
      	vm.showCom = function(){
      		HomeFactory.displayCom(vm.comment).then(function(res){
      			vm.comment = res;
      			console.log(res);
      		});
      	};


      	vm.ShowCom = function(){
      		vm.showComment = true;
      		vm.NoComment = true;
      		vm.YesComment = true;
      	};

      	vm.HideCom = function(){
      		vm.showComment = false;
      		vm.NoComment = false;
      		vm.YesComment = false;
      	};



  }
})();
