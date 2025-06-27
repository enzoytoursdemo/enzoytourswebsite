// Testimonials Slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 4000);

// Scroll reveal for fade/slide animations
const observers = document.querySelectorAll('.fade-in, .slide-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

observers.forEach(el => {
  appearOnScroll.observe(el);
});

// Language Switcher (placeholder behavior)
/* document.getElementById("languageSwitcher").addEventListener("change", function() {
  alert("Language switching coming soon!");
}); */

// Hamburger menu toggle
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("siteNav").classList.toggle("open");
});


// Popup promotion (example)
/* window.onload = () => {
  setTimeout(() => {
    alert("🎉 Special Deal Today! Book now and save 20%!");
  }, 5000);
}; */
