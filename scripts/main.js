/*

Burger menu JS :

*/

(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery


/*

Slider

*/

$(document).ready(function(){

  $('.sliderBackground').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: false,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.produit-slick-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.produit-slick-nav'
  });

  $('.produit-slick-nav').slick({
    slidesToShow: 7,
    slidesToScroll: 3,
    asNavFor: '.produit-slick-main',
    dots: true,
    arrow: true,
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='../images/product/fa-left.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='../images/product/fa-right.png'>",
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false,
        }
      }
    ]
  });

});

/*

Carousel effect

*/

function setSlideVisibility() {
  var visibleSlides = $('.produit-slick-nav .slick-slide[aria-hidden="true"]');
  $(visibleSlides).each(function() {
    $(this).css({"opacity": "0", "transition": "linear 1s"});

  });
}

$(setSlideVisibility());

$('.produit-slick-nav').on('beforeChange', function() {
  $('.produit-slick-nav .slick-slide').each(function() {
    $(this).css({"opacity": "1", "transition": "linear 1s"});
  });
});

$('.produit-slick-nav').on('afterChange', function() {
  setSlideVisibility();
});

/*

Croll reveal parcours

*/

window.sr = ScrollReveal({ reset: true,
origin: 'left',
distance: '25px',
duration: 1000,
delay: 1000,
rotate: { x: 0, y: 0, z: 0 },
opacity: 0,
scale: 1,
easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
container: window.document.documentElement,
mobile: true,
reset: true,
useDelay: 'onload',
viewFactor: 1,
viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
beforeReveal: function (domEl) {},
beforeReset: function (domEl) {},
afterReveal: function (domEl) {},
afterReset: function (domEl) {}
                         });
sr.reveal('.blocGauche');
sr.reveal('.blocDroit', { origin:'right' });

/*

Scroll top

*/

$('.combi img').click(function() {
    $('body,html').animate({scrollTop:0},800);
});