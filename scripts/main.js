window.addEventListener('load', () => {

    const navItems = document.querySelectorAll('nav li p');
    const submenus = document.querySelectorAll('.submenu');

    navItems.forEach(item => {
        item.addEventListener('click', toggleMenu);
        item.addEventListener('mouseenter', openMenu);
    });

    submenus.forEach(submenu => {
        submenu.addEventListener('mouseleave', closeMenu);
        submenu.addEventListener('blur', closeMenu);
    });

    function openMenu(event) {
        if(window.innerWidth >= 1024) {
            navItems.forEach(item => {
                const li = item.closest('li');
                const submenu = li.querySelector('.submenu');
                submenu.style.transitionProperty = 'none';
                setTimeout(() => {
                    submenu.style.transitionProperty = 'all';
                }, 300);
                li.classList.remove('active');
            });
    
            let target = event.target.closest('li');
            target.querySelector('.submenu').style.transitionProperty = 'all';
            target.classList.add('active');
        }        
    }

    function closeMenu(event) {
        if(window.innerWidth >= 1024) {
            let target = event.target.closest('li');
            target.classList.remove('active');
        }    
    }

    function toggleMenu(event) {
        let target = event.target.closest('li');
        const isActive = target.classList.contains('active');
        navItems.forEach(item => {
            const li = item.closest('li');
            const submenu = li.querySelector('.submenu');
            submenu.style.transitionProperty = 'none';
            setTimeout(() => {
                submenu.style.transitionProperty = 'all';
            }, 300);
            li.classList.remove('active');
        });
        target.querySelector('.submenu').style.transitionProperty = 'all';
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