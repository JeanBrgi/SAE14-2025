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