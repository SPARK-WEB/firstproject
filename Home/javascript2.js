$(window).on('scroll', function() {

    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop >= 700) {
        $('.top-menu').removeClass('activated');
    } else {
        $('.top-menu').addClass('activated');
    }

    if (stop > 700 && stop <= 1400) {
        $('.next-menu-1').addClass('activated');
    } else {
        $('.next-menu-1').removeClass('activated');
    }

    if (stop > 1400 && stop <= 2100) {
        $('.next-menu-2').addClass('activated');
    } else {
        $('.next-menu-2').removeClass('activated');
    }

    if (stop > 2100 && stop <= 2900) {
        $('.next-menu-3').addClass('activated');
    } else {
        $('.next-menu-3').removeClass('activated');
    }

    if (stop > 2900 && stop <= 3650) {
        $('.next-menu-4').addClass('activated');
    } else {
        $('.next-menu-4').removeClass('activated');
    }

    if (stop > 3650 && stop <= 5100) {
        $('.next-menu-5').addClass('activated');
    } else {
        $('.next-menu-5').removeClass('activated');
    }

    if (stop > 5100) {
        $('.next-menu-6').addClass('activated');
    } else {
        $('.next-menu-6').removeClass('activated');
    }

});
//@arkad Orginal Work