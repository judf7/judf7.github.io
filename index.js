import { showPage } from "./navigation.js";
import { handleNavigation } from "./navigation.js";
import { modaleNavigate } from "./navigation.js";

/* gestion du titre*/
document.addEventListener("visibilitychange", function() {
  if (document.hidden) {
    document.title = "🙏Revenez sur mon Portfolio";
  } else {
    document.title = "Portfolio | Justine DI FILIPPO";
  }
});


/*animation texte*/
const texts = ["Déterminée", "Passionnée", "Adaptable", "Cool"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];

  if (isDeleting) {
    letter = currentText.slice(0, --index);
  } else {
    letter = currentText.slice(0, ++index);
  }

  document.querySelector(".typing-effect .text").textContent = letter;

  let typeSpeed = isDeleting ? 100 : 150;

  if (!isDeleting && letter.length === currentText.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && letter.length === 0) {
    isDeleting = false;
    count++;
    typeSpeed = 500;
  }

  setTimeout(type, typeSpeed);
})();

// modale

document.getElementById('project1').addEventListener("click", (e)=>{
  e.preventDefault();
  modaleNavigate("modal1")
})
document.getElementById('project2').addEventListener("click", (e)=>{
  e.preventDefault();
  modaleNavigate("modal2")
})
document.getElementById('project3').addEventListener("click", (e)=>{
  e.preventDefault();
  modaleNavigate("modal3")
})
document.getElementById('project4').addEventListener("click", (e)=>{
  e.preventDefault();
  modaleNavigate("modal4")
})

// navigation page project

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// menu burger

document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon');
  const nav = document.querySelector('.nav');
  const links = document.querySelectorAll('.nav ul li a');

  // Empêche le comportement par défaut du clic sur la checkbox
  menuIcon.addEventListener('change', (e) => {
    // Ouvre ou ferme la navigation burger
    if (menuIcon.checked) {
      nav.style.display = 'block';
    } else {
      nav.style.display = 'none';
    }
  });

  // Empêche le défilement de la page lors du clic sur le label
  document.querySelector('.nav-burger label').addEventListener('click', (e) => {
    e.preventDefault();
    // Simule le clic sur la checkbox pour ouvrir/fermer la navigation
    menuIcon.checked = !menuIcon.checked;
    if (menuIcon.checked) {
      nav.style.display = 'block';
    } else {
      nav.style.display = 'none';
    }
  });

  // Gère le clic sur les liens de la navigation pour défiler vers les sections correspondantes
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
      // Ferme la navigation burger après la sélection d'un lien
      nav.style.display = 'none';
      menuIcon.checked = false;
    });
  });
});


