$(document).ready(function () {
    $('.header').height($(window).height());
});

$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});