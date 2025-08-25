import React from 'react'

function Dropdonw() {
     const [color, setColor] = useState("red");
  return (
    <div>
        <select name="color" id="color" value={color} onChange={(e) => setColor(e.target.value)}>
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
    </select>
      <Watch color={color} />
    </div>
  )
}

export default Dropdonw





























// // Bina Practical Expriecne ke sath ats scrore 73
// % ---------------------- Document Class & Packages ----------------------
// \documentclass[10pt, letterpaper]{article}

// \usepackage[
//     top=1cm,
//     bottom=1cm,
//     left=1.1cm,
//     right=1.1cm
// ]{geometry}
// \usepackage{titlesec}
// \usepackage{enumitem}
// \usepackage[dvipsnames]{xcolor}
// \usepackage{hyperref}
// \usepackage{changepage}
// \usepackage{iftex}

// \ifPDFTeX
//   \usepackage[T1]{fontenc}
//   \usepackage[utf8]{inputenc}
//   \usepackage{lmodern}
// \fi

// \usepackage{charter}
// \pagestyle{empty}
// \setlength{\parindent}{0pt}
// \setlength{\columnsep}{0.2cm}

// \hypersetup{
//     colorlinks=true,
//     urlcolor={[HTML]{8055A2}}
// }

// % ---------------------- Section Styling ----------------------
// \titleformat{\section}{\color[HTML]{8055A2}\bfseries\large}{}{0pt}{}[\vspace{2pt}]
// \titlespacing{\section}{0pt}{4pt}{2pt}

// \newcommand{\SectionBreak}{
//     \vspace{0.3cm}
//     \hrule height 0.4pt
//     \vspace{0.3cm}
// }

// \newenvironment{onecolentry}{
//   \begin{adjustwidth}{0pt}{0pt}
//   \setlength{\parskip}{2pt}
// }{
//   \end{adjustwidth}
// }

// \newenvironment{header}{
//     \setlength{\topsep}{0pt}\par\kern\topsep\centering\linespread{1.3}
// }{
//     \par\kern\topsep
// }

// % ---------------------- Document Start ----------------------
// \begin{document}

// % ---------------------- Header ----------------------
// \begin{header}
//     \fontsize{25 pt}{25 pt}\selectfont Tausif Qureshi

//     \vspace{6pt}

//     \normalsize
//     Lucknow, U.P\kern 6pt | \kern 6pt
//     \href{mailto:tausifqureshi504@gmail.com}{tausifqureshi504@gmail.com} \kern 6pt | \kern 6pt
//     \href{tel:+91-8429097693}{+91-8429097693} \kern 6pt | \kern 6pt
//     \href{https://tausifporfolio-website.netlify.app/}{Portfolio} \kern 6pt | \kern 6pt
//     \href{https://www.linkedin.com/in/tausif-qureshi/}{LinkedIn} \kern 6pt | \kern 6pt
//     \href{https://github.com/Tausifqureshi}{GitHub}
// \end{header}

// \vspace{0.3cm}
// \hrule height 0.5pt
// \vspace{0.4cm}

// % ---------------------- Professional Summary ----------------------
// \section{Professional Summary}
// \begin{onecolentry}
// Aspiring Front-End Developer with hands-on experience in building responsive, accessible, and dynamic web applications using React.js, JavaScript, and modern UI frameworks. Strong foundation in RESTful API integration, component-driven development, and performance optimization. Passionate about clean code, usability, and continuous learning in Agile workflows.
// \end{onecolentry}
// \SectionBreak

// % ---------------------- Technical Skills ----------------------
// \section{Technical Skills}
// \begin{onecolentry}
// \textbf{Languages:} HTML5, CSS3, JavaScript (ES6+) \\
// \textbf{Libraries/Frameworks:} React.js, Redux, React Router, Tailwind CSS, Bootstrap, Material-UI \\
// \textbf{Tools:} Git, GitHub, VS Code, Firebase, Postman, Chrome DevTools \\
// \textbf{Concepts:} REST API, Responsive Design, Component-driven Development, Agile Methodology
// \end{onecolentry}
// \SectionBreak

// % ---------------------- Education ----------------------
// \section{Education}
// \begin{onecolentry}

// \textbf{React Development} \hfill Sept 2024 \\
// Codeprog – Online Bootcamp

// \vspace{6pt}
// \textbf{Front-End Web Development} \hfill Dec 2022 -- June 2023 \\
// Hanumant Technology Software Training Institute, Lucknow

// \vspace{6pt}
// \textbf{Bachelor of Computer Applications (BCA)} \hfill July 2017 -- June 2020 \\
// Institute of Management and Engineering, New Delhi

// \vspace{6pt}
// \textbf{Higher Secondary (12th)} \hfill May 2014 -- June 2016 \\
// AL-Hind Distance Education Academy, Laxmi Nagar, New Delhi

// \end{onecolentry}

// \SectionBreak

// % ---------------------- Projects ----------------------
// \section{Projects}
// \begin{onecolentry}
// \textbf{StoreFusion-Digital} \hfill 
// \href{https://github.com/Tausifqureshi/StoreFusion-Digital}{GitHub} |
// \href{https://storefusion-digital.netlify.app/}{Live} \\
// E-commerce platform for digital product sales.
// \begin{itemize}[left=10pt, topsep=0pt, noitemsep]
//   \item Developed responsive SPA using React.js, Redux, and React Router
//   \item Integrated Firebase authentication, product management, and secure checkout
//   \item Applied Agile methodology and Git/GitHub version control
// \end{itemize}
// \textbf{Tech Stack:} React, Firebase, Tailwind CSS, Material-UI

