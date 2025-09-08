// ===============================
// Custom Form Validation
// ===============================
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stop form from submitting immediately

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("formMessage");

  let errors = [];

  // Validate username (at least 3 characters)
  if (username.length < 3) {
    errors.push("Username must be at least 3 characters long.");
  }

  // Validate email (basic regex check)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    errors.push("Please enter a valid email address.");
  }

  // Validate password (at least 6 chars, contains a number)
  const passwordPattern = /^(?=.*[0-9]).{6,}$/;
  if (!password.match(passwordPattern)) {
    errors.push("Password must be at least 6 characters long and include a number.");
  }

  // Show messages
  if (errors.length > 0) {
    message.textContent = errors.join(" ");
    message.style.color = "red";
  } else {
    message.textContent = "Form submitted successfully! 🎉";
    message.style.color = "green";
  }
});

// ===============================
// Feature 1: Theme Toggle
// ===============================
document.getElementById("themeToggle").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// ===============================
// Feature 2: Counter
// ===============================
let count = 0;
const countValue = document.getElementById("countValue");

document.getElementById("increaseBtn").addEventListener("click", function() {
  count++;
  countValue.textContent = count;
});

document.getElementById("resetBtn").addEventListener("click", function() {
  count = 0;
  countValue.textContent = count;
});
