document.getElementById('age-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Show loading message
  showLoadingMessage();

  var birthYear = parseInt(document.getElementById("birth-year").value);
  var birthMonth = parseInt(document.getElementById("birth-month").value);
  var birthDay = parseInt(document.getElementById("birth-day").value);

  if (isNaN(birthYear) || isNaN(birthMonth) || isNaN(birthDay)) {
    hideLoadingMessage();
    alert("Please enter valid values for year, month, and day.");
    return;
  }

  var currentYear = new Date().getFullYear();
  if (birthYear > currentYear) {
    hideLoadingMessage();
    alert("Birth year cannot be in the future.");
    return;
  }

  var birthDate = new Date(birthYear, birthMonth - 1, birthDay);
  var currentDate = new Date();

  var ageInMilliseconds = currentDate - birthDate;
  var ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
  
  setTimeout(function() {
    hideLoadingMessage();
    document.getElementById("result").textContent = "Your age is approximately " + ageInYears + " years.";
  }, 2000); // Simulate delay for aesthetic effect
});

function showLoadingMessage() {
  var loadingModal = document.createElement("div");
  loadingModal.classList.add("loading-modal");
  loadingModal.innerHTML = '<div class="loading-message">Calculating Your Age. Please Wait...</div>';
  document.body.appendChild(loadingModal);
}

function hideLoadingMessage() {
  var loadingModal = document.querySelector(".loading-modal");
  if (loadingModal) {
    document.body.removeChild(loadingModal);
  }
}
