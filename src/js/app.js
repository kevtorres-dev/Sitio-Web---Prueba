const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const media = window.matchMedia('(width < 40em)');
const topNavMenu = document.querySelector('.topnav__menu');
const main = document.querySelector('main');
const body = document.querySelector('body');

function setupTopNav(e) {
    if (e.matches) {
        // is mobile
        topNavMenu.setAttribute('inert', '');
    }   
    else {
        // is tablet/desktop
        topNavMenu.removeAttribute('inert');
        closeMobileMenu();
    }
}

function openMobileMenu() {
    btnOpen.setAttribute('aria-expanded', 'true');
    topNavMenu.removeAttribute('inert');
    topNavMenu.removeAttribute('style');
    main.setAttribute('inert', '');
    bodyScrollLockUpgrade.disableBodyScroll(body);
    btnClose.focus();
}

function closeMobileMenu() {
    btnOpen.setAttribute('aria-expanded', 'false');
    topNavMenu.setAttribute('inert', '');
    main.removeAttribute('inert');
    bodyScrollLockUpgrade.enableBodyScroll(body);
    btnOpen.focus()

    setTimeout(() => {
        topNavMenu.style.transition = 'none';
    }, 500);
}

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);

const menuLinks = document.querySelectorAll('.topnav__links a[href^="#"]');

menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function() {
        closeMobileMenu();
    })
})