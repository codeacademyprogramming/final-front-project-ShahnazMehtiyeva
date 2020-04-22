$(document).ready(function () {
    $(".slider, .index-inset").addClass("show");
    setTimeout(function () {
        var count = 0;
        setInterval(function () {
            $(".inner-nav ul li").eq(count).addClass("show");
            count++;
        }, 300);
    }, 300);


    if ($(".slider").length) {
        $(".slider > div > div img").eq(0).addClass("scale");
    }

    function index_go(_this, _this_src, _this_name, _this_link) {
        $(".bullets a").removeClass("active2");
        _this.addClass("active2");

        $(".bullets span").addClass("hide");

        $(".slider > div > div").prepend("<img src='" + _this_src + "' alt='' />");
        $(".slider > div > div img").eq(1).addClass("hide");
        setTimeout(function () {
            $(".slider > div > div img").eq(0).addClass("scale");
            if ($(".bullets a.active2").index() == $(".bullets a").length - 1) {
                $(".bullets span").html($(".bullets a:first-child").data("name").replace("<br>", " ").replace("<br/>", " "));
            } else {
                $(".bullets span").html($(".bullets a.active2 + a").data("name").replace("<br>", " ").replace("<br/>", " "));
            }
            $(".bullets span").removeClass("hide");
            $(".slider > div > div img").eq(1).remove();
        }, 300);

        $(".index-inset h2").addClass("hide");
        setTimeout(function () {
            $(".index-inset h2").html(_this_name);
            $(".index-inset h2").removeClass("hide");
        }, 480);
        setTimeout(function () {
            $(".index-inset .link").addClass("hide");
        }, 150);
        setTimeout(function () {
            $(".index-inset .link a").attr("href", _this_link);
            $(".index-inset .link").removeClass("hide");
        }, 650);
    }

    $(".bullets a").click(function () {
        var _this = $(this),
            _this_src = _this.attr("href"),
            _this_name = _this.data("name"),
            _this_link = _this.data("link")
        index_go(_this, _this_src, _this_name, _this_link);
        return false;
    });



    var count2 = 0;
    var bulletslength = $(".bullets a").length;

    setTimeout(function () {
        main_carousel_interval();
    }, 300);

    $(".index-inset").mouseover(function () {
        window.C_MOUSE_OVER = true;
        if (main_interval) {
            clearInterval(main_interval);
        }
    }).mouseleave(function () {
        window.C_MOUSE_OVER = false;
        window.C_MOUSE_LEAVE = true;
        count2 = $(".bullets a.active2").index();
        main_carousel_interval()
    });

    $(".index-inset").mousemove(function () {
        window.C_MOUSE_OVER = true;
    });

    function main_carousel_interval() {
        main_interval = setInterval(function () {
            count2++;
            if (count2 == bulletslength) {
                count2 = 0;
            }

            $(".bullets a").eq(count2).click();

        }, 5000);
    }

})