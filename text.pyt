



% ---------------------- Document Class & Packages ----------------------
\documentclass[10pt, letterpaper]{article}

\usepackage[
    top=1cm,
    bottom=1cm,
    left=1.1cm,
    right=1.1cm
]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage[dvipsnames]{xcolor}
\usepackage{hyperref}
\usepackage{changepage}
\usepackage{iftex}

\ifPDFTeX
  \usepackage[T1]{fontenc}
  \usepackage[utf8]{inputenc}
  \usepackage{lmodern}
\fi

\usepackage{charter}
\pagestyle{empty}
\setlength{\parindent}{0pt}
\setlength{\columnsep}{0.2cm}

\hypersetup{
    colorlinks=true,
    urlcolor={[HTML]{8055A2}}
}

% ---------------------- Section Styling ----------------------
\titleformat{\section}{\color[HTML]{8055A2}\bfseries\large}{}{0pt}{}[\vspace{2pt}]
\titlespacing{\section}{0pt}{4pt}{2pt}

\newcommand{\SectionBreak}{
    \vspace{0.3cm}
    \hrule height 0.4pt
    \vspace{0.3cm}
}

\newenvironment{onecolentry}{
  \begin{adjustwidth}{0pt}{0pt}
  \setlength{\parskip}{2pt}
}{
  \end{adjustwidth}
}

\newenvironment{header}{
    \setlength{\topsep}{0pt}\par\kern\topsep\centering\linespread{1.3}
}{
    \par\kern\topsep
}

% ---------------------- Document Start ----------------------
\begin{document}

