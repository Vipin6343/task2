function startCourse() {
    let course = document.getElementById("courseSelect").value;
    let message = document.getElementById("message");
    let progressBar = document.getElementById("progressBar");
    let courseDetails = document.getElementById("courseDetails");
    let courseInfo = document.getElementById("courseInfo");
    let certificateButton = document.getElementById("certificateButton");
    
    if (course) {
        message.innerHTML = `You have selected <strong>${course}</strong>. Please complete all quizzes and score at least 70% to earn your certificate!`;
        message.classList.add("success");
        progressBar.classList.remove("hidden");
        courseDetails.classList.remove("hidden");
        courseInfo.innerText = `Course: ${course}\nLevel: Advanced\nCategory: Digital`;
        simulateProgress();
    } else {
        message.innerHTML = "Please select a course first.";
        message.classList.remove("success");
        progressBar.classList.add("hidden");
        courseDetails.classList.add("hidden");
        certificateButton.classList.add("hidden");
    }
}

function simulateProgress() {
    let progress = document.getElementById("progress");
    let progressText = document.getElementById("progressText");
    let completionMessage = document.getElementById("completionMessage");
    let certificateButton = document.getElementById("certificateButton");
    let width = 0;
    let interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            //completionMessage.innerText = "Course Completed! Download your certificate.";//
            alert("Course Completed! Download your certificate.");
            certificateButton.classList.remove("hidden");
        } else {
            width += 10;
            progress.style.width = width + "%";
            progressText.innerText = width + "%";
        }
    }, 500);
}

document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
