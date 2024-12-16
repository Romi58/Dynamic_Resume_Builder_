"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const form = document.getElementById("resumeForm");
const resumePage = document.getElementById("resume");
const resumeImage = document.getElementById("resumeImage");
const resumeName = document.getElementById("resumeName");
const resumeEmail = document.getElementById("resumeEmail");
const resumePhone = document.getElementById("resumePhone");
const resumeDegree = document.getElementById("resumeDegree");
const resumeInstitute = document.getElementById("resumeInstitute");
const resumeGraduation = document.getElementById("resumeGraduation");
const resumeTechSkills = document.getElementById("resumeTechSkills");
const resumeSoftSkills = document.getElementById("resumeSoftSkills");
const resumeRole = document.getElementById("resumeRole");
const resumeAchievements = document.getElementById("resumeAchievements");
const resumeCourse = document.getElementById("resumeCourse");
const resumeCoursePlatform = document.getElementById("resumeCoursePlatform");
const resumeCourseHighlights = document.getElementById("resumeCourseHighlights");
const resumeCourseCompletion = document.getElementById("resumeCourseCompletion");
const resumeJob = document.getElementById("resumeJob");
const resumeJobCompany = document.getElementById("resumeJobCompany");
const resumeJobDate = document.getElementById("resumeJobDate");
const resumeJobTasks = document.getElementById("resumeJobTasks");
const resumeJobAcheived = document.getElementById("resumeJobAcheived");
const resumeLanguage = document.getElementById("resumeLanguage");
const copyLink = document.getElementById('copyLink');
const downloadButton = document.getElementById('downloadResume');
const resumeContent = document.getElementById("resumeContent");
const mainContent = document.getElementById("main");
form.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    event.preventDefault();
    const name = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const degree = document.getElementById("degree").value;
    const institute = document.getElementById("institute").value;
    const graduation = document.getElementById("graduation").value;
    const techSkills = document.getElementById("techSkills").value;
    const softSkills = document.getElementById("softSkills").value;
    const role = document.getElementById("role").value;
    const achievements = document.getElementById("achievements").value;
    const course = document.getElementById("course").value;
    const platform = document.getElementById("platform").value;
    const highlights = document.getElementById("highlights").value;
    const completion = document.getElementById("completion").value;
    const job = document.getElementById("job").value;
    const company = document.getElementById("company").value;
    const jobDate = document.getElementById("jobDate").value;
    const tasks = document.getElementById("tasks").value;
    const roleAchieved = document.getElementById("roleAcheived").value;
    const language = document.getElementById("language").value;
    const imageInput = document.getElementById("image");
    const imageFile = imageInput.files ? imageInput.files[0] : null;
    let imageBase64 = '';
    if (imageFile) {
        imageBase64 = yield fileToBase64(imageFile);
        localStorage.setItem("resumeImage", imageBase64);
        resumeImage.src = imageBase64;
    }
    console.log('form submitted');
    resumeName.textContent = name;
    resumeEmail.textContent = email;
    resumePhone.textContent = phone;
    resumeDegree.textContent = degree;
    resumeInstitute.textContent = institute;
    resumeGraduation.textContent = graduation;
    resumeTechSkills.textContent = techSkills;
    resumeSoftSkills.textContent = softSkills;
    resumeRole.textContent = role;
    resumeAchievements.textContent = achievements;
    resumeCourse.textContent = course;
    resumeCoursePlatform.textContent = platform;
    resumeCourseHighlights.textContent = highlights;
    resumeCourseCompletion.textContent = completion;
    resumeJob.textContent = job;
    resumeJobCompany.textContent = company;
    resumeJobDate.textContent = jobDate;
    resumeJobTasks.textContent = tasks;
    resumeJobAcheived.textContent = roleAchieved;
    resumeLanguage.textContent = language;
    console.log('value updated!');
    (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
    resumePage.classList.remove("hidden");
    console.log("resume page should be visible now");
    const queryParams = new URLSearchParams({
        name: name,
        email: email,
        phone: phone,
        degree: degree,
        institute: institute,
        graduation: graduation,
        techSkills: techSkills,
        softSkills: softSkills,
        role: role,
        acheivements: achievements,
        course: course,
        platform: platform,
        highlight: highlights,
        completion: completion,
        job: job,
        company: company,
        jobDate: jobDate,
        tasks: tasks,
        roleAcheived: roleAchieved,
        language: language
    });
    const uniqueUrl = `${window.location.origin}?${queryParams.toString()}`;
    console.log(uniqueUrl);
    copyLink.addEventListener("click", () => {
        navigator.clipboard.writeText(uniqueUrl);
        alert("The link is copied to clipboard!");
    });
    window.history.replaceState(null, '', `${queryParams.toString()}`);
}));
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
downloadButton.addEventListener("click", () => {
    if (typeof html2pdf == "undefined") {
        alert('Error: html2pdf library is not loaded!');
        return;
    }
    const resumeOptions = {
        margin: 0.5,
        filename: 'resume.pdf',
        image: {
            type: 'jpeg',
            quality: 1.0
        },
        html2canvas: {
            scale: 2,
        },
        jsPDF: {
            unit: 'px',
            format: ['1000', '1400'],
            orientation: 'portrait'
        }
    };
    html2pdf()
        .from(mainContent)
        .set(resumeOptions)
        .save()
        .catch((error) => {
        console.error('pdf error', error);
    });
});
window.addEventListener("DOMContentLoaded", () => {
    var _a;
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name') || '';
    const email = params.get("email") || '';
    const phone = params.get('phone') || '';
    const degree = params.get('degree') || '';
    const institute = params.get('institute') || '';
    const graduation = params.get('graduation') || '';
    const techSkills = params.get('techSkills') || '';
    const softSkills = params.get('softSkills') || '';
    const role = params.get('role') || '';
    const acheivements = params.get('acheivements') || '';
    const course = params.get('course') || '';
    const platform = params.get('platform') || '';
    const highlight = params.get('highlight') || '';
    const completion = params.get('completion') || '';
    const job = params.get('job') || '';
    const company = params.get('company') || '';
    const jobDate = params.get('jobDate') || '';
    const tasks = params.get('tasks') || '';
    const roleAcheived = params.get('roleAcheived') || '';
    const language = params.get('language') || '';
    if (name || email || phone || degree || institute || graduation || techSkills || softSkills || role || acheivements || course || platform || highlight || completion || job || company || jobDate || tasks || roleAcheived || language) {
        resumeName.textContent = name;
        resumeEmail.textContent = email;
        resumePhone.textContent = phone;
        resumeDegree.textContent = degree;
        resumeInstitute.textContent = institute;
        resumeGraduation.textContent = graduation;
        resumeTechSkills.textContent = techSkills;
        resumeSoftSkills.textContent = softSkills;
        resumeRole.textContent = role;
        resumeAchievements.textContent = acheivements;
        resumeCourse.textContent = course;
        resumeCoursePlatform.textContent = platform;
        resumeCourseHighlights.textContent = highlight;
        resumeCourseCompletion.textContent = completion;
        resumeJob.textContent = job;
        resumeJobCompany.textContent = company;
        resumeJobDate.textContent = jobDate;
        resumeJobTasks.textContent = tasks;
        resumeJobAcheived.textContent = roleAcheived;
        resumeLanguage.textContent = language;
        const saveImage = localStorage.getItem("resumeImage");
        if (saveImage) {
            resumeImage.src = saveImage;
        }
        (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
        resumePage.classList.remove("hidden");
    }
});
resumeImage.style.width = '150px';
resumeImage.style.height = '150px';
resumeImage.style.objectFit = 'cover';
resumeImage.style.borderRadius = '100%';
resumeImage.style.marginTop = '60px';
