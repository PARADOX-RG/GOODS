$(function(){ 

  $('.header__menu a').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 400,  
        easing: "linear" 
    });

    return false;
  });

  $('.header__btn').on('click', function(){
      $('.header__box').toggleClass('header__box--active')
  });
  $('.header__close').on('click', function(){
      $('.header__box').removeClass('header__box--active')
  });

  $('.partners__list').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: true,
      swipe: true,
      responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            }
          },
            
        ]
  });

    

});