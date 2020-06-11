$(document).ready(function () {
    $('.header').height($(window).height());
});

$('.nav-link').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});