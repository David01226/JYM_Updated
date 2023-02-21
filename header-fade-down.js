jQuery(document).ready(function () {

    const addClass = () => {
        document.querySelector('.fade-down').classList.add('hover');
    }

    const removeClass = () => {
        document.querySelector('.fade-down').classList.remove('hover');
    }

    document.querySelector('.header-homepage').onmouseenter = e => {
        e.preventDefault();
        addClass();
    }

    document.querySelector('.header-homepage').onmouseleave = e => {
        e.preventDefault();
        removeClass();
    }

});