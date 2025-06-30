import React from 'react';
function Delete({ onDelete, onClose }) {
//   const handleDelete = () => {
//     onDelete();
//     onClose();
//   };

  return (
    <div className="delete-popup">
      <h2>Are you sure you want to delete this item?</h2>
      {/* <button onClick={handleDelete}>Yes, delete</button>
      <button onClick={onClose}>No, cancel</button> */}
    </div>
  );
}
export default Delete;



































// 71 Persentage ATS SCORE


// %    \documentclass[10pt, letterpaper]{article}

// % % ---------------------- Packages ----------------------
// % \usepackage[
// %     top=1cm,
// %     bottom=1cm,
// %     left=1.1cm,
// %     right=1.1cm
// % ]{geometry}
// % \usepackage{titlesec}
// % \usepackage{enumitem}
// % \usepackage[dvipsnames]{xcolor}
// % \usepackage{hyperref}
// % \usepackage{changepage}
// % \usepackage{iftex}
// % \usepackage{tabularx}

// % \ifPDFTeX
// %   \usepackage[T1]{fontenc}
// %   \usepackage[utf8]{inputenc}
// %   \usepackage{lmodern}
// % \fi

// % \usepackage{charter}
// % \pagestyle{empty}
// % \setlength{\parindent}{0pt}
// % \setlength{\columnsep}{0.2cm}

// % \hypersetup{
// %     colorlinks=true,
// %     urlcolor=MidnightBlue
// % }

// % % ---------------------- Section Styling ----------------------
// % \titleformat{\section}{\color{MidnightBlue}\bfseries\large}{}{0pt}{}[\vspace{2pt}]
// % \titlespacing{\section}{0pt}{4pt}{2pt}

// % % Bottom border between sections
// % \newcommand{\SectionBreak}{
// %     \vspace{0.3cm}
// %     \hrule height 0.4pt
// %     \vspace{0.3cm}
// % }

// % % ---------------------- Custom Environments ----------------------
// % \newenvironment{onecolentry}{
// %   \begin{adjustwidth}{0pt}{0pt}
// %   \setlength{\parskip}{2pt}
// % }{
// %   \end{adjustwidth}
// % }

// % \newenvironment{twocolentry}[1]{
// %   \begin{adjustwidth}{0pt}{0pt}
// %   \textbf{#1} \\
// % }{
// %   \end{adjustwidth}
// % }

// % \newenvironment{header}{
// %     \setlength{\topsep}{0pt}\par\kern\topsep\centering\linespread{1.3}
// % }{
// %     \par\kern\topsep
// % }

// % % ---------------------- Document Start ----------------------
// % \begin{document}

// % % ---------------------- Header ----------------------
// % \begin{header}
// %     \fontsize{25 pt}{25 pt}\selectfont Tausif Qureshi

// %     \vspace{6pt}

// %     \normalsize
// %     Lucknow, U.P\kern 6pt | \kern 6pt
// %     \href{mailto:tausifqureshi504@gmail.com}{tausifqureshi504@gmail.com} \kern 6pt | \kern 6pt
// %     \href{tel:+91-8429097693}{+91-8429097693} \kern 6pt | \kern 6pt
// %     \href{https://tausifporfolio-website.netlify.app/}{Portfolio} \kern 6pt | \kern 6pt
// %     \href{https://www.linkedin.com/in/tausif-qureshi/}{LinkedIn} \kern 6pt | \kern 6pt
// %     \href{https://github.com/Tausifqureshi}{GitHub}
// % \end{header}

// % \vspace{0.3cm}
// % \hrule height 0.5pt
// % \vspace{0.4cm}

// % % ---------------------- Professional Summary ----------------------
// % \section{Professional Summary}
// % \begin{onecolentry}
// % Front-End Developer with expertise in building responsive and user-centric web interfaces using HTML, CSS, JavaScript, React.js, and Redux. Adept in Tailwind CSS and Material UI to create scalable, accessible UI components. Demonstrated ability to deliver quality applications through self-learning and practical implementation. Proficient in version control with Git and GitHub, and backend integration using Firebase.
// % \end{onecolentry}
// % \SectionBreak

