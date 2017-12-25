$(document).ready(function () {
    $(function () {
        // находим все span c классом tool
        $('span.tool a').each(function () {
            var el = $(this);

            // берем значение из title
            var title = el.attr('title');

            // валидация на пустоту и существования
            if (title && title != '') {

                // если есть добавляем текст из title в div. причем стандартный тайтл очищаем, чтобы не мешал
                el.attr('title', '').append('<div>' + title + '</div>');

                // координаты элемента
                var width = el.find('div').width();
                var height = el.find('div').height();

                // когда наводишь на ссылку "открывается" div с анимацией, стили для него в css файлах
                el.hover(
                    function () {
                        el.find('div')
                            .css('margin-bottom', '30px')
                            .clearQueue()
                            .delay(200)
                            .animate({width: width + 20, height: height + 20}, 200).show(200)
                            .animate({width: width, height: height}, 200);
                    },
                    function () {
                        el.find('div')
                            .animate({width: width + 20, height: height + 20}, 150)
                            .animate({width: 'hide', height: 'hide'}, 150);
                    }

                    //когда убираем мышку со ссылки, задаем div hidden, и прячем его
                ).mouseleave(function () {
                    if (el.children().is(':hidden')) el.find('div').clearQueue();
                });
            }
        })
    })
});