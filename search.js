$(document).ready(function () {
    var paddingtop = 30; // отступ сверху при прокрутке
    var scrollspeed = 200; // время прокрутки
    var keyint = 500; // интервал между нажатиями клавиш
    var term = '';
    var n = 0;
    var time_keyup = 0;
    var time_search = 0;

    $('body').delegate('#spgo', 'click', function () {
        $('body,html').animate({scrollTop: $('span.highlight:first').offset().top - paddingtop}, scrollspeed); // переход к первому фрагменту
    });

    function dosearch() {
        term = $('#spterm').val();

        $('span.highlight').each(function () { //удаляем старую подсветку
            $(this).after($(this).html()).remove();
        });
        $('div.osnovnoe').each(function () { // в селекторе задаем область поиска

                $(this).html($(this).html().replace(new RegExp(term, 'ig'), '<span class="highlight">$&</span>')); // выделяем найденные фрагменты
                $('span.highlight').css('background', 'yellow')
                n = $('span.highlight').length; // количество найденных фрагментов
                console.log('n = ' + n);
                if (n == 0)
                    $('#spresult').html('Ничего не найдено');
                else
                    $('#spresult').html('Результатов: ' + n + '. <span class="splink" id="spgo">Перейти</span>')
                        .css({"cursor": "pointer", "color": "green"});
                if (n > 1) // если больше одного фрагмента, то добавляем переход между ними
                {
                    var i = 0;
                    $('span.highlight').each(function (i) {
                        $(this).attr('n', i++); // нумеруем фрагменты
                    });
                    $('span.highlight').not(':last').attr({title: 'Нажмите, чтобы перейти к следующему фрагменту'}).click(function () { // всем фрагментам, кроме последнего, добавляем подсказку
                        $('body,html').animate({scrollTop: $('span.highlight:gt(' + $(this).attr('n') + '):first').offset().top - paddingtop}, scrollspeed); // переход к следующему фрагменту
                    });
                    $('span.highlight:last').attr({title: 'Нажмите, чтобы вернуться к форме поиска'}).click(function () {
                        $('body,html').animate({scrollTop: $('#spterm').offset().top - paddingtop}, scrollspeed); // переход к форме поиска
                    });
                }
            }
        );
    }

    $('#spterm').keyup(function () {
        var d1 = new Date();
        time_keyup = d1.getTime();
        if ($('#spterm').val() != term) // проверяем, изменилась ли строка
            if ($('#spterm').val() !== '') { // проверяем длину строки

                setTimeout(function () { // ждем следующего нажатия
                    var d2 = new Date();
                    time_search = d2.getTime();
                    if (time_search - time_keyup >= keyint) // проверяем интервал между нажатиями
                        dosearch(); // если все в порядке, приступаем к поиску
                }, keyint);

            }
            else
                $('#spresult').html(' ');// если строка короткая, убираем текст из DIVа с результатом
    });
});
