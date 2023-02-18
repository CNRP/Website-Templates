const hamburger = document.querySelector('#hamburger__button');
const hamburger_links = document.querySelector('#hamburger__links');

var lock_x = 0;
var lock_y = 0;

hamburger.addEventListener('click', () => {
    const isOpened = hamburger.getAttribute('aria-expanded');
    
    if(isOpened === 'false'){
        hamburger.setAttribute('aria-expanded', 'true');
        hamburger_links.setAttribute('style', 'opacity: 1;');
        lock_x = window.pageXOffset;
        lock_y = window.pageYOffset;
    }else{
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger_links.setAttribute('style', 'opacity: 0;');
    }
});

window.onscroll = () => { 
    const isOpened = hamburger.getAttribute('aria-expanded');
    if(isOpened === 'false'){
        return;
    }else{
        window.scroll(lock_x,lock_y); 
    }
};