// % % ---------------------- Technical Skills ----------------------
// % \section{Technical Skills}
// % \begin{onecolentry}
// % \textbf{Languages:} HTML, CSS, JavaScript \\
// % \textbf{Libraries/Frameworks:} React, Redux, React Router, Tailwind CSS, Bootstrap, Material-UI \\
// % \textbf{Tools:} Git, GitHub, Firebase, LocalStorage, JSON, DOM
// % \end{onecolentry}
// % \SectionBreak

// % % ---------------------- Soft Skills ----------------------
// % \section{Soft Skills}
// % \begin{onecolentry}
// % Collaboration, Communication, Planning, Adaptability, Problem Solving
// % \end{onecolentry}
// % \SectionBreak

// % % ---------------------- Education ----------------------
// % \section{Education}

// % \newcommand{\eduentry}[3]{%
// %   \begin{tabularx}{\linewidth}{@{}X r@{}}
// %     \textbf{#1} & \textbf{#2} \\
// %     #3 & \\
// %   \end{tabularx}
// %   \vspace{6pt}
// % }

// % \eduentry
// %   {Bachelor of Computer Applications (BCA)}
// %   {July 2017 -- June 2020}
// %   {Institute of Management and Engineering, New Delhi}

// % \eduentry
// %   {Higher Secondary (12th)}
// %   {May 2014 -- June 2016}
// %   {AL-Hind Distance Education Academy, Laxmi Nagar, New Delhi}

// % \eduentry
// %   {Front-End Web Development (Self-Learning)}
// %   {Feb 2022 -- Present}
// %   {Up-skilled through Udemy, YouTube, and hands-on projects. Focused on React, Redux, responsive design, and API integration. \\
// %   \textbf{Certification:} React Development by Codeprog (Sept 2024)}

// % \eduentry
// %   {Career Planning and Skill Development}
// %   {2020 -- 2021}
// %   {Focused on personal growth and setting a clear technical career path during the COVID-19 period.}
// % \SectionBreak

// % % ---------------------- Projects ----------------------
// % \section{Projects}
// % \begin{onecolentry}
// % \textbf{Udemy-Clone} \hfill 
// % \href{https://github.com/Tausifqureshi/Udemy-Clone}{GitHub} |
// % \href{https://65d3989f42b0a515514a520e--polite-palmier-e23c7f.netlify.app/}{Live} \\
// % Online course platform with filtering, course details, and cart management. \\
// % \textbf{Tech Stack:} React, Redux, React Router, HTML, CSS, JavaScript

// % \vspace{6pt}
// % \textbf{StoreFusion-Digital} \hfill 
// % \href{https://github.com/Tausifqureshi/StoreFusion-Digital}{GitHub} |
// % \href{https://storefusion-digital.netlify.app/}{Live} \\
// % Scalable e-commerce platform offering digital retail solutions with real-time UI. \\
// % \textbf{Features:} Authentication, product listing, cart, admin panel, payment gateway. \\
// % \textbf{Tech Stack:} React, Tailwind CSS, Firebase, Material-UI

// % \vspace{6pt}
// % \textbf{Rodan+Fields Clone} \hfill 
// % \href{https://github.com/Tausifqureshi/RodanAndFields_clone}{GitHub} |
// % \href{https://rodanfieldwebsite.netlify.app/home.html}{Live} \\
// % Beauty product platform with user auth, product browsing, and checkout. \\
// % \textbf{Tech Stack:} HTML, CSS, JavaScript, LocalStorage, DOM
// % \end{onecolentry}
// % \SectionBreak

// % % ---------------------- Interests ----------------------
// % \section{Interests}
// % \begin{onecolentry}
// % Reading tech blogs, Gaming, Cricket, Exploring new tools
// % \end{onecolentry}

// % \end{document}


// #8055a2