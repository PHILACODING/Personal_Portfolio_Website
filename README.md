# Philacoding Developer Platform

My developer platform, built with **HTML5, CSS3, and JavaScript**.

The website showcases my background, technical skills, software development work, data-related interests, projects, education, experience, services, and contact information.

The project is part of my ongoing journey to develop practical skills in **software development, data engineering, data analysis, and modern web technologies**.

---

## 🌐 Live Website

**Portfolio Website:**
https://philacoding.github.io/Philacoding-Developer-Platiform/

**GitHub Repository:**
https://github.com/PHILACODING/Philacoding-Developer-Platiform

---

## 📋 About the Project

This repository contains the source code for my personal developer portfolio.

The website is built using core web technologies rather than a large frontend framework. This allows me to understand and maintain the fundamental building blocks of a web application, including:

* HTML structure
* CSS styling
* Responsive layouts
* JavaScript functionality
* Form handling
* External service integration
* Git and GitHub workflows
* Static website deployment

The portfolio is continuously updated as I develop new technical skills and complete new projects.

---

## 🛠️ Technologies

The project currently uses:

* **HTML5** – Website structure and content
* **CSS3** – Styling, layout, responsiveness, and UI design
* **JavaScript** – Interactive functionality and form submission
* **Google Apps Script** – Server-side processing of contact form submissions
* **Google Sheets** – Storage for contact form messages
* **Git** – Version control
* **GitHub** – Source code management
* **GitHub Pages** – Website hosting and deployment

---

## 📁 Project Structure

```text
Personal_Portfolio_Website/
│
├── photos/
│   └── Website images and portfolio assets
│
├── index.html
│
├── my_css.css
│
├── my_js.js
│
├── FP_Msomi_CV_.pdf
│
└── README.md
```

### Main Files

**`index.html`**

Contains the main structure and content of the portfolio website.

**`my_css.css`**

Contains the website styling, layout, responsive design, navigation, buttons, cards, sections, and other visual components.

**`my_js.js`**

Contains the website's JavaScript functionality, including:

* About-section tab switching
* Mobile navigation menu
* Contact form submission
* Google Apps Script integration
* Form success and error messages
* Form reset functionality

**`FP_Msomi_CV_.pdf`**

My downloadable CV/resume available from the portfolio website.

**`README.md`**

Project documentation.

---

## ✨ Website Sections

The portfolio currently contains:

* 🏠 Home
* 👤 About
* 🛠️ Skills
* 💼 Experience
* 🎓 Education
* 💻 Services
* 📂 Projects / Portfolio
* 📞 Contact
* 📄 CV download

---

# 📩 Contact Form

The website includes a functional contact form.

Visitors can submit:

* Name
* Email address
* Message

The form does **not** require a traditional database or a custom backend server.

Instead, the website uses **JavaScript, Google Apps Script, and Google Sheets** to process and store submissions.

---

## 🔄 Contact Form Architecture

The contact form follows this workflow:

```text
Visitor
   │
   │ Completes Contact Form
   ▼
index.html
   │
   ▼
JavaScript (my_js.js)
   │
   │ HTTP POST request
   ▼
Google Apps Script
   │
   ▼
Google Sheets
   │
   ▼
Message Stored in Sheet1
```

### How It Works

1. A visitor enters their **name, email address, and message**.
2. The form submission is intercepted by JavaScript.
3. JavaScript prevents the browser from performing a normal page reload.
4. JavaScript creates a `FormData` object containing the submitted information.
5. The data is sent using an HTTP `POST` request.
6. The request is received by a **Google Apps Script web application**.
7. Google Apps Script processes the submitted parameters.
8. The script opens the connected Google Spreadsheet.
9. The information is written to **Sheet1**.
10. The visitor receives a confirmation message on the website.

After a successful submission, the website displays:

> Thank you for contacting Philacoding. We will get back to you.

---

## 📊 Google Sheets Integration

Google Sheets is currently used as the lightweight storage system for contact form submissions.

The spreadsheet contains columns for:

```text
Name | email | Message
```

Each successful contact form submission creates a new row in the spreadsheet.

This provides a simple way to receive and store messages without building a dedicated database and backend application for the portfolio.

