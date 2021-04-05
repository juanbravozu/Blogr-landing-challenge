window.addEventListener('load', () => {

    const navItems = document.querySelectorAll('nav li p');
    const submenus = document.querySelectorAll('.submenu');

    navItems.forEach(item => {
        item.addEventListener('click', openMenu);
        item.addEventListener('focus', openMenu);
    });

    submenus.forEach(submenu => {
        submenu.addEventListener('mouseleave', closeMenu);
        submenu.addEventListener('blur', closeMenu);
    });

    function openMenu(event) {
        let target = event.target.closest('li');
        target.classList.add('active');
    }

    function closeMenu(event) {
        let target = event.target.closest('li');
        let submenuLinks = Array.from(target.querySelectorAll('a'));
        target.classList.remove('active');
    }

    const menuBtn = document.querySelector('nav button');
    const menu = document.querySelector('.menu');

    menuBtn.addEventListener('click', () => {
        const btnImg = menuBtn.querySelector('img');
        menu.classList.toggle('menu--active');

        if(menu.classList.contains('menu--active')) {
            btnImg.setAttribute('src', './images/icon-close.svg');
        } else {
            btnImg.setAttribute('src', './images/icon-hamburger.svg');
        }        
    });
});