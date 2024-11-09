var hideButton = document.getElementById("toggle-skills");
var skills = document.getElementById("skills");
hideButton.addEventListener("click", function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
