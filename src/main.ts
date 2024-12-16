declare const html2pdf:any;

const form = document.getElementById("resumeForm") as HTMLFormElement;
const resumePage = document.getElementById("resume") as HTMLElement;

const resumeImage = document.getElementById("resumeImage") as HTMLImageElement;
const resumeName = document.getElementById("resumeName") as HTMLHeadingElement;
const resumeEmail = document.getElementById("resumeEmail") as HTMLParagraphElement;
const resumePhone = document.getElementById("resumePhone") as HTMLParagraphElement;

const resumeDegree = document.getElementById("resumeDegree") as HTMLParagraphElement;
const resumeInstitute = document.getElementById("resumeInstitute") as HTMLParagraphElement;
const resumeGraduation = document.getElementById("resumeGraduation") as HTMLParagraphElement;
const resumeTechSkills = document.getElementById("resumeTechSkills") as HTMLParagraphElement;
const resumeSoftSkills = document.getElementById("resumeSoftSkills") as HTMLParagraphElement;

const resumeRole = document.getElementById("resumeRole") as HTMLParagraphElement;
const resumeAchievements = document.getElementById("resumeAchievements") as HTMLParagraphElement;
const resumeCourse = document.getElementById("resumeCourse") as HTMLParagraphElement;
const resumeCoursePlatform = document.getElementById("resumeCoursePlatform") as HTMLParagraphElement;
const resumeCourseHighlights = document.getElementById("resumeCourseHighlights") as HTMLParagraphElement;
const resumeCourseCompletion = document.getElementById("resumeCourseCompletion") as HTMLParagraphElement;

const resumeJob = document.getElementById("resumeJob") as HTMLParagraphElement;
const resumeJobCompany = document.getElementById("resumeJobCompany") as HTMLParagraphElement;
const resumeJobDate = document.getElementById("resumeJobDate") as HTMLParagraphElement;
const resumeJobTasks = document.getElementById("resumeJobTasks") as HTMLParagraphElement;
const resumeJobAcheived = document.getElementById("resumeJobAcheived") as HTMLParagraphElement;
const resumeLanguage = document.getElementById("resumeLanguage") as HTMLParagraphElement;

const copyLink = document.getElementById('copyLink') as HTMLButtonElement;
const downloadButton = document.getElementById('downloadResume') as HTMLButtonElement;
const resumeContent = document.getElementById("resumeContent") as HTMLDivElement;
const mainContent = document.getElementById("main") as HTMLDivElement;




form.addEventListener("submit", async (event:Event) => {
    event.preventDefault();

    const name = (document.getElementById("username") as HTMLInputElement).value;
    const email = (document.getElementById("email")  as HTMLInputElement).value;
    const phone = (document.getElementById("phone")  as HTMLInputElement).value
    const degree = (document.getElementById("degree")  as HTMLInputElement).value;          
    const institute = (document.getElementById("institute")  as HTMLInputElement).value;
    const graduation = (document.getElementById("graduation")  as HTMLInputElement).value;
    const techSkills = (document.getElementById("techSkills")  as HTMLInputElement).value;
    const softSkills = (document.getElementById("softSkills")  as HTMLInputElement).value;
    const role = (document.getElementById("role")  as HTMLInputElement).value;
    const achievements = (document.getElementById("achievements")  as HTMLTextAreaElement).value;
    const course = (document.getElementById("course")  as HTMLInputElement).value;
    const platform = (document.getElementById("platform")  as HTMLInputElement).value;
    const highlights = (document.getElementById("highlights")  as HTMLInputElement).value;
    const completion = (document.getElementById("completion")  as HTMLInputElement).value;
    const job = (document.getElementById("job")  as HTMLInputElement).value;
    const company = (document.getElementById("company")  as HTMLInputElement).value;
    const jobDate = (document.getElementById("jobDate")  as HTMLInputElement).value;
    const tasks = (document.getElementById("tasks")  as HTMLInputElement).value;
    const roleAchieved =(document.getElementById("roleAcheived") as HTMLInputElement).value;
    const language = (document.getElementById("language")  as HTMLInputElement).value;
    const imageInput = document.getElementById("image") as HTMLInputElement;

    const imageFile = imageInput.files ? imageInput.files[0] : null;
    let imageBase64 = '';

    if (imageFile) {
        imageBase64 = await fileToBase64(imageFile);

        localStorage.setItem("resumeImage", imageBase64);
        (resumeImage as HTMLImageElement).src = imageBase64;
    }
    console.log('form submitted')
  
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
    console.log('value updated!')
    

    document.querySelector(".container")?.classList.add("hidden")
    resumePage.classList.remove("hidden");
    console.log("resume page should be visible now")

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
    })
    const uniqueUrl = `${window.location.origin}?${queryParams.toString()}`
    console.log(uniqueUrl)
    copyLink.addEventListener("click", () => {
        navigator.clipboard.writeText(uniqueUrl);
        alert("The link is copied to clipboard!")
    })

    window.history.replaceState(null, '', `${queryParams.toString()}`)
    
})

function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);

    });
}

downloadButton.addEventListener("click", () => {
    if(typeof html2pdf == "undefined"){
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
        html2canvas:{
            scale:2,
        },
        jsPDF: {
            unit: 'px', 
            format: ['1000', '1400'],
            orientation:'portrait'
        }
    }

    html2pdf()
        .from(mainContent)
        .set(resumeOptions)
        .save()
        .catch((error:Error) => {
            console.error('pdf error', error)
        })

    });
    window.addEventListener("DOMContentLoaded", () => {
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
            document.querySelector(".container")?.classList.add("hidden");
            resumePage.classList.remove("hidden");
        }
    });

    resumeImage.style.width = '150px';
    resumeImage.style.height = '150px';
    resumeImage.style.objectFit = 'cover';
    resumeImage.style.borderRadius = '100%';
    resumeImage.style.marginTop = '60px';
