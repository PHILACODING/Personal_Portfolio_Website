// Tab Switching Logic
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Mobile Side Menu Toggle
const sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

// Google Sheet Contact Form Submission Logic
const scriptURL = 'https://script.google.com/macros/s/AKfycbzr_kvkK1UK1VC5ROwHDrNImU99w7fIVh7KAZmykYKMT9AOmdX0gN6T_v0WBuBc3uv7DQ/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully! I will get back to you soon.";
            setTimeout(() => { 
                msg.innerHTML = ""; 
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});