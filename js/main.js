// Mobile menu toggle
const toggle = document.querySelector(".mobile-toggle");
const nav = document.querySelector(".main-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });

  // Close menu on link click
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Update copyright year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Contact form handling
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const status = document.getElementById("formStatus");
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;

    // Honeypot check
    const honeypot = document.getElementById("website");
    if (honeypot && honeypot.value) {
      status.textContent = "Submission blocked.";
      status.className = "form-status error";
      return;
    }

    btn.textContent = "Sending...";
    btn.disabled = true;
    status.textContent = "";
    status.className = "form-status";

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });
      if (res.ok) {
        status.textContent =
          "Thanks! We received your message and will call you within 1 business hour.";
        status.className = "form-status success";
        form.reset();
      } else {
        throw new Error("Server error");
      }
    } catch (err) {
      status.textContent =
        "Something went wrong. Please call us at (346) 471-5322.";
      status.className = "form-status error";
    } finally {
      btn.textContent = originalText;
      btn.disabled = false;
    }
  });
}
