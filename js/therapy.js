$(document).ready(function () {
    

    $(".about").addClass("active4");
    $(".about-content").show();                        //page loaded firstly shown about content
    $(".services-content").hide();
    $(".doctors-content").hide();
    $(document).on("click", ".therapy-nav div ", function () {  // changing content clicking on therapy nav bar 
        $(".therapy-nav div").removeClass("active4");
        $(".content-content div").hide();
        $(this).addClass("active4");
        if ($(this).hasClass("about")) {                // to see about content
            $(".about-content").show();
            $(".about-content p").show();
        }else if($(this).hasClass("services")){         // to see service content
            $(".services-content").show();
            $(".eachservice").show();
        }else if($(this).hasClass("doctors")){           // to see doctor content
            $(".doctors-content").show();
            $(".doctors-content>div").show();
            $(".eachdoctor").show();
            $(".image").show();
        }
    })
})

