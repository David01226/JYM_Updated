// Scroll menu visibility on scroll

jQuery(document).ready(function () {
    jQuery(window).scroll(function () {
        checkScroll();
    });

    jQuery(window).resize(function () {
        checkScroll();
    });

    checkScroll();
});

function checkScroll() {
        var scroll = jQuery(window).scrollTop();

        if (scroll <= 170) {
            jQuery('.scroll-header-container').removeClass("active");
        } else {
            jQuery('.scroll-header-container').addClass("active");
        }
}