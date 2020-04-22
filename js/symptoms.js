$(document).ready(function () {

    $(".symptom-form").hide();
    $(".symptom-nav").hide();
    $(".content-search").hide();

    $(document).on("mouseover", "map area", function () {
        $(this).parent().prev().find("img").attr("src", $(this).data("part"));
    })
    $(document).on("mouseleave", " map area", function () {
        $(".content-image .mapped-image img").attr("src", $(".content-image").data("default"));
    })


    $(document).on("click", "map area", function () {
        $(".switcher").removeClass("search");
        $(".text").hide();
        $(".symptom-form").show();
        $(".symptom-nav ").show();
        $(".symptom-nav a").show();

        let classname = $(this).attr('class');
        if (classname == "headpart") {
            let symptomnav = $(".symptom-nav a");
            symptomnav.each(function () {
                if ($(this).hasClass("headp")) {
                    $(this).show();

                    $(".content-search").show();
                    let searchname = $(".content-search div");
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

    $(document).on("click", ".switcher", function () {
        if ($(".switcher").hasClass("search")) {
            $(".switcher").removeClass("search");
            $(".text").hide();
            $(".symptom-form").show();
            $(".symptom-nav ").show();
            $(".symptom-nav a").show();
            let symptomnav = $(".symptom-nav a");
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


    $(document).on("click", ".symptom-nav a", function () {
        if (!$(this).hasClass("active-nav")) {
            $(this).addClass("active-nav")
            if ($(this).hasClass("brainbad")) {
                $(".content-search").show();
                let searchname = $(".content-search div ");
                searchname.each(function () {
                    if ($(this).hasClass("headp")) {
                        if ($(this).hasClass("brainbad")) {
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
            let searchname = $(".content-search div");
            searchname.each(function () {
                if ($(this).hasClass("headp")) {
                    if ($(this).hasClass("none")) {
                        $(this).removeClass("none");
                        $(".image").removeClass("none");
                    }
                }
            })
        }

    })



})