// Girigreen Driving School – JavaScript Interactions
document.addEventListener("DOMContentLoaded", () => {
    console.log("Girigreen Driving School loaded.");
  
    // Newsletter Form Logic
    const form = document.getElementById("newsletter-form");
    const emailInput = document.getElementById("email-input");
    const message = document.getElementById("newsletter-msg");
  
    if (form && emailInput && message) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();
  
        if (email) {
          message.textContent = "Thank you for subscribing!";
          message.classList.remove("hidden");
          message.classList.add("text-green-100");
          emailInput.value = "";
        } else {
          message.textContent = "Please enter a valid email.";
          message.classList.remove("hidden");
          message.classList.add("text-red-200");
        }
      });
    }
  
    // Reveal-on-scroll animations using Intersection Observer
    const revealElements = document.querySelectorAll(".reveal-on-scroll");
  
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );
  
    revealElements.forEach((el) => {
      el.classList.add("opacity-0", "translate-y-8", "transition", "duration-700", "ease-out");
      observer.observe(el);
    });
  });
  