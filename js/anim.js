// Permet de rendre flou le main quand je survole un menu

document.querySelectorAll('.titremenu').forEach(item => {
    item.addEventListener('mouseenter', () => {
        document.querySelector('main').style.filter = 'blur(3px)';
        document.querySelector('main').style.transition = '150ms';
    });
    item.addEventListener('mouseleave', () => {
        document.querySelector('main').style.filter = '';
    });
});


// Permet de garder le flou du main et la couleur du titre du menu déroulant quand je passe dans la sous-liste

document.querySelectorAll('.sous').forEach(item => {
    item.addEventListener('mouseenter', () => {
        document.querySelector('main').style.filter = 'blur(3px)';
        const parentLi = item.closest('li');
        const titreMenu = parentLi.querySelector('.titremenu');
        if (titreMenu) {
            titreMenu.style.color = "var(--color2)";
        }
    });
    item.addEventListener('mouseleave', () => {
        document.querySelector('main').style.filter = '';
        const parentLi = item.closest('li');
        const titreMenu = parentLi.querySelector('.titremenu');
        if (titreMenu) {
            titreMenu.style.color = "";
        }
    });
});

// Permet de detecter le scrrol

(function() {
    const header = document.querySelector('header');
    const align = document.getElementById('alignement');
    const threshold = align ? Math.max(40, Math.round(align.offsetHeight / 2)) : 50;

    window.addEventListener('scroll', () => {
        const y = window.scrollY || window.pageYOffset;
        if (y > threshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, { passive: true });
})();