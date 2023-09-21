$(function () {
    'user strict';
    $(window).scroll(function () {
        window.console.log($('.navbar').height());
        window.console.log($(window).scrollTop());
        var navbar = $('.navbar');
        $(window).scrollTop() >= navbar.height() ? navbar.addClass('scrolled') : navbar.removeClass('scrolled');

    })
    // deal with tabs
    $('.tab-switch li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        //hide all divs
        $('.tabs .tabs-content > div').hide();
        //show div connected with this div
        $('.' + $(this).data('class')).show();
        window.console.log($(this).data('class'));
    })

});