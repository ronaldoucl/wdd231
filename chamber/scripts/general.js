document.addEventListener("DOMContentLoaded", function () {
  navFeature();
  startFooter();
  getCurrentWeather();
  getWeatherForecast();
});

function startFooter() {
  const currentYearElement = document.getElementById("currentyear");
  const lastModificationElement = document.getElementById("lastModified");
  const today = new Date();
  currentYearElement.innerHTML = today.getFullYear();
  lastModificationElement.innerHTML = "Last Modification: " + document.lastModified;
}

function navFeature() {
  const nav = document.getElementById("nav");
  const x = document.getElementById("x-symbol");
  const hamburger = document.getElementById("hamburger-symbol");
  const icon = document.getElementById("icon");

  icon.addEventListener("click", function (event) {
    event.preventDefault();
    if (nav.style.display == "none") {
      nav.style.display = "flex";
      x.style.display = "block";
      hamburger.style.display = "none";
    } else {
      nav.style.display = "none";
      x.style.display = "none";
      hamburger.style.display = "block";
    }
  });
}
