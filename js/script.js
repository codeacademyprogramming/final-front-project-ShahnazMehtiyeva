$(document).ready(function () {

    var count2 = 0;
    var bulletslength = $(".bullets a").length;

    $(".slider, .index-inset").addClass("show");

    setTimeout(function () {
        var count = 0;
        setInterval(function () {
            $(".inner-nav ul li").eq(count).addClass("show"); // for inner nav to shown one by one 
            count++;
        }, 300);
    }, 300);


    if ($(".slider").length) {
        $(".slider > div > div img").eq(0).addClass("scale"); // for scaling image on slider
    }

    function index_go(clicked, source, name, link) {
        $(".bullets a").removeClass("active2"); // removing active class from all bullet button
        clicked.addClass("active2");

        $(".bullets span").addClass("hide");

        $(".slider > div > div").prepend("<img src='" + source + "' alt='' />"); // prepending image tag with new image src 
        $(".slider > div > div img").eq(1).addClass("hide");
        setTimeout(function () {
            $(".slider > div > div img").eq(0).addClass("scale"); //scaling image 
            $(".bullets span").removeClass("hide");
            $(".slider > div > div img").eq(1).remove();
        }, 300);
        $(".index-inset h2").addClass("hide"); //hiding header in index-inset
        setTimeout(function () {
            $(".index-inset h2").html(name); //giving new header text 
            $(".index-inset h2").removeClass("hide"); //showing header
        }, 480);
        setTimeout(function () {
            $(".index-inset .link").addClass("hide"); //hiding  "Daha etrafli "
        }, 150);
        setTimeout(function () {
            $(".index-inset .link a").attr("href", link); // giving new link url to link
            $(".index-inset .link").removeClass("hide"); //showing link "Daha etrafli"
        }, 650);
    }

    $(".bullets a").click(function () { //clicking on bullet 
        var clicked = $(this);
        var source = $(this).attr("href");
        var name = $(this).data("name");
        var link = $(this).data("link");
        index_go(clicked, source, name, link); //taking clicking bullet button src name link and giving to index_go function
        return false;
    });


    setTimeout(function () { // changing slide after 3 second
        setInterval(function () {
            count2 = $(".bullets .active2").index(); //getting current active bullet button index 
            count2++;
            if (count2 == bulletslength) {
                count2 = 0;
            }
            $(".bullets a").eq(count2).click();
        }, 5000);
    }, 300);



})