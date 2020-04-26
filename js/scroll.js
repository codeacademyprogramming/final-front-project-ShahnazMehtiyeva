$(document).ready(function () {
    var fixtop = $(".inner-nav").offset().top;       // getting top of inner navbar 

    $(window).scroll(function () {
        var currentScroll = $(window).scrollTop();      // getting current scroll of window top
        if (currentScroll >= fixtop) {                  
            $(".inner-nav").css({ 
                position: "fixed",                      // setting position fixed
                'top': '20px'
            });
        } else {
            $(".inner-nav").css({
                position: "absolute",
                'top': '245px'
            })
        }
    })

})