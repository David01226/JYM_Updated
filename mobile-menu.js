// Mobile Side Menu

jQuery(document).ready(function () {

    //Functions
    const openMenu = () => {
        document.querySelector('.backdrop').className = 'backdrop blur';
        document.querySelector('aside').className = 'open';
        document.querySelector('body').className = 'lock';
    }
    
    const closeMenu = () => {
        document.querySelector('.backdrop').className = 'backdrop';
        document.querySelector('aside').className = '';
        document.querySelector('body').className = '';
    }
    
    
    //Event listeners
    document.getElementById('hamburger-menu').onclick = e => {
        e.preventDefault();
        openMenu();
    }

    const scrollHamburgerMenu = document.getElementById('scroll-hamburger-menu')
    if (scrollHamburgerMenu) {
        scrollHamburgerMenu.onclick = e => {
            e.preventDefault();
            openMenu();
        }
    }
    
    
    document.querySelector('.close-mobile-menu').onclick = e => {
        closeMenu();
    }
    
    document.querySelector('.backdrop').onclick = e => {
        closeMenu();
    }

});