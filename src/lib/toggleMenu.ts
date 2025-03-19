export function toggleMenu() {
    const button = document.getElementById('plus');
    const menu = document.getElementById('hamburger-menu');
    if (button) {
        button.classList.toggle('rotate-45');
    }

    if (menu) {
        if (menu.classList.contains('visually-hidden-transition')) {
            menu.classList.remove('visually-hidden-transition');
            menu.classList.remove('visually-hidden');
            menu.classList.add('visually-hidden-visible-transition');
        } else {
            menu.classList.remove('visually-hidden-visible-transition');
            menu.classList.add('visually-hidden-transition');
            setTimeout(() => {
                menu.classList.add('visually-hidden');
            }, 400);
        }
    }
}