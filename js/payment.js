$(document).ready(function () {


    //cheking input if number
    $(".only-number").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {   // for cheking number with charcode with e.which
            return false;
        }
    });

    $(document).on('keyup', ".only-number", function () {  //when key up on payment
        $(".price").addClass("active2");
        if ($(this).val() == "") {
            $(".price2").text("0");
        } else {
            var price = $(this).val();                     //getting value of input
            $(".price2").text(price);                      //setting value to price content
        }
    })

    $(document).on("keyup", "input", function () {          // when key up on input to remove red border
        $(this).removeClass("active5");
    })


    $(document).on("click", ".pay", function () {          //cheking all input full in 
        let allinputs = $('input'); 
        allinputs.each(function () {
            if (!$(this).hasClass("lkod")) {                //except lkod input it is not required
                if ($(this).val() == '') {
                    $(this).addClass("active5");
                } else {
                    $(this).removeClass("active5");
                }
            }

        })
    })


    $("input[type='phone']").inputmask({              // input mask plugin 
        "mask": "+\\9\\94 99 999 999"
    }, {
        "placeholder": "_"
    });
})