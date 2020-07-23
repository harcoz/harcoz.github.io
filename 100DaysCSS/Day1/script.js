$('.menu-icon').on('click', function() {
    $(this).toggleClass('active');
    $(this).find('div').removeClass('no-animation');
});