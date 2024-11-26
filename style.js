document.addEventListener("DOMContentLoaded", function () {
  const aboutLink = document.getElementById("about-link");
  const contactLink = document.getElementById("contact-link");

  if (aboutLink && contactLink) {
    function hoverEffect(link) {
      link.addEventListener("mouseover", function () {
        link.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        link.style.backgroundColor = "#333";
      });

      link.addEventListener("mouseout", function () {
        link.style.boxShadow = ""; // Supprimer l'ombre
        link.style.backgroundColor = ""; // Supprimer l'effet de fond sombre
      });
    }

    hoverEffect(aboutLink);
    hoverEffect(contactLink);
  }

  let currentStep = 1;
  const totalSteps = 5;
  const counterElement = document.getElementById("counter");
  const etapeTextElement = document.getElementById("etape-text");

  function updateStep() {
    if (currentStep <= totalSteps) {
      counterElement.textContent = currentStep;

      switch (currentStep) {
        case 1:
          etapeTextElement.textContent = "Analyse des besoins";
          break;
        case 2:
          etapeTextElement.textContent = "Conception";
          break;
        case 3:
          etapeTextElement.textContent = "Développement";
          break;
        case 4:
          etapeTextElement.textContent = "Tests";
          break;
        case 5:
          etapeTextElement.textContent = "Déploiement";
          break;
        default:
          etapeTextElement.textContent = "";
      }

      etapeTextElement.style.display = "block";
      etapeTextElement.style.animation = "fade-in 2s forwards";

      setTimeout(() => {
        currentStep++;
        updateStep();
      }, 4000);
    }
  }

  updateStep();
});

// Initialiser EmailJS avec ta clé utilisateur
emailjs.init("2Naskx4f8oOFiEGEP"); // Remplace "your_user_id" par ta clé utilisateur EmailJS

// Sélectionner les éléments HTML
const openFormBtn = document.getElementById("open-form-btn");
const closeFormBtn = document.getElementById("close-form-btn");
const formContainer = document.getElementById("form-container");
const form = document.getElementById("contact-form");

// Afficher le formulaire quand on clique sur "Envoyer ma sélection"
openFormBtn.addEventListener("click", function () {
  formContainer.style.display = "flex"; // Afficher le formulaire
});

// Fermer le formulaire si le bouton "Annuler" est cliqué
closeFormBtn.addEventListener("click", function () {
  formContainer.style.display = "none"; // Cacher le formulaire
});

// Soumettre le formulaire
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêcher la soumission du formulaire classique

  // Collecter les valeurs des champs du formulaire
  const formData = new FormData(form);
  const userName = formData.get("user_name");
  const userEmail = formData.get("user_email");
  const userPhone = formData.get("user_phone");
  const message = formData.get("message");

  // Envoi de l'email au client (email de confirmation)
  emailjs
    .sendForm("service_e6dbbqj", "template_ds08l8r", form) // Remplace les ID par les tiens
    .then(
      function (response) {
        console.log("Succès:", response);
        alert(
          "Votre demande a été envoyée. Un designer vous contactera sous 24h."
        );
        form.reset(); // Réinitialiser le formulaire après envoi
        formContainer.style.display = "none"; // Fermer la fenêtre de formulaire
      },
      function (error) {
        console.log("Erreur:", error);
        alert(
          "Il y a eu un problème lors de l'envoi de votre demande. Veuillez réessayer."
        );
      }
    );

  // Envoi de l'email à toi (support@crazy-pineapple.com)
  emailjs
    .sendForm("service_e6dbbqj", "template_ojo6iko", form) // Remplace les ID par les tiens
    .then(
      function (response) {
        console.log("Email envoyé à support:", response);
      },
      function (error) {
        console.log("Erreur en envoyant l'email à support:", error);
      }
    );
});

// ----------------------------
document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll(".project");
  const prevButton = document.getElementById("prev-btn");
  const nextButton = document.getElementById("next-btn");

  let currentIndex = 0; // Indice du projet actuellement visible

  // Fonction pour mettre à jour la visibilité des projets
  function updateProjectVisibility() {
    // Masquer tous les projets
    projects.forEach((project, index) => {
      project.classList.remove("active");
      if (index === currentIndex) {
        project.classList.add("active");
      }
    });

    // Mise à jour de l'état des boutons "Précédent" et "Suivant"
    prevButton.disabled = currentIndex === 0; // Désactiver le bouton "Précédent" si on est au premier projet
    nextButton.disabled = currentIndex === projects.length - 1; // Désactiver le bouton "Suivant" si on est au dernier projet
  }

  // Ajouter des événements de clic pour les boutons de navigation
  prevButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateProjectVisibility();
    }
  });

  nextButton.addEventListener("click", function () {
    if (currentIndex < projects.length - 1) {
      currentIndex++;
      updateProjectVisibility();
    }
  });

  // Initialiser l'affichage des projets au chargement de la page
  updateProjectVisibility();
});
