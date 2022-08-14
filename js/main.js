$(document).ready(function () {
    //плавная прокрутка
    $("div a, a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
        highlightSelector: "div a"
    });
    
});



// Viewport checker - https://github.com/dirkgroenen/jQuery-viewport-checker 

jQuery(function ($) {
    $('.animate, .animate-slower').viewportChecker({
        classToAdd: 'visible'
    });
});

// Portfolio

$(function () {
    var selectedClass = "";
    $(".fil-cat").click(function () {
        selectedClass = $(this).attr("data-rel");
        $("#portfolio").fadeTo(100, 0.1);
        $("#portfolio .tile").not("." + selectedClass).fadeOut().removeClass('scale-anm');
        setTimeout(function () {
            $("." + selectedClass).fadeIn().addClass('scale-anm');
            $("#portfolio").fadeTo(300, 1);
        }, 300);

    });
});

$(document).ready(function () {
    //jQuery Validate js
    $("#contact-form").validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            //            skype {required: true},
            //            phone {required: true},
            message: {
                required: true
            },
        },
        messages: {
            name: "Please enter your name",
            email: {
                requi: "Please enter your email",
                email: "Email address must be in the format name@domain.com. You may have entered a wrong email."
            },
            message: "Please enter your message"
        },

        submitHandler: function (form) {
            ajaxFormSubmit();
        }
    })


    // Функция AJAX запрса на сервер
    function ajaxFormSubmit() {
        var string = $("#contact-form").serialize(); // Сохраняем данные введенные в форму в строку. 

        // Формируем ajax запрос
        $.ajax({
            type: "POST", // Тип запроса - POST
            url: "php/mail.php", // Куда отправляем запрос
            data: string, // Какие даные отправляем, в данном случае отправляем переменную string

            // Функция если все прошло успешно
            success: function (html) {
                $("#contact-form").slideUp(800);
                $('#answer').html(html);
            }
        });

        // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
        return false;
    }

});
