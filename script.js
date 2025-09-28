// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
  const menuHamburger = document.querySelector(".menu-hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (menuHamburger && navLinks) {
    menuHamburger.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-menu");
    });
  }

  // Gestion des interactions tactiles pour les cartes de projets
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    let isOverlayVisible = false;
    
    // Gestion du toucher
    card.addEventListener('touchstart', (e) => {
      e.preventDefault();
      isOverlayVisible = !isOverlayVisible;
      
      if (isOverlayVisible) {
        card.classList.add('touch-active');
      } else {
        card.classList.remove('touch-active');
      }
    });
    
    // Gestion du clic (pour les appareils avec souris)
    card.addEventListener('click', (e) => {
      // Vérifier si c'est un appareil tactile
      if ('ontouchstart' in window) {
        e.preventDefault();
        isOverlayVisible = !isOverlayVisible;
        
        if (isOverlayVisible) {
          card.classList.add('touch-active');
        } else {
          card.classList.remove('touch-active');
        }
      }
    });
    
    // Fermer l'overlay en cliquant ailleurs
    document.addEventListener('click', (e) => {
      if (!card.contains(e.target)) {
        card.classList.remove('touch-active');
        isOverlayVisible = false;
      }
    });
  });
});
