// Girigreen Driving School – JavaScript Interactions
document.addEventListener("DOMContentLoaded", () => {
  console.log("Girigreen Driving School loaded.");

  // Newsletter Form Logic
  const form = document.querySelector("form[action='#']");
  const emailInput = form?.querySelector("input[type='email']");
  const message = document.getElementById("newsletter-msg");

  if (form && emailInput && message) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();

      if (email && email.includes("@")) {
        message.textContent = "Thank you for subscribing!";
        message.classList.remove("hidden", "text-red-200");
        message.classList.add("text-green-100");
        emailInput.value = "";
      } else {
        message.textContent = "Please enter a valid email.";
        message.classList.remove("hidden", "text-green-100");
        message.classList.add("text-red-200");
      }
    });
  }

  // Reveal-on-scroll animations
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
    { threshold: 0.2 }
  );

  revealElements.forEach((el) => {
    el.classList.add("opacity-0", "translate-y-8", "transition", "duration-700", "ease-out");
    observer.observe(el);
  });

  // Modal preview for service cards
  const modal = document.createElement("div");
  modal.id = "image-modal";
  modal.className = "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 hidden";
  modal.innerHTML = `
    <div class="relative max-w-3xl w-full">
      <button id="close-modal" class="absolute top-4 right-4 text-white text-3xl font-bold">&times;</button>
      <img id="modal-image" src="" alt="Service Image" class="w-full max-h-[90vh] rounded-lg shadow-lg object-contain" />
    </div>
  `;
  document.body.appendChild(modal);

  window.openModal = function (el) {
    const imgSrc = el.getAttribute("data-img");
    const modalImage = document.getElementById("modal-image");
    modalImage.src = imgSrc;
    modal.classList.remove("hidden");
  };

  document.getElementById("close-modal").addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Close modal on outside click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
});
