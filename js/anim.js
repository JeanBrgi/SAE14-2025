
// Permet de detecter le scroll et d'ajouter la class "scrolled" à un élément afin de pouvoir agir dessus uniquement quand je scroll

(function() {
    const selectors = [
        'header',
        'nav', 
        'main',
        'footer'
    ];
    
    const align = document.getElementById('alignement');
    const threshold = align ? Math.max(40, Math.round(align.offsetHeight / 2)) : 50;
    
    window.addEventListener('scroll', () => {
        const y = window.scrollY || window.pageYOffset;
        
        selectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                if (y > threshold) {
                    element.classList.add('scrolled');
                } else {
                    element.classList.remove('scrolled');
                }
            });
        });
    }, { passive: true });
})();
