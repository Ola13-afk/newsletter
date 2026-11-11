const signupForm = document.querySelector("#signup-form");
const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#email-error");

function setEmailError(message) {
  emailError.textContent = message;
  emailError.classList.toggle("hidden", !message);
  emailInput.setAttribute("aria-invalid", message ? "true" : "false");
}

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!emailInput.value.trim() || !emailInput.validity.valid) {
    setEmailError("Valid email required");
    emailInput.focus();
    return;
  }

  setEmailError("");
  const email = encodeURIComponent(emailInput.value.trim());
  window.location.href = `success.html?email=${email}`;
});

emailInput.addEventListener("input", () => {
  if (emailInput.validity.valid && emailInput.value.trim()) {
    setEmailError("");
  }
});

const email = new URLSearchParams(window.location.search).get("email");
document.querySelector("#submitted-email").textContent =
  email || "your email address";
