// // import React from 'react';
// // function Delete({ onDelete, onClose }) {
// // //   const handleDelete = () => {
// // //     onDelete();
// // //     onClose();
// // //   };

// //   return (
// //     <div className="delete-popup">
// //       <h2>Are you sure you want to delete this item?</h2>
// //       {/* <button onClick={handleDelete}>Yes, delete</button>
// //       <button onClick={onClose}>No, cancel</button> */}
// //     </div>
// //   );
// // }
// // export default Delete;






































// \documentclass[10pt, letterpaper]{article}

// % ---------------------- Packages ----------------------
// \usepackage[
//     top=1.1cm,
//     bottom=1.1cm,
//     left=1.1cm,
//     right=1.1cm
// ]{geometry}
// \usepackage{titlesec}
// \usepackage{enumitem}
// \usepackage[dvipsnames]{xcolor}
// \usepackage{hyperref}
// \usepackage{changepage}
// \usepackage{iftex}
// \usepackage{tabularx}

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
//     urlcolor=black
// }

// % ---------------------- Section Styling ----------------------
// \titleformat{\section}{\bfseries\large}{}{0pt}{}[\vspace{2pt}]
// \titlespacing{\section}{0pt}{4pt}{2pt}

// % Bottom border between sections
// \newcommand{\SectionBreak}{
//     \vspace{0.3cm}
//     \hrule height 0.4pt
//     \vspace{0.3cm}
// }

// % ---------------------- Custom Environments ----------------------
// \newenvironment{onecolentry}{
//   \begin{adjustwidth}{0pt}{0pt}
//   \setlength{\parskip}{2pt}
// }{
//   \end{adjustwidth}
// }

// \newenvironment{twocolentry}[1]{
//   \begin{adjustwidth}{0pt}{0pt}
//   \textbf{#1} \\
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
//     Lucknow, U.P%
//     \kern 6pt | \kern 6pt%
//     \href{mailto:tausifqureshi504@gmail.com}{tausifqureshi504@gmail.com}%
//     \kern 6pt | \kern 6pt%
//     \href{tel:+91-8429097693}{+91-8429097693}%
//     \kern 6pt | \kern 6pt%
//     \href{https://tausifporfolio-website.netlify.app/}{Portfolio}%
//     \kern 6pt | \kern 6pt%
//     \href{https://www.linkedin.com/in/tausif-qureshi/}{LinkedIn}%
//     \kern 6pt | \kern 6pt%
//     \href{https://github.com/Tausifqureshi}{GitHub}%
// \end{header}

// \vspace{0.3cm}
// \hrule height 0.5pt
// \vspace{0.4cm}

// % ---------------------- Summary ----------------------
// \section{Professional Summary}
// \begin{onecolentry}
// Passionate and detail-oriented Front-End Developer with a strong foundation in HTML, CSS, JavaScript, and a deep understanding of modern JavaScript frameworks including React.js and Redux. Skilled at building responsive, high-performance user interfaces using Tailwind CSS and Material UI. Demonstrated expertise through hands-on project development and self-learning initiatives. 
// Proficient in using Git and GitHub for version control, and experienced with Firebase for backend integration.
// Continuously learning and applying new technologies to solve real-world problems in dynamic and collaborative environments.
// \end{onecolentry}
// \SectionBreak

// % ---------------------- Technical Skills ----------------------
// \section{Technical Skills}
// \begin{onecolentry}
// \textbf{Languages:} HTML, CSS, JavaScript \\
// \textbf{Libraries/Frameworks:} React, Redux, React-Router, Tailwind, Bootstrap, Material-UI \\
// \textbf{Tools:} Git, GitHub, Firebase, LocalStorage, JSON, DOM
// \end{onecolentry}
// \SectionBreak

// % ---------------------- Soft Skills ----------------------
// \section{Soft Skills}
// \begin{onecolentry}
// Team Player, Communication, Planning and Management, Adaptability
// \end{onecolentry}
// \SectionBreak

// % ---------------------- Education ----------------------
// \section{Education}

// \begin{twocolentry}{May 2014 -- June 2016}
//     \textbf{Bachelor of Computer Application (BCA)}\\
//     Institute of Management and Engineering, New Delhi
// \end{twocolentry}

// \vspace{4pt}

// \begin{twocolentry}{June 2017 -- July 2020}
//     \textbf{Intermediate (12th)}\\
//     AL-Hind Distance Education Academy, Laxmi Nagar, New Delhi
// \end{twocolentry}

// \vspace{4pt}

// \begin{twocolentry}{Feb 2022 -- Present}
//     \textbf{Self-Learning and Web Development Journey}\\
//     Enrolled in online platforms like Udemy and YouTube to strengthen core front-end development skills. Developed a strong command of component-based architecture, responsive UI design, state management using Redux, and RESTful API integration.\\
//     \vspace{10pt}
//     \textbf{Certification:} React Development (Codeprog) -- Sept 2024
// \end{twocolentry}

// \vspace{4pt}

// \begin{twocolentry}{2020 -- 2021}
//     \textbf{Career Planning and Recovery Period}\\
//     Personal development and direction-setting during COVID-19 pandemic
// \end{twocolentry}
// \SectionBreak

// % ---------------------- Projects ----------------------
// \section{Projects}
// \begin{onecolentry}
// \textbf{Udemy-Clone} \hfill 
// \href{https://github.com/Tausifqureshi/Udemy-Clone}{GitHub} |
// \href{https://65d3989f42b0a515514a520e--polite-palmier-e23c7f.netlify.app/}{Live} \\
// A responsive course platform inspired by Udemy, with browsing, course detail, and cart features. Built using React-Router and Redux for navigation and state management. \\
// \textbf{Features:} Course Browse, Details Page, Add to Cart \\
// \textbf{Tech Stack:} React, Redux, React-Router, HTML, CSS, JS

// \vspace{6pt}
// \textbf{StoreFusion-Digital} \hfill 
// \href{https://github.com/Tausifqureshi/StoreFusion-Digital}{GitHub} |
// \href{https://storefusion-digital.netlify.app/}{Live} \\
// Scalable e-commerce site with user auth, real-time cart, and admin panel. Firebase handles backend and payment integration. \\
// \textbf{Features:} Login/Signup, Product Listing, Cart, Admin Dashboard, Payments \\
// \textbf{Tech Stack:} React, Tailwind, Firebase, Material-UI

// \vspace{6pt}
// \textbf{Rodan+Fields Clone} \hfill 
// \href{https://github.com/Tausifqureshi/RodanAndFields_clone}{GitHub} |
// \href{https://rodanfieldwebsite.netlify.app/home.html}{Live} \\
// Skincare e-commerce site built with vanilla JS and CSS. Includes login, cart, and checkout with local storage. \\
// \textbf{Features:} Sign-Up, Product Page, Cart, Checkout \\
// \textbf{Tech Stack:} HTML, CSS, JS, DOM, LocalStorage
// \end{onecolentry}
// \SectionBreak

// % ---------------------- Interests ----------------------
// \section{Interests}
// \begin{onecolentry}
// Reading, Gaming, Cricket, Traveling
// \end{onecolentry}

// \end{document}

