function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function scrollToExperience() {
  document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
}

function scrollToInternship() {
  document.getElementById('internship').scrollIntoView({ behavior: 'smooth' });
}

function scrollToProject() {
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}