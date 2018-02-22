$('.create').on('click', function () {
    $(this).toggleClass('remvBg');
    if ($(this).hasClass('remvBg')) {
        $('.create i').text('close');
    } else {
        $('.create i').text('create');
    }
    $('#expandedBg').toggleClass('fabExp');
    $('#options button').toggleClass('show');
});