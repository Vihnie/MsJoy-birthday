// MsJoy.js

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true, // whether animation should happen only once - while scrolling down
});

// Optional: Smooth scroll behavior for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Optional: Add dynamic greeting in console or alert
console.log("Happy Birthday Ms Joylyn🥰🌹From Sir BM🫂");