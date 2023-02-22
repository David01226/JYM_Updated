// This causes things to fade in from the bottom as the page scrolls when .fade-in class is added


jQuery(document).ready(function () {

    const headerFadeDown = document.querySelectorAll('.headerFadeDown');
    const smallHeroFade = document.querySelectorAll('.smallHeroFade');
    const backgroundDecFade = document.querySelectorAll('#backgroundDecFade');

    const fade = document.querySelectorAll('.fade-in');
    const fadeLeft = document.querySelectorAll('.fadeLeft');
    const fadeRight = document.querySelectorAll('.fadeRight');
    const fadeLeftQuick = document.querySelectorAll('.fadeLeftQuick');
    const fadeRightQuick = document.querySelectorAll('.fadeRightQuick');
    
    //Quick Links
    const quickPhone = document.querySelectorAll('.quickPhone'); 
    const quickEmail = document.querySelectorAll('.quickEmail'); 
    const quickForm = document.querySelectorAll('.quickForm'); 


    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -150px 250px"
    };
    
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {    
                return;
            } else{
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);   //stops observing the element as soon as the image appears
            }
        });
    }, 
    appearOptions);

    headerFadeDown.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    smallHeroFade.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    backgroundDecFade.forEach(fader => {
        appearOnScroll.observe(fader);
    });
    
    fade.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    fadeLeft.forEach(fader => {
        appearOnScroll.observe(fader); 
    });

    fadeRight.forEach(fader => {
        appearOnScroll.observe(fader); 
    });

    fadeLeftQuick.forEach(fader => {
        appearOnScroll.observe(fader); 
    });

    fadeRightQuick.forEach(fader => {
        appearOnScroll.observe(fader); 
    });

    //Quick Links
    quickPhone.forEach(fader => {
        appearOnScroll.observe(fader); 
    });

    quickEmail.forEach(fader => {
        appearOnScroll.observe(fader); 
    });

    quickForm.forEach(fader => {
        appearOnScroll.observe(fader); 
    });

});

// https://www.youtube.com/watch?v=huVJW23JHKQ&t=245s