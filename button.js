$(document).ready(function () {
    // маленький скрипт для того что бы кнопка открытия формы кидалась в глаза
    // c интервалом в 1 с. меняем класс, цвета прописаны в стилях
    setInterval(function () {
        $(".call-container").toggleClass("btn-black");
    }, 1000);
});