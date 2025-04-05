// Typewriter Effect
const tagline = "Elevating Service, Achieving Perfection.";
let i = 0;
const speed = 70;

function typeWriter() {
  if (i < tagline.length) {
    document.getElementById("tagline").innerHTML += tagline.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.onload = typeWriter;

// Particles.js load
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded');
});

// Testimonial Carousel
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.remove('active');
    if (i === index) t.classList.add('active');
  });
}

setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}, 4000);
