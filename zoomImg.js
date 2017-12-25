$(document).ready(function () {
// клик на картинку
    $("img").click(function () {

        // Получаем изображение, на которое кликнули
        var img = $(this);

        // Достаем из этого изображения путь к картинке
        var src = img.attr('src');

        // добавляем окно в разметку, стили прописаны в docum.css
        $("body").append("<div class='modal'>" +
            "<div class='modal_bg'></div>" +
            "<img src='" + src + "' class='modal_img' />" +
            "</div>");

        // выводим изображение, задержка 800мс, делаем абсолютное позиционоирование
        $(".modal").fadeIn(800).css('position', 'fixed');

        // если кликнули мимо изображения, скрыть его с задержкой 800мс
        $(".modal_bg").click(function () {
            $(".modal").fadeOut(800);
            setTimeout(function () {
                $(".modal").remove();
            }, 800);
        });
    });
});