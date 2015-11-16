 $(function() {
  mobileNav();
  fancyBox();
});

// Function to open and close navigation on movile devices
function mobileNav() {
  $('.mobile-nav-toggle').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){
      $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open');
    } else {
      $('.mobile-nav-toggle, .mobile-nav').addClass('is-open');
    }
  });
}

// Function for fancyBox implementation
function fancyBox() {
  $('.fancybox-thumb').fancybox ({
    padding: 0,
    prevEffect: 'none',
    nextEffect: 'none',
    helpers: {
      title: {
        type: 'outside'
      },
      thumbs: {
        width: 50,
        height: 50
      }
    }
  });
}
