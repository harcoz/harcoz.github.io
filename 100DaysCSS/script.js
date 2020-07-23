$('.menu-icon').bind('click', function(){
    $(this).togglesClass('active');
    $(this).fin('div').removeClass('no-animation');
});