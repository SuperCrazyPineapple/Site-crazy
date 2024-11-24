// Sélectionner les éléments
const aboutLink = document.querySelector(".about-link");
const contactLink = document.querySelector(".contact-link");

// Fonction pour l'animation au survol
function hoverEffect(link) {
  link.addEventListener("mouseenter", () => {
    link.style.transform = "scale(1.15)"; // Grossissement
    link.style.boxShadow = "0 0 15px 5px rgba(255, 165, 0, 0.7)"; // Ombre
    link.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; // Fond plus sombre
  });

  link.addEventListener("mouseleave", () => {
    link.style.transform = "scale(1)"; // Rétablir la taille initiale
    link.style.boxShadow = ""; // Supprimer l'ombre
    link.style.backgroundColor = ""; // Supprimer l'effet de fond sombre
  });
}

// Appliquer les effets sur les deux éléments
hoverEffect(aboutLink);
hoverEffect(contactLink);

document.addEventListener("DOMContentLoaded", function () {
  let currentStep = 1;
  const totalSteps = 5;
  const counterElement = document.getElementById("counter");
  const etapeTextElement = document.getElementById("etape-text");

  function updateStep() {
    if (currentStep <= totalSteps) {
      counterElement.textContent = currentStep;

      // Change le texte en fonction du numéro de l'étape
      switch (currentStep) {
        case 1:
          etapeTextElement.textContent = "Analyse des besoins";
          break;
        case 2:
          etapeTextElement.textContent = "Conception du design";
          break;
        case 3:
          etapeTextElement.textContent = "Développement du site";
          break;
        case 4:
          etapeTextElement.textContent = "Tests et validation";
          break;
        case 5:
          etapeTextElement.textContent = "Mise en ligne";
          break;
      }

      // Appliquer les animations au texte
      etapeTextElement.style.display = "block";
      etapeTextElement.style.animation = "fade-in 2s 2s forwards";

      // Passer à l'étape suivante après 4 secondes
      setTimeout(() => {
        currentStep++;
        updateStep();
      }, 4000);
    }
  }

  // Commencer l'animation dès le chargement
  updateStep();
});
