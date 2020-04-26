$(document).ready(function () {

    $(document).on("click", ".call-menu", function () {          //clicking on call-menu to see fillial menu
        $(".fillial-menu div").toggle("active2");
    })

    $(document).mouseup(function (e) {
        if ($(e.target).closest(".fillial-menu ").length === 0 ) {      // to close fillial menu if clicking any part of window except itself  
            $(".fillial-menu div").hide();
        }
    });
   

    $(".address").addClass("active4");
    $(".address-content").show();                                         // page loaded firstly shown address content
    $(".services-content").hide();
    $(".doctors-content").hide();
    $(document).on("click", ".filiall-nav>div div ", function () {              // to show content
        $(".filiall-nav>div div").removeClass("active4");                      // remove active class form all fillial navbar
        $(".content-content div").hide();                                      //hide all content 
        $(this).addClass("active4"); 
        if ($(this).hasClass("address")) {                                     // to see adrress content
            $(".address-content").show();
            $(".address-content div").show(); 
        } else if ($(this).hasClass("services")) {                             // to see services content
            $(".services-content").show();
            $(".eachservice").show();
        } else if ($(this).hasClass("doctors")) {                              // to see doctor content
            $(".doctors-content").show();
            $(".doctors-content>div").show();
            $(".eachdoctor").show();
            $(".image").show();
        }
    })


    $(document).on("change", ".filiall-nav>select", function () {                //on responsive fillial nav select 
        var selected = $(this).children("option:selected").attr('class');        // taking selecting option

        $(".content-content div").hide();
        if (selected == "address2") {                                            // selected option is address
            $(".address-content").show();
            $(".address-content div").show();
        } else if (selected == "services2") {                                    // selected option is service
            $(".services-content").show();
            $(".eachservice").show();
        } else if (selected == "doctors2") {                                     // selected optiob is doctor
            $(".doctors-content").show();
            $(".doctors-content>div").show();
            $(".eachdoctor").show();
            $(".image").show();
        }
    })


})