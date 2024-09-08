document.addEventListener('DOMContentLoaded', function () {
    var generateResumeBtn = document.getElementById('generateResumeBtn');
    var resetBtn = document.getElementById('resetBtn');
    generateResumeBtn.addEventListener('click', generateResume);
    resetBtn.addEventListener('click', resetForm);
    function generateResume() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var education = document.getElementById('education').value;
        var skills = document.getElementById('skills').value.split(',');
        if (name && email && education && skills.length > 0) {
            var resumeOutput = document.getElementById('resumeOutput');
            resumeOutput.innerHTML = "\n              <h3>".concat(name, "</h3>\n              <p><strong>Email:</strong> ").concat(email, "</p>\n              <p><strong>Education:</strong> ").concat(education, "</p>\n              <p><strong>Skills:</strong> ").concat(skills.join(', '), "</p>\n          ");
        }
        else {
            alert('Please fill in all fields.');
        }
    }
    function resetForm() {
        document.getElementById('resumeForm').reset();
        var resumeOutput = document.getElementById('resumeOutput');
        resumeOutput.innerHTML = '';
    }
});
