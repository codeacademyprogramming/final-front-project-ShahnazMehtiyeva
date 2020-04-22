$(document).ready(function () {
    

    $(".about").addClass("active4");
    $(".about-content").show();
    $(".services-content").hide();
    $(".doctors-content").hide();
    $(document).on("click", ".therapy-nav div ", function () {
        $(".therapy-nav div").removeClass("active4");
        $(".content-content div").hide();
        $(this).addClass("active4");
        if ($(this).hasClass("about")) {
            $(".about-content").show();
            $(".about-content p").show();
        }else if($(this).hasClass("services")){
            $(".services-content").show();
            $(".eachservice").show();
        }else if($(this).hasClass("doctors")){
            $(".doctors-content").show();
            $(".eachdoctor").show();
            $(".image").show();
        }
    })
})


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