% ---------------------- Header ----------------------
\begin{header}
    \fontsize{25 pt}{25 pt}\selectfont Tausif Qureshi

    \vspace{6pt}

    \normalsize
    Lucknow, U.P\kern 6pt | \kern 6pt
    \href{mailto:tausifqureshi504@gmail.com}{tausifqureshi504@gmail.com} \kern 6pt | \kern 6pt
    \href{tel:+91-8429097693}{+91-8429097693} \kern 6pt | \kern 6pt
    \href{https://tausifporfolio-website.netlify.app/}{Portfolio} \kern 6pt | \kern 6pt
    \href{https://www.linkedin.com/in/tausif-qureshi/}{LinkedIn} \kern 6pt | \kern 6pt
    \href{https://github.com/Tausifqureshi}{GitHub}
\end{header}

\vspace{0.3cm}
\hrule height 0.5pt
\vspace{0.4cm}

% ---------------------- Professional Summary ----------------------
\section{Professional Summary}
\begin{onecolentry}
Aspiring Front-End Developer with hands-on experience in building responsive and accessible web applications using React.js, JavaScript, and modern UI frameworks. Strong foundation in RESTful API integration, component-driven development, and performance optimization. Passionate about clean code, usability, and continuous learning in Agile-based workflows.
\end{onecolentry}
\SectionBreak

% ---------------------- Technical Skills ----------------------
\section{Technical Skills}
\begin{onecolentry}
\textbf{Languages:} HTML, CSS, JavaScript \\
\textbf{Libraries/Frameworks:} React.js, Redux, React Router, Tailwind CSS, Bootstrap, Material-UI \\
\textbf{Tools:} Git, GitHub, Firebase, Chrome DevTools, Postman, VS Code
\end{onecolentry}
\SectionBreak


% ---------------------- Education ----------------------
\section{Education}
\begin{onecolentry}

\textbf{React Development Certification (Expected)} \hfill Sept 2024 \\
Codeprog – Online Bootcamp

\vspace{6pt}
\textbf{Front-End Web Development} \hfill Dec 2022 -- June 2023 \\
Hanumant Technology Software Training Institute, Lucknow

\vspace{6pt}
\textbf{Bachelor of Computer Applications (BCA)} \hfill July 2017 -- June 2020 \\
Institute of Management and Engineering, New Delhi

\vspace{6pt}
\textbf{Higher Secondary (12th)} \hfill May 2014 -- June 2016 \\
AL-Hind Distance Education Academy, Laxmi Nagar, New Delhi

\end{onecolentry}

\SectionBreak

% ---------------------- Practical Experience ----------------------
\section{Practical Experience}
\begin{onecolentry}
\textbf{React.js Developer (Self Projects)} \hfill Feb 2022 -- Present \\
Built real-world web applications through self-learning and personal projects using modern React stack.

\begin{itemize}[left=10pt, topsep=0pt, noitemsep]
  \item Developed responsive SPAs using React.js, Redux, and React Router
  \item Integrated 5+ REST APIs using Axios to enable dynamic data rendering
  \item Improved performance by optimizing code structure and reducing unnecessary re-renders
  \item Practiced Agile sprints and used Git/GitHub for version control
\end{itemize}
\end{onecolentry}
\SectionBreak

% ---------------------- Projects ----------------------
\section{Projects}
\begin{onecolentry}
\textbf{StoreFusion-Digital} \hfill 
\href{https://github.com/Tausifqureshi/StoreFusion-Digital}{GitHub} |
\href{https://storefusion-digital.netlify.app/}{Live} \\
E-commerce platform for digital product sales.
\begin{itemize}[left=10pt, topsep=0pt, noitemsep]
  \item Firebase auth, product management, and secure checkout
  \item Tailwind CSS and responsive mobile-first UI
\end{itemize}
\textbf{Tech Stack:} React, Firebase, Tailwind CSS, Material-UI

\vspace{6pt}
\textbf{Udemy Clone} \hfill 
\href{https://github.com/Tausifqureshi/Udemy-Clone}{GitHub} |
\href{https://65d3989f42b0a515514a520e--polite-palmier-e23c7f.netlify.app/}{Live} \\
Online course platform replicating key Udemy features.
\begin{itemize}[left=10pt, topsep=0pt, noitemsep]
  \item Dynamic course list with search, filtering, cart
  \item Implemented Redux for global state, React Router for navigation
\end{itemize}
\textbf{Tech Stack:} React, Redux, HTML, CSS, JavaScript

\vspace{6pt}
\textbf{Rodan+Fields Clone} \hfill 
\href{https://github.com/Tausifqureshi/RodanAndFields_clone}{GitHub} |
\href{https://rodanfieldwebsite.netlify.app/home.html}{Live} \\
Beauty product website clone built for UI/UX practice.
\begin{itemize}[left=10pt, topsep=0pt, noitemsep]
  \item LocalStorage cart system, login simulation, semantic HTML
  \item Optimized for browser performance and mobile responsiveness
\end{itemize}
\textbf{Tech Stack:} HTML, CSS, JavaScript, LocalStorage
\end{onecolentry}
\SectionBreak


% ---------------------- Soft Skills ----------------------
\section{Soft Skills}
\begin{onecolentry}
Communication, Team Collaboration, Adaptability, Time Management, Attention to Detail, Problem Solving
\end{onecolentry}

\end{document}









# Udemy Clone   GitHub | Live  
# Online course platform replicating key Udemy features.  
# • Built course pages category filters, detail view, and cart features  
# • Managed global state using Context API and useReducer implemented navigation with React Router // tool kaam dono show 
# Tech Stack: React, Context API, useReducer, React Router, JavaScript, CSS


# ha bana de lekin practical expriemce section nhi sahi fresjer ke liyue interviewer bbi cofisue hoga kkya hai yaja or porject me kya haio muje brest sultion nikal ke de ji se 83 ho score aye or ats keyword se resume stromng ho aisa 

     



# bhai overlef me 4 ke ke compiler hai  J bro inke bare me smaja 
# black color 000000 blue color 0000EE 


 
# resume file ka naam
# Tausif_Qureshi_Frontend_Developer_Resume.pdf


# Other Skills: UI Design, Performance Testing, Agile Development, Project Management, Coding Standards, Information
# Technology


















# Problem issu
# dding this job's company name and web address can help us provide you ATS-specific tips.
# Update scan information
# Contact Information
# We did not find an address in your resume. Recruiters use your address to validate your location for job matches.
# You provided your email. Recruiters use your email to contact you for job matches.
# You provided your phone number.
# Summary
# We found a summary section on your resume. Good job! The summary provides a quick overview of the candidate's qualifications, helping recruiters and hiring managers promptly grasp the value the candidate can offer in the position.
# Section Headings
# We found the education section in your resume.
# We found the work experience section in your resume.
# Your Work Experience section appears empty. We recommend that this section should showcase at least one listing, even if it is just an internship or a personal project.
# Job Title Match
# The job title 'React.js Developer' from the job description matches your resume's profile job title. We recommend this to be the case to ensure you're found when recruiters search by job title.
# Update scan information
# Date Formatting
# ATS and recruiters prefer specific date formatting for your work experience. Please use the following formats: “MM/YY or MM/YYYY or Month YYYY” (e.g. 03/19, 03/2019, Mar 2019 or March 2019).
# Education Match
# Your education matches the preferred (Bachelor) education listed in the job description.
# Update required education level
# File Type
# You are using a .pdf resume, which is the preferred format for most ATS systems.
# Your file name doesn't contain special characters that could cause an error in ATS.
# Your file name is concise and readable.


# Skill 
# Resume
# Job Description
# javascript
# 3
# 3
# coding
# 1
# 3
# performance testing
# 2
# Debugging
# 3
# 2
# webpack
# 3
# 2
# redux
# 6
# 2
# project management skills
# 1
# information technology
# 1
# Front-end development
# 1
# user interface design
# 1
# muje na jibscne yaha bata ra hau jya issu hai 











