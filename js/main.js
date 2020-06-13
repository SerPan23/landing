$(document).ready(function () {
    $('.').height($(window).height());
});

$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});