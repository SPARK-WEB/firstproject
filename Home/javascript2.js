$(window).on('scroll', function() {

    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop >= 700) {
        $('.top-menu').removeClass('activated');
    } else {
        $('.top-menu').addClass('activated');
    }

    if (stop > 700 && stop <= 1260) {
        $('.next-menu-1').addClass('activated');
    } else {
        $('.next-menu-1').removeClass('activated');
    }

    if (stop > 1260 && stop <= 1960) {
        $('.next-menu-2').addClass('activated');
    } else {
        $('.next-menu-2').removeClass('activated');
    }

    if (stop > 1960 && stop <= 2760) {
        $('.next-menu-3').addClass('activated');
    } else {
        $('.next-menu-3').removeClass('activated');
    }

    if (stop > 2760 && stop <= 3510) {
        $('.next-menu-4').addClass('activated');
    } else {
        $('.next-menu-4').removeClass('activated');
    }

    if (stop > 3510 && stop <= 4960) {
        $('.next-menu-5').addClass('activated');
    } else {
        $('.next-menu-5').removeClass('activated');
    }

    if (stop > 4960) {
        $('.next-menu-6').addClass('activated');
    } else {
        $('.next-menu-6').removeClass('activated');
    }

});
//@arkad Orginal Work