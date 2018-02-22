$('.menu-icon').on('click', function () {
    $('nav').toggleClass('expand');
    $(this).toggleClass('active');
    $('ul li i').toggleClass('icon');
});