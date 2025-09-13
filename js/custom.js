new WOW().init();

//Fixed Header  
$(window).on('load scroll resize orientationchange', function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $(".top-bar").addClass("fixed");
    } else {
        $(".top-bar").removeClass("fixed");
    }
});

/*
** With Slick Slider Plugin : https://github.com/marvinhuebner/slick-animation
** And Slick Animation Plugin : https://github.com/marvinhuebner/slick-animation
*/


var slideEl = $(".slide--parent");

slideEl.flickity({
    imagesLoaded: true,
    wrapAround: true,
    autoPlay: true,
    pauseAutoPlayOnHover: false
});


$('.slick-nav').on('click touch', function(e) {

    e.preventDefault();

    var arrow = $(this);

    if(!arrow.hasClass('animate')) {
        arrow.addClass('animate');
        setTimeout(() => {
            arrow.removeClass('animate');
        }, 1600);
    }

});

jQuery(document).ready(function($) {
      $('.product-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [{
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
           breakpoint: 400,
           settings: {
              arrows: true,
              slidesToShow: 1,
              slidesToScroll: 1
           }
        }]
    });
});
$(document).ready(function(){
$('.image-popup-vertical-fit').magnificPopup({
  type: 'image',
  mainClass: 'mfp-with-zoom', 
  gallery:{
      enabled:true
    },

  zoom: {
    enabled: true, 

    duration: 300, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function

    opener: function(openerElement) {

      return openerElement.is('img') ? openerElement : openerElement.find('img');
  }
}

});

});


var myMp4 = document.getElementById("mp4"),
    myWebm = document.getElementById("webm"),
    myVid = document.getElementById("myVideo"),
    mp4Url = "",
    webmUrl = "";

function playVid(ID) {
    switch (ID) {
        case "one":
            mp4Url = "https://frontenddevelopment.tech/video-gallery/mp4/vid_1.mp4";
            webmUrl = "https://frontenddevelopment.tech/video-gallery/webm/vid_1.webm";
            break;
        case "two":
            mp4Url = "https://frontenddevelopment.tech/video-gallery/mp4/vid_2.mp4";
            webmUrl = "https://frontenddevelopment.tech/video-gallery/webm/vid_2.webm";
            break;
        case "three":
            mp4Url = "https://frontenddevelopment.tech/video-gallery/mp4/vid_3.mp4";
            webmUrl = "https://frontenddevelopment.tech/video-gallery/webm/vid_3.webm";
            break;
        case "four":
            mp4Url = "https://frontenddevelopment.tech/video-gallery/mp4/vid_4.mp4";
            webmUrl = "https://frontenddevelopment.tech/video-gallery/webm/vid_4.webm";
            break;
    }
    myMp4.setAttribute("src", mp4Url);
    myWebm.setAttribute("src", webmUrl);
    myVid.load();
    myVid.play();
    myVid.poster = "";
}