$(document).ready(function () {
    $(document).on("click", ".call-menu", function () {
        $(".fillial-menu div").toggle("active2");
    })

    $(".address").addClass("active4");
    $(".address-content").show();
    $(".services-content").hide();
    $(".doctors-content").hide();
    $(document).on("click", ".filiall-nav div ", function () {
        $(".filiall-nav div").removeClass("active4");
        $(".content-content div").hide();
        $(this).addClass("active4");
        if ($(this).hasClass("address")) {
            $(".address-content").show();
            $(".address-content div").show();
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