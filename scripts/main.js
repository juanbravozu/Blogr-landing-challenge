window.addEventListener('load', () => {

    const navItems = document.querySelectorAll('nav li p');
    const submenus = document.querySelectorAll('.submenu');

    navItems.forEach(item => {
        item.addEventListener('click', toggleMenu);
        //item.addEventListener('focus', openMenu);
        item.addEventListener('blur', closeMenu);
    });

    submenus.forEach(submenu => {
        submenu.addEventListener('mouseleave', closeMenu);
        submenu.addEventListener('blur', closeMenu);
    });

    function openMenu(event) {
        navItems.forEach(item => {
            item.closest('li').classList.remove('active');
        });

        let target = event.target.closest('li');
        target.classList.add('active');
    }

    function closeMenu(event) {
        let target = event.target.closest('li');
        let submenuLinks = Array.from(target.querySelectorAll('a'));
        target.classList.remove('active');
    }

    function toggleMenu(event) {
        let target = event.target.closest('li');
        const isActive = target.classList.contains('active');
        console.log(target.classList);
        navItems.forEach(item => {
            item.closest('li').classList.remove('active');
        });
        
        console.log(isActive);

        if(!isActive) target.classList.add('active');
    }

    const menuBtn = document.querySelector('nav button');
    const menu = document.querySelector('.menu');

    menuBtn.addEventListener('click', () => {
        const btnImg = menuBtn.querySelector('img');
        menu.classList.toggle('menu--active');

        if(menu.classList.contains('menu--active')) {
            btnImg.setAttribute('src', './images/icon-close.svg');
            document.querySelector('body').style.overflowX = 'hidden';
        } else {
            btnImg.setAttribute('src', './images/icon-hamburger.svg');
            document.querySelector('body').style.overflowX = 'auto';
        }        
    });
});