$(document).ready(function () {

    $(".symptom-form").hide();
    $(".symptom-nav").hide();
    $(".content-search").hide();

    //Image mapping
    $(document).on("mouseover", "map area", function () {
        $(this).parent().prev().find("img").attr("src", $(this).data("part")); // to get image source from data-part
    })
    $(document).on("mouseleave", " map area", function () {
        $(".content-image .mapped-image img").attr("src", $(".content-image").data("default")); // to set default transparent img source
    })


    //clicking any area on image
    $(document).on("click", "map area", function () {
        $(".switcher").removeClass("search"); //changing switcher
        $(".text").hide();
        $(".symptom-form").show();
        $(".symptom-nav ").show();
        $(".symptom-nav>div>div a").show();

        let classname = $(this).attr('class');
        if (classname == "headpart") { //clicking on head part of image
            let symptomnav = $(".symptom-nav>div>div a");
            symptomnav.each(function () {
                if ($(this).hasClass("headp")) { //searching headp class in symptom nav 
                    $(this).show();

                    $(".content-search").show();
                    let searchname = $(".content-search div"); //searching head part article in search content
                    searchname.each(function () {
                        if ($(this).hasClass("headp")) {
                            $(this).show();
                            $(".image").show();

                        } else {
                            $(this).hide();
                        }
                        $(".image").show();
                    })
                } else {
                    $(this).hide();
                }
            })
        }
        $(".content-image").hide();
    })

    $(".symptom-form").hide();
    $(".symptom-nav").hide();
    $(".content-search").hide();

    $(document).on("click", ".switcher", function () { // clicking on switcher to see all articles 
        if ($(".switcher").hasClass("search")) {
            $(".switcher").removeClass("search");
            $(".text").hide();
            $(".symptom-form").show();
            $(".symptom-nav ").show();
            $(".symptom-nav>div>div a").show();
            let symptomnav = $(".symptom-nav>div>div a");
            symptomnav.each(function () {
                if ($(this).hasClass("general")) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            })

            $(".content-image").hide();
            $(".content-search").show();
            $(".content-search div").show();
        } else {
            $(".switcher").addClass("search");
            $(".symptom-form").hide();
            $(".symptom-nav").hide();
            $(".text").show();
            $(".content-image").show();
            $(".content-search").hide();
        }
    })


    $(document).on("click", ".symptom-nav>div>div a", function () { // clicking on symptom nav  to see exact article example about eye article
        if (!$(this).hasClass("active-nav")) {
            $(this).addClass("active-nav")
            if ($(this).hasClass("brainbad")) {
                $(".content-search").show();
                let searchname = $(".content-search div ");
                searchname.each(function () {
                    if ($(this).hasClass("headp")) {
                        if ($(this).hasClass("brainbad")) { // checking  article which is about brain bad
                            $(this).addClass("display");
                            $(".image").addClass("display");
                        } else {
                            $(this).addClass("none");
                        }
                        $(".image").addClass("display");
                    }
                })
            }
        } else {
            $(this).removeClass("active-nav");
            if ($(this).hasClass("brainbad")) {
                let searchname2 = $(".content-search div");
                searchname2.each(function () {
                    if ($(this).hasClass("headp")) {
                        if ($(this).hasClass("none")) {
                            $(this).removeClass("none");
                            $(".image").removeClass("none");
                        }
                    }
                })
            }
        }

    })

    $(".toggle-list > a").click(function () { // in responsive  clicking on symtom nav to show symtom nav bar
        $(".toggle-list").toggleClass("show");
    });

})