var resumeForm = document.getElementById("resumeForm");
var resumeContainer = document.getElementById("resumeContainer");
resumeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Get form input values
    var name = document.getElementById("name").value;
    var title = document.getElementById("title").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var github = document.getElementById("github").value;
    var portfolio = document.getElementById("portfolio").value;
    var education = document.getElementById("education").value;
    var currentYear = document.getElementById("currentYear").value;
    var skills = document.getElementById("skills").value.split(",");
    var projects = document.getElementById("projects").value.split(",");
    var achievements = document.getElementById("achievements").value.split(",");
    // Generate resume HTML content
    resumeContainer.innerHTML = "\n    <h2 class=\"resume-header\">".concat(name, "</h2>\n    <p class=\"resume-subtitle\">").concat(title, "</p>\n    \n    <div class=\"contact-info\">\n      <a href=\"").concat(github, "\" target=\"_blank\">GitHub</a> |\n      <a href=\"mailto:").concat(email, "\">").concat(email, "</a> |\n      <a href=\"tel:").concat(phone, "\">").concat(phone, "</a> |\n      <a href=\"").concat(portfolio, "\" target=\"_blank\">View Portfolio</a>\n    </div>\n\n    <div class=\"section\">\n      <h3>Education</h3>\n      <p>").concat(education, "</p>\n      <p><strong>Currently:</strong> ").concat(currentYear, "</p>\n    </div>\n\n    <div class=\"section\">\n      <h3>Skills</h3>\n      <ul>\n        ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n      </ul>\n    </div>\n\n    <div class=\"section\">\n      <h3>Projects</h3>\n      <ol>\n        ").concat(projects.map(function (project) { return "<li>".concat(project.trim(), "</li>"); }).join(''), "\n      </ol>\n    </div>\n\n    <div class=\"section\">\n      <h3>Achievements</h3>\n      <ol>\n        ").concat(achievements.map(function (achievement) { return "<li>".concat(achievement.trim(), "</li>"); }).join(''), "\n      </ol>\n    </div>\n  ");
    // Add fade-in animation when the resume is generated
    resumeContainer.style.display = "block";
    resumeContainer.classList.add("animated");
});
