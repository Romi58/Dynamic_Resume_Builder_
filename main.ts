document.addEventListener('DOMContentLoaded', () => {
  const generateResumeBtn = document.getElementById('generateResumeBtn') as HTMLButtonElement;
  const resetBtn = document.getElementById('resetBtn') as HTMLButtonElement;

  generateResumeBtn.addEventListener('click', generateResume);
  resetBtn.addEventListener('click', resetForm);

  function generateResume() {
      const name = (document.getElementById('name') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const education = (document.getElementById('education') as HTMLInputElement).value;
      const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

      if (name && email && education && skills.length > 0) {
          const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
          resumeOutput.innerHTML = `
              <h3>${name}</h3>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Education:</strong> ${education}</p>
              <p><strong>Skills:</strong> ${skills.join(', ')}</p>
          `;
      } else {
          alert('Please fill in all fields.');
      }
  }

  function resetForm() {
      (document.getElementById('resumeForm') as HTMLFormElement).reset();
      const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
      resumeOutput.innerHTML = '';
  }
});
