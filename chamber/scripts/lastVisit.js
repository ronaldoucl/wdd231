document.addEventListener("DOMContentLoaded", function() {
    const lastVisitP = document.getElementById("last-visit");
    const now = new Date();
    const lastVisit = localStorage.getItem("lastVisit");
    
    if (!lastVisit) {
        lastVisitP.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitDate = new Date(lastVisit);
        const difference = now - lastVisitDate;
        const daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
        
        if (daysDifference < 1) {
            lastVisitP.textContent = "Back so soon! Awesome!";
        } else if (daysDifference === 1) {
            lastVisitP.textContent = "You last visited 1 day ago.";
        } else {
            lastVisitP.textContent = `You last visited ${daysDifference} days ago.`;
        }
    }
    
    localStorage.setItem("lastVisit", now);
});