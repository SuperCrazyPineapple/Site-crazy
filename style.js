document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll('.step'); // Sélectionne toutes les étapes
  const stepsContainer = document.querySelector('.steps-container'); // Le conteneur des étapes

  function checkVisibility() {
    // Vérifiez chaque étape pour voir si elle est visible dans la fenêtre
    steps.forEach((step, index) => {
      const rect = step.getBoundingClientRect(); // Position de l'élément dans la fenêtre
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        // Si l'étape est visible dans la fenêtre, appliquez l'animation
        step.style.animation = `step-animation 1s ease-in-out ${index + 1}s forwards`;
      }
    });
  }

  // Lors du défilement de la page, vérifiez la visibilité des étapes
  window.addEventListener('scroll', checkVisibility);

  // Vérifiez la visibilité des étapes dès que le contenu est chargé
  checkVisibility();
});






document.addEventListener("DOMContentLoaded", function () {
  const aboutLink = document.getElementById("about-link");
  const contactLink = document.getElementById("contact-link");

  if (aboutLink && contactLink) {
    // Effets de survol
    function hoverEffect(link) {
      link.addEventListener("mouseover", function () {
        link.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        link.style.backgroundColor = "#333"; // Fond sombre au survol
      });

      link.addEventListener("mouseout", function () {
        link.style.boxShadow = ""; // Enlever l'ombre
        link.style.backgroundColor = ""; // Retirer le fond sombre
      });
    }

    hoverEffect(aboutLink);
    hoverEffect(contactLink);

    // Animation de défilement vers les sections (ancrage)
    aboutLink.addEventListener("click", function (e) {
      e.preventDefault(); // Empêche le comportement par défaut
      document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
    });

    contactLink.addEventListener("click", function (e) {
      e.preventDefault(); // Empêche le comportement par défaut
      document.querySelector("#contact-section").scrollIntoView({ behavior: "smooth" });
    });
  }
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

