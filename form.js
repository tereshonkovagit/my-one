$(document).ready(function () {
    // когда нажимаем на кнопку, "показываем"
    $(".call").click(function (e) {
        e.preventDefault();
        $("#feedback-box").css("display", "block");
    });
    $("#close").click(function (e) {
        e.preventDefault();
        $("#feedback-box").css("display", "none");
    });
    $('input#name, input#email, textarea#message').unbind().blur(function () {
        var id = $(this).attr('id');
        var val = $(this).val();
        // После того, как поле потеряло фокус, перебираем значения id, совпадающие с id данного поля
        switch (id) {
            // Проверка поля "Имя"
            case 'name':
                var rv_name = /^[a-zA-Zа-яА-Я]+$/; // используем регулярное выражение. Все латинские и русские

                if (val.length > 2 && val != '' && rv_name.test(val)) {
                    $(this).addClass('not_error');
                    $(this).next('.error-box').text('Принято')
                        .css('color', 'green')
                        .animate({'paddingLeft': '10px'}, 400)
                        .animate({'paddingLeft': '5px'}, 400);
                }
                else {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.error-box').html('поле "Имя" обязательно для заполнения,<br> длина имени должна составлять не менее 2 символов,<br> поле должно содержать только русские или латинские буквы')
                        .css('color', 'red')
                        .animate({'paddingLeft': '10px'}, 400)
                        .animate({'paddingLeft': '5px'}, 400);
                }
                break;
            // Проверка email
            case 'email':
                var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
                if (val != '' && rv_email.test(val)) {
                    $(this).addClass('not_error');
                    $(this).next('.error-box').text('Принято')
                        .css('color', 'green')
                        .animate({'paddingLeft': '10px'}, 400)
                        .animate({'paddingLeft': '5px'}, 400);
                }
                else {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.error-box').html('поле "Email" обязательно для заполнения,<br> поле должно содержать правильный email-адрес')
                        .css('color', 'red')
                        .animate({'paddingLeft': '10px'}, 400)
                        .animate({'paddingLeft': '5px'}, 400);
                }
                break;

            // Проверка поля "Сообщение"
            case 'message':
                if (val != '' && val.length < 5000) {
                    $(this).addClass('not_error');
                    $(this).next('.error-box').text('Принято')
                        .css('color', 'green')
                        .animate({'paddingLeft': '10px'}, 400)
                        .animate({'paddingLeft': '5px'}, 400);
                }
                else {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.error-box').html('поле "Текст письма" обязательно для заполнения')
                        .css('color', 'red')
                        .animate({'paddingLeft': '10px'}, 400)
                        .animate({'paddingLeft': '5px'}, 400);
                }
                break;
        }
    });

    // Сдесь нужно обратитсься к PHP серверу, но поскольку вы его еще не учили,
    // просто выведим сообщения в зависимости от результатов заполнения
    $('#send').click(function (e) {
        e.preventDefault();
        if ($('.not_error').length == 3) {
            alert('Ваша заявка принята!')
            $("#feedback-box").css("display", "none");
        }
        else {
            alert('Данные введены не верно, попробуйте еще раз')
        }
    });
});