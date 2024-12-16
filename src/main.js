var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var form = document.getElementById("resumeForm");
var resumePage = document.getElementById("resume");
var resumeImage = document.getElementById("resumeImage");
var resumeName = document.getElementById("resumeName");
var resumeEmail = document.getElementById("resumeEmail");
var resumePhone = document.getElementById("resumePhone");
var resumeDegree = document.getElementById("resumeDegree");
var resumeInstitute = document.getElementById("resumeInstitute");
var resumeGraduation = document.getElementById("resumeGraduation");
var resumeTechSkills = document.getElementById("resumeTechSkills");
var resumeSoftSkills = document.getElementById("resumeSoftSkills");
var resumeRole = document.getElementById("resumeRole");
var resumeAchievements = document.getElementById("resumeAchievements");
var resumeCourse = document.getElementById("resumeCourse");
var resumeCoursePlatform = document.getElementById("resumeCoursePlatform");
var resumeCourseHighlights = document.getElementById("resumeCourseHighlights");
var resumeCourseCompletion = document.getElementById("resumeCourseCompletion");
var resumeJob = document.getElementById("resumeJob");
var resumeJobCompany = document.getElementById("resumeJobCompany");
var resumeJobDate = document.getElementById("resumeJobDate");
var resumeJobTasks = document.getElementById("resumeJobTasks");
var resumeJobAcheived = document.getElementById("resumeJobAcheived");
var resumeLanguage = document.getElementById("resumeLanguage");
var copyLink = document.getElementById('copyLink');
var downloadButton = document.getElementById('downloadResume');
var resumeContent = document.getElementById("resumeContent");
var mainContent = document.getElementById("main");
form.addEventListener("submit", function (event) { return __awaiter(_this, void 0, void 0, function () {
    var name, email, phone, degree, institute, graduation, techSkills, softSkills, role, achievements, course, platform, highlights, completion, job, company, jobDate, tasks, roleAchieved, language, imageInput, imageFile, imageBase64, queryParams, uniqueUrl;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                event.preventDefault();
                name = document.getElementById("username").value;
                email = document.getElementById("email").value;
                phone = document.getElementById("phone").value;
                degree = document.getElementById("degree").value;
                institute = document.getElementById("institute").value;
                graduation = document.getElementById("graduation").value;
                techSkills = document.getElementById("techSkills").value;
                softSkills = document.getElementById("softSkills").value;
                role = document.getElementById("role").value;
                achievements = document.getElementById("achievements").value;
                course = document.getElementById("course").value;
                platform = document.getElementById("platform").value;
                highlights = document.getElementById("highlights").value;
                completion = document.getElementById("completion").value;
                job = document.getElementById("job").value;
                company = document.getElementById("company").value;
                jobDate = document.getElementById("jobDate").value;
                tasks = document.getElementById("tasks").value;
                roleAchieved = document.getElementById("roleAcheived").value;
                language = document.getElementById("language").value;
                imageInput = document.getElementById("image");
                imageFile = imageInput.files ? imageInput.files[0] : null;
                imageBase64 = '';
                if (!imageFile) return [3 /*break*/, 2];
                return [4 /*yield*/, fileToBase64(imageFile)];
            case 1:
                imageBase64 = _b.sent();
                localStorage.setItem("resumeImage", imageBase64);
                resumeImage.src = imageBase64;
                _b.label = 2;
            case 2:
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
                queryParams = new URLSearchParams({
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
                uniqueUrl = "".concat(window.location.origin, "?").concat(queryParams.toString());
                console.log(uniqueUrl);
                copyLink.addEventListener("click", function () {
                    navigator.clipboard.writeText(uniqueUrl);
                    alert("The link is copied to clipboard!");
                });
                window.history.replaceState(null, '', "".concat(queryParams.toString()));
                return [2 /*return*/];
        }
    });
}); });
function fileToBase64(file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onloadend = function () { return resolve(reader.result); };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
downloadButton.addEventListener("click", function () {
    if (typeof html2pdf == "undefined") {
        alert('Error: html2pdf library is not loaded!');
        return;
    }
    var resumeOptions = {
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
        .catch(function (error) {
        console.error('pdf error', error);
    });
});
window.addEventListener("DOMContentLoaded", function () {
    var _a;
    var params = new URLSearchParams(window.location.search);
    var name = params.get('name') || '';
    var email = params.get("email") || '';
    var phone = params.get('phone') || '';
    var degree = params.get('degree') || '';
    var institute = params.get('institute') || '';
    var graduation = params.get('graduation') || '';
    var techSkills = params.get('techSkills') || '';
    var softSkills = params.get('softSkills') || '';
    var role = params.get('role') || '';
    var acheivements = params.get('acheivements') || '';
    var course = params.get('course') || '';
    var platform = params.get('platform') || '';
    var highlight = params.get('highlight') || '';
    var completion = params.get('completion') || '';
    var job = params.get('job') || '';
    var company = params.get('company') || '';
    var jobDate = params.get('jobDate') || '';
    var tasks = params.get('tasks') || '';
    var roleAcheived = params.get('roleAcheived') || '';
    var language = params.get('language') || '';
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
        var saveImage = localStorage.getItem("resumeImage");
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
