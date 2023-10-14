document.addEventListener("DOMContentLoaded", function() {
    const yearElement = document.getElementById("currentYear");
    yearElement.textContent = new Date().getFullYear();
});