// \vspace{6pt}
// \textbf{Udemy Clone} \hfill 
// \href{https://github.com/Tausifqureshi/Udemy-Clone}{GitHub} |
// \href{https://65d3989f42b0a515514a520e--polite-palmier-e23c7f.netlify.app/}{Live} \\
// Online course platform replicating key Udemy features.
// \begin{itemize}[left=10pt, topsep=0pt, noitemsep]
//   \item Built dynamic course list with search, filtering, and cart functionality
//   \item Implemented Redux for global state management and React Router for navigation
//   \item Optimized component structure to reduce re-rendering and improve performance
// \end{itemize}
// \textbf{Tech Stack:} React, Redux, HTML, CSS, JavaScript

// \vspace{6pt}
// \textbf{Rodan+Fields Clone} \hfill 
// \href{https://github.com/Tausifqureshi/RodanAndFields_clone}{GitHub} |
// \href{https://rodanfieldwebsite.netlify.app/home.html}{Live} \\
// Beauty product website clone for UI/UX practice.
// \begin{itemize}[left=10pt, topsep=0pt, noitemsep]
//   \item Implemented LocalStorage cart system and simulated login
//   \item Ensured semantic HTML and cross-browser compatibility
//   \item Optimized for mobile responsiveness and performance
// \end{itemize}
// \textbf{Tech Stack:} HTML, CSS, JavaScript, LocalStorage
// \end{onecolentry}
// \SectionBreak

// % ---------------------- Soft Skills ----------------------
// \section{Soft Skills}
// \begin{onecolentry}
// Communication, Team Collaboration, Adaptability, Time Management, Attention to Detail, Problem Solving
// \end{onecolentry}

// \end{document}


























// ATS Tip
// Adding this job's company name and web address can help us provide you ATS-specific tips.
// Update scan information
// Contact Information
// We did not find an address in your resume. Recruiters use your address to validate your location for job matches.
// You provided your email. Recruiters use your email to contact you for job matches.
// You provided your phone number.
// Summary
// We found a summary section on your resume. Good job! The summary provides a quick overview of the candidate's qualifications, helping recruiters and hiring managers promptly grasp the value the candidate can offer in the position.
// Section Headings
// We found the education section in your resume.
// We found the work experience section in your resume.
// Your Work Experience section appears empty. We recommend that this section should showcase at least one listing, even if it is just an internship or a personal project.
// Job Title Match
// The job title 'React.js Developer' from the job description was not found in your resume. We recommend having the exact title of the job for which you're applying in your resume. This ensures you'll be found when a recruiter searches by job title. If you haven't held this position before, include it as part of your summary statement.
// Update scan information
// Date Formatting
// ATS and recruiters prefer specific date formatting for your work experience. Please use the following formats: “MM/YY or MM/YYYY or Month YYYY” (e.g. 03/19, 03/2019, Mar 2019 or March 2019).
// Education Match
// Your education matches the preferred (Bachelor) education listed in the job description.
// Update required education level
// File Type
// You are using a .pdf resume, which is the preferred format for most ATS systems.
// Your file name doesn't contain special characters that could cause an error in ATS.
// Your file name is concise and readable.


// Skill 
// Resume
// Job Description
// javascript
// 4
// 3
// coding
// 3
// 3
// performance testing
// 2
// Upgrade to view
// 2
// Upgrade to view
// 2
// redux
// 4
// 2
// project management skills
// 1
// information technology
// 1
// Front-end development
// 1
// user interface design
// 1
// Don't see skills from the job description? 


// Skill 
// Resume
// Job Description
// troubleshooting
// 2
// Management Skills
// 1
// Don't see skills from the job description? 
// Job Level Match
// No specific years of experience were found in this job description. Focus on matching your skills and qualifications to the role's requirements. Consider how your experience, regardless of duration, aligns with the job's key responsibilities before applying.
// Measurable Results
// We found 1 mentions of measurable results in your resume. Consider adding at least 5 specific achievements or impact you had in your job (e.g. time saved, increase in sales, etc).
// Resume Tone
// We've found some negative phrases or cliches in your resume:
// Web Presence
// Consider adding a website or Linkedin url to build your web credibility. Recruiters appreciate the convenience and credibility associated with a professional website.
// Word Count
// There are 306 words in your resume, which is under the suggested 1000 word count for relevance and ease of reading reasons.
// Formatting analysis is unavailable for PDF files. To receive tailored recommendations, please upload your resume in .docx format. In the meantime, here are some general tips to ensure your resume is easily read by the ATS, Recruiters and Hiring Managers.
// Font check
// We recommend using bold styling for job titles, company names, and your name to help improve readability.
// Ensure your resume text is a readable color, with adequate contrast to the document background.
// Your resume should contain only 1 or 2 font faces to maintain readability.
// We recommend standard fonts such as Open Sans, Roboto, or Lato for readability and ATS-compatibility.
// The average font size of your resume should meet readability and ATS standards.
// Do not overuse special characters in your resume. These characters can cause errors in ATS and make your resume look less professional.
// Layout
// Avoid embedding images in your resume if you’re applying to jobs within North America. Some ATS cannot read images and might cause formatting errors.
// Avoid using tables in your resume. Some ATS might not be able to correctly parse tables. Text can be out of order or combined into one text blob.
// We recommend using left align for text sections as it enhances readability for a recruiter. Text justify is not recommended because some ATS’s can’t detect spaces between justified text blocks.
// Page Setup
// Avoid adding information to the footer of your resume document. Some ATS can’t accurately parse headers or footers, which could affect your formatting or searchability.
// Avoid adding information to the header of your resume document. Some ATS can’t accurately parse headers or footers,which could affect yourformatting or searchability.
// The margins on your resume should be of a consistent and standard size. We recommend margins between 0.5 and 1 inch for ease of reading.
// Ensure your resume fits within standard A4 or Letter page size to maintain compatibility across different platforms and devices.