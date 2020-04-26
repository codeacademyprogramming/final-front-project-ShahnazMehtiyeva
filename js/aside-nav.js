$(document).ready(function () {
    let open = false;
    $(document).on("click", ".toggler ", function () {                     //clicking toggler 
        if (!open) {                                                       //cheking if aside nav is open or not
            $("header").addClass("header-show");                           //giving class to header z-index
            $(" .toggler").addClass("active-toggler");                     //changing properties of toggler such as background
            $(" .toggler em").addClass("toggler-em-active");               // changing background of toggler em 
            $(" .toggler ").addClass("active3");
            setTimeout(function () {                                       // for toggler em 
                $(" .toggler ").addClass("active_second");
            }, 300);
            setTimeout(function () {                                        //for toggler em 
                $(" .toggler ").addClass("active_last");
            }, 600);

            $(".asside-nav").addClass("show-aside");                        // to show aside nav content
            $(".phone span").addClass("phone-show");
            $(".phone a").addClass("phone-show");
            $(".main-wrapper").addClass("main-wrapper-active");              
            open = true;
        } else if (open) {
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
            open = false;
        }
    })
})