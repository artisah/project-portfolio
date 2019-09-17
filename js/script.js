$(document).ready(function() {

    // HEADER SLIDER

    $('#slides').superslides({
      animation: 'fade',
      play: 5000,
      pagination: false,
    });

    // HEADER TITLE TEXT
    var options = {
      strings: ["Web Developer", "Software Engineer", "Software QA"],
      typeSpeed: 150,
      loop: true,
      startDelay: 1000,
      showCursor: false,
      smartBackspace: false
    }
    
    var typed = new Typed(".typed", options);


    // SKILLS CAROUSEL
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:5
              }
        }
  })

  });