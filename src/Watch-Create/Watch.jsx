// import React,{useState, useEffect} from 'react'

// function Watch({color}) {
//   const [time , setTime] = useState(0);
   
//   useEffect(()=>{
//     const interval = setInterval(() => {
//       setTime(new Date().toLocaleTimeString());
//     }, 1000);

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   return (
//     <div>
//       <h1 style={{color: color, backgroundColor: "#f0f0f0", padding: "10px", borderRadius: "5px"}}>Time: {time}</h1>
//       {/* <button onClick={() => setTime(time + 1)}>Increment</button> */}
//     </div>
//   )
// }
// export default Watch

































// \documentclass[10pt, letterpaper]{article}

// % ---------------------- Packages ----------------------
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
// Detail-oriented Front-End Developer with a strong foundation in HTML, CSS, and JavaScript, and a solid grasp of modern frameworks including React.js and Redux. Experienced in developing responsive, high-performance user interfaces using Tailwind CSS and Material UI. Proven ability through self-directed learning and real-world projects. Proficient in Git and GitHub for version control and skilled with Firebase for backend services.
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
// Teamwork, Communication, Planning, Adaptability
// \end{onecolentry}
// \SectionBreak

// % ---------------------- Education ----------------------
// \section{Education}

// \newcommand{\eduentry}[3]{%
//   \begin{tabularx}{\linewidth}{@{}X r@{}}
//     \textbf{#1} & \textbf{#2} \\
//     #3 & \\
//   \end{tabularx}
//   \vspace{6pt}
// }

// \eduentry
//   {Bachelor of Computer Application (BCA)}
//   {May 2014 -- June 2016}
//   {Institute of Management and Engineering, New Delhi}

// \eduentry
//   {Intermediate (12th)}
//   {June 2017 -- July 2020}
//   {AL-Hind Distance Education Academy, Laxmi Nagar, New Delhi}

// \eduentry
//   {Self-Learning and Web Development Journey}
//   {Feb 2022 -- Present}
//   {Studied via Udemy and YouTube to strengthen front-end development skills. Gained experience in responsive UI, Redux state management, and API integration.\\
//   \textbf{Certification:} React Development (Codeprog) -- Sept 2024}

// \eduentry
//   {Career Planning and Recovery Period}
//   {2020 -- 2021}
//   {Personal development and direction-setting during the COVID-19 pandemic}
// \SectionBreak

// % ---------------------- Projects ----------------------
// \section{Projects}
// \begin{onecolentry}
// \textbf{Udemy-Clone} \hfill 
// \href{https://github.com/Tausifqureshi/Udemy-Clone}{GitHub} |
// \href{https://65d3989f42b0a515514a520e--polite-palmier-e23c7f.netlify.app/}{Live} \\
// Responsive course platform inspired by Udemy with browsing, course detail, and cart features. \\
// \textbf{Features:} Course Browse, Details Page, Add to Cart \\
// \textbf{Tech Stack:} React, Redux, React-Router, HTML, CSS, JavaScript

// \vspace{6pt}
// \textbf{StoreFusion-Digital} \hfill 
// \href{https://github.com/Tausifqureshi/StoreFusion-Digital}{GitHub} |
// \href{https://storefusion-digital.netlify.app/}{Live} \\
// Scalable e-commerce website with user authentication, admin dashboard, and integrated payments. Backend powered by Firebase. \\
// \textbf{Features:} Login, Product Listing, Cart, Admin Panel, Payments \\
// \textbf{Tech Stack:} React, Tailwind, Firebase, Material-UI

// \vspace{6pt}
// \textbf{Rodan+Fields Clone} \hfill 
// \href{https://github.com/Tausifqureshi/RodanAndFields_clone}{GitHub} |
// \href{https://rodanfieldwebsite.netlify.app/home.html}{Live} \\
// Skincare e-commerce site using vanilla JavaScript and CSS. Includes login, product browsing, cart, and checkout with local storage. \\
// \textbf{Features:} Sign-Up, Product Page, Cart, Checkout \\
// \textbf{Tech Stack:} HTML, CSS, JavaScript, DOM, LocalStorage
// \end{onecolentry}
// \SectionBreak

// % ---------------------- Interests ----------------------
// \section{Interests}
// \begin{onecolentry}
// Reading, Gaming, Cricket, Traveling
// \end{onecolentry}

// \end{document}
