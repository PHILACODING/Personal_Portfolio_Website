// ============================================================
// TAB SWITCHING LOGIC
// ============================================================

const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, clickedTab) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    clickedTab.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


// ============================================================
// MOBILE SIDE MENU
// ============================================================

const sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}


// ============================================================
// GOOGLE SHEETS CONTACT FORM
// ============================================================

const scriptURL = "https://script.google.com/macros/s/AKfycbzr_kvkK1UK1VC5ROwHDrNImU99w7fIVh7KAZmykYKMT9AOmdX0gN6T_v0WBuBc3uv7DQ/exec";

const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        msg.innerHTML = "Sending message...";

        fetch(scriptURL, {
            method: "POST",
            body: new FormData(form)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Could not send the message.");
            }

            msg.innerHTML = "Thank you for contacting Philacoding. We will get back to you.";

            form.reset();

            setTimeout(() => {
                msg.innerHTML = "";
            }, 5000);
        })
        .catch(error => {
            console.error("Contact form error:", error);
            msg.innerHTML = "Sorry, your message could not be sent. Please try again.";
        });
    });
}
