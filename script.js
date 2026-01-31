/* ===============================
   SCROLL REVEAL ANIMATION
================================ */
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const trigger = window.innerHeight / 1.2;

    if (sectionTop < trigger) {
      section.classList.add('active');
    }
  });
});


/* ===============================
   CONTACT FORM TOGGLE
================================ */
const toggleBtn = document.getElementById("showFormBtn");
const contactForm = document.getElementById("contactForm");

if (toggleBtn && contactForm) {
  toggleBtn.addEventListener("click", () => {
    contactForm.classList.toggle("show");
    contactForm.classList.toggle("hidden");

    toggleBtn.innerText =
      contactForm.classList.contains("show")
        ? "Close Form"
        : "Contact Me";
  });
}


/* ===============================
   CONTACT FORM SUBMISSION STATUS
================================ */
const form = document.getElementById("contact-form");
const statusMsg = document.getElementById("form-status");

if (form && statusMsg) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Sending state
    statusMsg.className = "sending";
    statusMsg.innerText = "Sending message... ⏳";

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      this
    ).then(() => {

      // Success state
      statusMsg.className = "success";
      statusMsg.innerText = "Message sent successfully ✅";

      form.reset();

      // Auto hide message
      setTimeout(() => {
        statusMsg.style.opacity = "0";
      }, 4000);

    }).catch(() => {

      // Error state
      statusMsg.className = "error";
      statusMsg.innerText = "Failed to send message ❌ Please try again.";

    });
  });
}
