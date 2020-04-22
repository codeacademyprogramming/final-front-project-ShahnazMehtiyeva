
var fixtop=$(".inner-nav").offset().top;

$(window).scroll(function () {
    var currentScroll=$(window).scrollTop();
    if(currentScroll >=fixtop){
        $(".inner-nav").css({
            position: "fixed",
            'top' :'20px'
        });
    }else{
        $(".inner-nav").css({
            position: "absolute",
            'top':'245px'
        })
    }
})