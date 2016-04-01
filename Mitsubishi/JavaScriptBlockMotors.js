$(document).ready(function () {

    // При наведении на ссылку
    $(".HeadTabsClass").mouseenter(function () {

        // Получаем ID блока, который нужно показать
        var title = $(this).attr("title");

        // Показываем блок
        //$(this).append($(title));
        $(title).fadeIn();
    });

    // При уходе мышки со ссылки
    $(".HeadTabsClass").mouseleave(function () {

        // Получаем ID блока, который нужно показать
        var title = $(this).attr("title");

        // Скрываем блок
        $(title).fadeOut();

    });

});