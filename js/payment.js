$(document).ready(function () {
    $(".only-number").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });

    $(document).on('keyup', ".only-number", function () {
        $(".price").addClass("active2");
        if ($(this).val() == "") {
            $(".price2").text("0");
        } else {
            var price = $(this).val();
            $(".price2").text(price);
        }
    })

    $(document).on("keyup", "input", function () {
        $(this).removeClass("active3");
    })


    $(document).on("click", ".pay", function () {
        let allinputs = $('input');
        allinputs.each(function () {
            if (!$(this).hasClass("lkod")) {
                if ($(this).val() == '') {
                    $(this).addClass("active3");
                } else {
                    $(this).removeClass("active3");
                }
            }

        })
    })


    $("input[type='phone']").inputmask({
        "mask": "+\\9\\94 99 999 999"
    }, {
        "placeholder": "_"
    });
})