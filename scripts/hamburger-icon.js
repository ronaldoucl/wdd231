function displayNavigation() {
    const ul = document.getElementById("ul");
    const x = document.getElementById("x-symbol");
    const hamburger = document.getElementById("hamburger-symbol");

    if (ul.style.display == "none") {
        ul.style.display = "block";
        hamburger.style.display = "none";
        x.style.display = "block";
    } else {
        ul.style.display = "none";
        hamburger.style.display = "block";
        x.style.display = "none";
    }
}

function applyStylesForLargeScreen(e) {
    const ul = document.getElementById("ul");
    const x = document.getElementById("x-symbol");
    const hamburger = document.getElementById("hamburger-symbol");
    const nav = document.getElementById('nav');

    if (e.matches) {
        ul.style.display = "flex";
        hamburger.style.display = "block";
    } else {
        ul.style.display = "block";
        hamburger.style.display = "none";
        x.style.display = "block";
    }
}

const mediaQuery = window.matchMedia("(min-width: 560px)");
mediaQuery.addEventListener("change", applyStylesForLargeScreen);

applyStylesForLargeScreen(mediaQuery);

