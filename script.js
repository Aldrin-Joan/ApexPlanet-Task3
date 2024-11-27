const toggleBtn = document.getElementById('toggle-btn');
const navbarLinks = document.getElementById('navbar-links');

toggleBtn.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

function navigateTo(link) {
  window.location.href = link;
}
