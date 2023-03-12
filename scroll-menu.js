// Scroll menu visibility on scroll

jQuery(document).ready(function () {

    jQuery(window).scroll(function () {
        checkScroll();
    });

    jQuery(window).resize(function () {
        checkScroll();
    });

    checkScroll();


    const scrollTop = () => {
        $('html, body').animate({
            scrollTop: 0
        }, 250, 'swing');
    }
    
    document.getElementById('scroll-btn-container').onclick = e => {
        e.preventDefault();
        scrollTop();
    }

});


function checkScroll() {
        var scroll = jQuery(window).scrollTop();

        if (scroll <= 170) {
            jQuery('.scroll-header-container').removeClass("active");
            jQuery('#scroll-btn-container').removeClass("visible");
        } else {
            jQuery('.scroll-header-container').addClass("active");
            jQuery('#scroll-btn-container').addClass("visible");
        }
}