function checkPasswordStrength() {
  const password = document.getElementById("passwordInput").value;
  const progressBar = document.getElementById("progress");
  const charCount = document.getElementById("charCount");
  const strengthMessage = document.getElementById("strengthMessage");
  const strength = document.getElementById("strength");

  const indicators = {
    lowercase: /[a-z]/.test(password),
    uppercase: /[A-Z]/.test(password),
    number: /\d/.test(password),
    symbol: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const strengthIndicators = document.querySelectorAll(".indicator");
  strengthIndicators.forEach((indicator) => (indicator.style.color = "#ccc"));

  let strengthScore = 0;
  Object.keys(indicators).forEach((key, index) => {
    if (indicators[key]) {
      document.getElementById(key).style.color = "green";
      strengthScore++;
    }
  });

  const charLength = password.length;
  charCount.textContent = `Password has ${charLength} chars`;

  let progress = 0;
  let strengthText = "Weak";
  let progressColor = "yellow";

  if (charLength > 0) progress = (charLength / 4) * 25;
  if (strengthScore === 1) progress = Math.min(progress + 20, 40);
  if (strengthScore === 2) progress = Math.min(progress + 30, 60);
  if (strengthScore === 3) progress = Math.min(progress + 50, 80);
  if (strengthScore === 4) progress = 100;

  if (progress >= 80) {
    strengthText = "Very Strong";
    progressColor = "red";
  } else if (progress >= 60) {
    strengthText = "Strong";
    progressColor = "green";
  } else if (progress >= 40) {
    strengthText = "Average";
    progressColor = "blue";
  } else if (progress > 0) {
    strengthText = "Weak";
    progressColor = "yellow";
  }

  progressBar.style.width = `${progress}%`;
  progressBar.style.backgroundColor = progressColor;

  strength.textContent = strengthText;
}
