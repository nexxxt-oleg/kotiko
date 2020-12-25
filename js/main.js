jQuery(document).ready(function ($) {
    /**
     * $('.dummy').viewportChecker({
        callbackFunction: function (elem, action) {
            new Vivus($(elem).attr('id'), {duration: 100});
        },
    });
     * */

    $('#portfolio').slick({
        centerMode: true,
        centerPadding: '230px',
        slidesToShow: 2,
        initialSlide: 1,
        appendArrows: $('.kotiko__portfolio__slider-nav'),
        focusOnSelect: true,
        /*infinite: false,*/
        nextArrow: "<button class=\"slick-next slick-arrow\" aria-label=\"Next\" type=\"button\" style=\"\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 31.49 22.14\">" +
            "<path d=\"M21.2.33A1.11,1.11,0,0,0,19.62,1.9l8.05,8H1.11A1.1,1.1,0,0,0,0,11.06a1.12,1.12,0,0,0,1.11,1.13H27.67l-8,8a1.14,1.14,0,0,0,0,1.59,1.11,1.11,0,0,0,1.58,0l10-9.95a1.1,1.1,0,0,0,0-1.57Z\"/>" +
            "</svg></button>",
        prevArrow: "<button class=\"slick-next slick-arrow\" aria-label=\"Prev\" type=\"button\" style=\"\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 31.49 22.14\">" +
            "<path d=\"M10.28,21.81a1.12,1.12,0,1,0,1.59-1.57l-8-8H30.38a1.1,1.1,0,0,0,1.11-1.11A1.12,1.12,0,0,0,30.38,10H3.82l8-8a1.14,1.14,0,0,0,0-1.59,1.12,1.12,0,0,0-1.59,0l-9.95,10a1.11,1.11,0,0,0,0,1.58Z\"/>" +
            "</svg></button>",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });


    $("#input__file").change(function() {
        var f_name = [];
        for (var i = 0; i < $(this).get(0).files.length; ++i) {
            f_name.push(" " + $(this).get(0).files[i].name);
        }
        //console.log(f_name);
        $("#input__file_name").html(f_name.join(", "));
    });

    if ($("#form1").length > 0) {
        $("#form1").validate({
            errorElement: "span",
            messages: {
                name: {
                    required: "Укажите ФИО",
                },
                email: {
                    required: "Укажите E-mail",
                    email: "Неверный формат E-mail"
                },
                phone: {
                    required: "Укажите номер телефона",
                },

            },
            submitHandler: function (form) {

                $.ajax({
                    url: '/ajax/send.php',
                    type: form.method,
                    data: $(form).serialize(),
                    success: function(response) {
                        console.log(response);
                    }
                });

                return false;
            }
        });
    }

});
new Vivus('mainSvg', {duration: 100});
