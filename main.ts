const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
const resumeContainer = document.getElementById("resumeContainer") as HTMLDivElement;

resumeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form input values
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const title = (document.getElementById("title") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const github = (document.getElementById("github") as HTMLInputElement).value;
  const portfolio = (document.getElementById("portfolio") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLInputElement).value;
  const currentYear = (document.getElementById("currentYear") as HTMLInputElement).value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value.split(",");
  const projects = (document.getElementById("projects") as HTMLInputElement).value.split(",");
  const achievements = (document.getElementById("achievements") as HTMLInputElement).value.split(",");

  // Generate resume HTML content
  resumeContainer.innerHTML = `
    <h2 class="resume-header">${name}</h2>
    <p class="resume-subtitle">${title}</p>
    
    <div class="contact-info">
      <a href="${github}" target="_blank">GitHub</a> |
      <a href="mailto:${email}">${email}</a> |
      <a href="tel:${phone}">${phone}</a> |
      <a href="${portfolio}" target="_blank">View Portfolio</a>
    </div>

    <div class="section">
      <h3>Education</h3>
      <p>${education}</p>
      <p><strong>Currently:</strong> ${currentYear}</p>
    </div>

    <div class="section">
      <h3>Skills</h3>
      <ul>
        ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
      </ul>
    </div>

    <div class="section">
      <h3>Projects</h3>
      <ol>
        ${projects.map(project => `<li>${project.trim()}</li>`).join('')}
      </ol>
    </div>

    <div class="section">
      <h3>Achievements</h3>
      <ol>
        ${achievements.map(achievement => `<li>${achievement.trim()}</li>`).join('')}
      </ol>
    </div>
  `;

  // Add fade-in animation when the resume is generated
  resumeContainer.style.display = "block";
  resumeContainer.classList.add("animated");
});
