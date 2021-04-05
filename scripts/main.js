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
});