The Google Spreadsheet is **not stored inside this GitHub repository**.

Sensitive configuration information such as the spreadsheet ID and Apps Script deployment URL should also not be documented publicly in the repository unless intentionally made public.

---

## ⚙️ Google Apps Script

Google Apps Script acts as the server-side layer between the website and Google Sheets.

The basic process is:

```text
Website
   ↓
JavaScript fetch()
   ↓
Google Apps Script Web App
   ↓
Google Spreadsheet
   ↓
Sheet1
```

The Apps Script receives the submitted form parameters and adds them to the next available row in the spreadsheet.

This allows the portfolio to remain a static website hosted on GitHub Pages while still having a functional contact form.

---

## 🧪 Testing the Contact Form Locally

The website can be tested locally using Python's built-in HTTP server.

From the project directory:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

The contact form can then be tested from the local website.

A successful submission should:

1. Display the sending message.
2. Submit the form data to Google Apps Script.
3. Store the message in Google Sheets.
4. Display the confirmation message.
5. Reset the contact form.

---

## 🚀 Running the Website Locally

Clone the repository:

```bash
git clone https://github.com/PHILACODING/Philacoding-Developer-Platiform.git
```

Move into the project directory:

```bash
cd Philacoding-Developer-Platiform
```

Start a local development server:

```bash
python -m http.server 8000
```

Open the website in a browser:

```text
http://localhost:8000
```

The project can also be opened in **Visual Studio Code** and run using a local development extension such as Live Server.

---

# 🌍 Deployment

The website is deployed using **GitHub Pages**.

The `master` branch is currently used as the publishing source, with the website files located in the repository root.

The deployment workflow is:

```text
Local Computer
      │
      ▼
Website Development
      │
      ▼
Git
      │
      ▼
GitHub Repository
      │
      ▼
GitHub Pages
      │
      ▼
Live Portfolio Website
```

The live website is available at:

https://philacoding.github.io/Philacoding-Developer-Platiform/

---

# 🔄 Git Development Workflow

Changes are developed locally and tracked using Git.

Typical workflow:

```bash
git status
```

Review changes:

```bash
git diff
```

Add changes:

```bash
git add .
```

Commit changes:

```bash
git commit -m "Update portfolio website"
```

Push changes to GitHub:

```bash
git push origin master
```

GitHub Pages then publishes the updated website.

---

# 🎯 Project Goals

The main goals of this project are to:

* Maintain a professional developer portfolio
* Showcase software development projects
* Demonstrate practical HTML, CSS, and JavaScript skills
* Demonstrate integration with external services
* Build and maintain a functional contact form
* Practice Git and GitHub workflows
* Develop experience with web deployment
* Document my software engineering journey
* Showcase data engineering and data-related projects
* Continuously improve my technical skills

---

# 📌 Current Functionality

The portfolio currently supports:

* Responsive website navigation
* Mobile navigation menu
* About-section tabs
* Skills section
* Education section
* Experience section
* Services section
* Portfolio/project section
* CV download
* Contact form
* Google Apps Script integration
* Google Sheets message storage
* Contact form success message
* Contact form error handling
* GitHub Pages deployment

---

# 🔮 Future Improvements

Future improvements may include:

* Further modernising the user interface
* Improving responsive design
* Improving accessibility
* Improving website performance
* Adding more software development projects
* Adding more data engineering projects
* Adding stronger project descriptions
* Adding links to project source code
* Adding links to live applications
* Improving the contact form
* Adding additional JavaScript functionality
* Adding project filtering
* Improving animations and interactions
* Adding a dedicated project details page
* Further improving SEO

---

# 👨‍💻 Author

**Philani PH Msomi**

Software Developer
South Africa

**GitHub:**
https://github.com/PHILACODING

**Portfolio:**
https://philacoding.github.io/Philacoding-Developer-Platiform/

---

## 📈 Project Status

This portfolio is an **active project** and will continue to evolve as I build new software, data engineering, data analysis, and machine learning projects.

The objective is not only to showcase completed work, but also to demonstrate my ability to **build, test, document, deploy, and continuously improve software projects**.

---

⭐ If you find the project useful or interesting, feel free to explore the repository and follow my development journey.

---
