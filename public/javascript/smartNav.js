jQuery(document).ready(function($){

  var offset = 350;

  var navContainer = $("#cd-nav"),
   mainNav = navContainer.find("#cd-main-nav ul");

  checkMenu();
    $(window).scroll(function(){
      checkMenu();
    });

    // OPEN AND CLOSE MENU W/CLICK ON LINK
    $(".cd-nav-trigger").on('click', function(){
      $(this).toggleClass('menu-is-open');

      mainNav.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend').toggleClass('is-visible');
    });

    function checkMenu() {
      if( $(window).scrollTop() > offset && !navContainer.hasClass('is-fixed')) {
        navContainer.addClass('is-fixed').find('.cd-nav-trigger').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
          mainNav.addClass('has-transitions');
        });
      } else if ($(window).scrollTop() <= offset) {
        // CHECK IF MENU OPEN WHEN SCROLLING
        if(mainNav.hasClass('is-visible')
        && !$('html').hasClass('no-csstransitions')) {
          // CLOSE MENU W/ANIMATION
          mainNav.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
            mainNav.removeClass('is-visible is-hidden has-transitions');
            navContainer.removeClass('is-fixed');
            $('.cd-nav-trigger').removeClass('menu-is-open');
          });
        } else {
          navContainer.removeClass('is-fixed');
          mainNav.removeClass('has-transitions');
        }
      }
    }

});
