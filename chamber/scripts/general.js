document.addEventListener('DOMContentLoaded', function() {
    startFooter();
});

function startFooter() {
    const currentYearElement = document.getElementById("currentyear");
    const lastModificationElement = document.getElementById("lastModified");
    const today = new Date();
    currentYearElement.innerHTML = today.getFullYear();
    lastModificationElement.innerHTML = "Last Modification: " + document.lastModified;
}