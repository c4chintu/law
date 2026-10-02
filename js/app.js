// Download Brochure Modal
let fromconElemet = document.querySelector(".fromcon");

function showmodel() {
    if (fromconElemet) {
        fromconElemet.classList.add("showdowfro");
    }
}

function hidemodel() {
    if (fromconElemet) {
        fromconElemet.classList.remove("showdowfro");
    }
}

// Mobile Navigation Drawer Toggle & Overlay
let rightimg = document.querySelector(".rightmeadiacon");
let navOverlay = document.querySelector(".nav-overlay");

function show2imgcon() {
    if (rightimg) {
        rightimg.classList.toggle("showrightcon");
    }
    if (navOverlay) {
        navOverlay.classList.toggle("active");
    }
}

// Close mobile drawer when clicking overlay
if (navOverlay) {
    navOverlay.addEventListener("click", () => {
        if (rightimg && rightimg.classList.contains("showrightcon")) {
            rightimg.classList.remove("showrightcon");
            navOverlay.classList.remove("active");
        }
    });
}

// FAQ Accordion functionality
let allquestion = document.querySelectorAll(".questionsContner h2");

allquestion.forEach((que, index) => {
    que.addEventListener("click", () => {
        let answer = que.nextElementSibling;
        let icon = que.lastElementChild;

        if (answer) {
            answer.classList.toggle("que-show");
        }
        if (icon) {
            icon.classList.toggle("arrowrotate");
        }

        // Close all other questions except the clicked one
        allquestion.forEach((q, i) => {
            if (i !== index) {
                if (q.lastElementChild) {
                    q.lastElementChild.classList.remove("arrowrotate");
                }
                if (q.nextElementSibling) {
                    q.nextElementSibling.classList.remove("que-show");
                }
            }
        });
    });
});

// Video Modal Player functionality
let vidModal = document.querySelector(".equ-vid-main");
let vidCloseBtn = document.querySelector(".equ-vid-main .fa-xmark");
let playBtns = document.querySelectorAll(".equ-vid-div, .play-btn");

if (vidModal) {
    playBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            vidModal.style.display = "flex";
        });
    });

    if (vidCloseBtn) {
        vidCloseBtn.addEventListener("click", () => {
            vidModal.style.display = "none";
            let iframe = vidModal.querySelector("iframe");
            if (iframe) {
                let currentSrc = iframe.src;
                iframe.src = currentSrc; // Pause video by resetting source
            }
        });
    }

    vidModal.addEventListener("click", (e) => {
        if (e.target === vidModal) {
            vidModal.style.display = "none";
            let iframe = vidModal.querySelector("iframe");
            if (iframe) {
                let currentSrc = iframe.src;
                iframe.src = currentSrc;
            }
        }
    });
}
