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

function redirectTo404() {
  location.href = './404.html';
}

function scrollToContacts() {
  document.getElementById('contactPopup').style.display = 'block';
}

document.getElementsByClassName('close')[0].onclick = function() {
  document.getElementById('contactPopup').style.display = 'none';
};

window.onclick = function(event) {
  if (event.target == document.getElementById('contactPopup')) {
    document.getElementById('contactPopup').style.display = 'none';
  }
};

function showPopup() {
  const popup = document.getElementById('contactPopup');
  popup.style.display = 'block';
  setTimeout(() => {
    popup.querySelector('.popup-content').classList.add('show');
  }, 10);
}

function hidePopup() {
  const popup = document.getElementById('contactPopup');
  popup.querySelector('.popup-content').classList.remove('show');
  setTimeout(() => {
    popup.style.display = 'none';
  }, 300);
}

window.onclick = function(event) {
  const popup = document.getElementById('contactPopup');
  if (event.target == popup) {
    hidePopup();
  }
};

/* Too ristrict inspect */

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && (e.shiftKey && (e.key === 'I' || e.key === 'J') || e.key === 'U') || e.key === 'F12') {
      e.preventDefault();
  }
});

