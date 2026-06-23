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
  const fileSizeLimit = 25 * 1024 * 1024;
  const totalFileSizeLimit = 100 * 1024 * 1024;

  const submitWithFormspreeCaptcha = () => {
    HTMLFormElement.prototype.submit.call(form);
  };

  const getSelectedFiles = () => {
    return Array.from(form.querySelectorAll('input[type="file"]')).flatMap(
      (input) => Array.from(input.files || [])
    );
  };

  const selectedFileError = () => {
    const files = getSelectedFiles();
    const oversized = files.find((file) => file.size > fileSizeLimit);
    const totalSize = files.reduce((total, file) => total + file.size, 0);
    if (oversized) {
      return "Each photo must be 25 MB or smaller.";
    }
    if (files.length > 10 || totalSize > totalFileSizeLimit) {
      return "Upload up to 10 photos, 100 MB total.";
    }
    return "";
  };

  const readFormspreeError = async (res) => {
    try {
      const data = await res.json();
      if (data.error) return data.error;
      if (Array.isArray(data.errors)) {
        return data.errors.map((error) => error.message).join(" ");
      }
    } catch (err) {
      try {
        return await res.text();
      } catch (textErr) {
        return "";
      }
    }
    return "";
  };

  const needsHostedCaptcha = (status, message) => {
    return (
      (status === 401 || status === 403) &&
      /captcha|recaptcha|custom key/i.test(message)
    );
  };

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

    const fileError = selectedFileError();
    if (fileError) {
      status.textContent = fileError;
      status.className = "form-status error";
      return;
    }

    btn.textContent = "Sending...";
    btn.disabled = true;
    status.textContent = "";
    status.className = "form-status";

    if (getSelectedFiles().length > 0) {
      btn.textContent = "Opening secure photo upload...";
      status.textContent = "Opening secure photo upload...";
      submitWithFormspreeCaptcha();
      return;
    }

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
        const message = await readFormspreeError(res);
        if (needsHostedCaptcha(res.status, message)) {
          status.textContent = "Opening secure spam check...";
          status.className = "form-status";
          submitWithFormspreeCaptcha();
          return;
        }
        throw new Error(message || "Server error");
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
