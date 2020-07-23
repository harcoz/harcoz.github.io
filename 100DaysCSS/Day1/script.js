<script> src = "https://100dayscss.com/codepen/js/jquery.min.js"</script>
$('.menu-icon').bind('click', function() {
    $(this).toggleClass('active');
    $(this).find('div').removeClass('no-animation');
});