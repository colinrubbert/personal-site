 $(function() {
  mobileNav();
  fancyBox();
  gallerySelection();
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

// Function for gallerySelection implementation
function gallerySelection() {
  $('.people-category').ready(function() {
    $('.people-category').addClass('active');
    $('.people').addClass('photography-grid');
  });

  $('.people-category').click(function() {
    $('.people-category').addClass('active');
    $('.places-category, .things-category').removeClass('active');
    $('.places, .things').removeClass('photography-grid');
    $('.people').addClass('photography-grid');
  });

  $('.places-category').click(function() {
    $('.places-category').addClass('active');
    $('.people-category, .things-category').removeClass('active');
    $('.people, .things').removeClass('photography-grid');
    $('.places').addClass('photography-grid');
  });

  $('.things-category').click(function() {
    $('.things-category').addClass('active');
    $('.people-category, .places-category').removeClass('active');
    $('.people, .places').removeClass('photography-grid');
    $('.things').addClass('photography-grid');
  });
}
