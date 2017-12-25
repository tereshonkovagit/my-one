$(document).ready(function () {
    $(function () {
        // берем URL адрес текущей страницы, например http://localhost:63342/6/class.html
        var location = window.location.href;
        // обрезаем и берем последнюю часть, например сlass.html
        var cur_url = location.split('/').pop();

        /*
         перебераем все li в .nav на странице
         находим атрибут href во всех ссылках
         сравниваем его с текущим url из строки
         если совпадают, то присваеваем пункту меню класс current
         для current добавляем background и color
         */
        $('.nav li a').each(function () {
            var link = $(this).attr('href');
            if (cur_url == link) {
                $(this).addClass('current')
                    .css({'background': 'black', 'color': 'white'})

            }
        });
    });
})
;
