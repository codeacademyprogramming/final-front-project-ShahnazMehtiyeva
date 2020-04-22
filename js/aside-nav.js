$(document).ready(function () {
    let open = true;
    $(document).on("click", ".toggler ", function () {
        if (open) {
            $("header").addClass("header-show");
            $(" .toggler").addClass("active-toggler");
            $(" .toggler em").addClass("toggler-em-active");
            $(" .toggler ").addClass("active3");
            setTimeout(function () {
                $(" .toggler ").addClass("active_second");
            }, 300);
            setTimeout(function () {
                $(" .toggler ").addClass("active_last");
            }, 600);

            $(".asside-nav").addClass("show-aside");
            $(".phone span").addClass("phone-show");
            $(".phone a").addClass("phone-show");
            $(".main-wrapper").addClass("main-wrapper-active");
            open = false;
        } else if (!open) {
            $("header").removeClass("header-show");
            $(" .toggler").removeClass("active-toggler");
            $(".toggler em").removeClass("toggler-em-active");
            $(" .toggler ").removeClass("active_last");
            setTimeout(function () {
                $(" .toggler ").removeClass("active_second");
            }, 300);
            setTimeout(function () {
                $(" .toggler ").removeClass("active3");
            }, 600);
            $(".asside-nav").removeClass("show-aside");
            $(".phone span").removeClass("phone-show");
            $(".phone a").removeClass("phone-show");
            $(".main-wrapper").removeClass("main-wrapper-active");
            open = true;
        }
    })
})