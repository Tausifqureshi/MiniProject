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

























// 70 Scroe bullet point use best offical color 
// % ---------------------- Document Class & Packages ----------------------
// \documentclass[10pt, letterpaper]{article}

// \usepackage[
//     top=1cm,`
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
// Front‑End Developer with expertise in React.js, Redux, and responsive single‑page applications. Skilled in Agile methodologies, RESTful API integration, Webpack/Babel build pipelines, and unit testing with Jest/Enzyme. Committed to performance optimization, cross‑browser compatibility, accessibility, clean code, and collaborative problem‑solving within CI/CD environments.
// \end{onecolentry}
// \SectionBreak

// % ---------------------- Technical Skills ----------------------
// \section{Technical Skills}
// \begin{onecolentry}
// \textbf{Languages:} HTML, CSS, JavaScript, TypeScript \\
// \textbf{Libraries/Frameworks:} React, Redux, React Router, Tailwind CSS, Bootstrap, Material-UI \\
// \textbf{Tools:} Git, GitHub, Firebase, Webpack, Babel, Jest, Enzyme, LocalStorage, JSON, DOM, VS Code, Postman, Jira, Lighthouse, Figma
// \end{onecolentry}
// \SectionBreak

// % ---------------------- Soft Skills ----------------------
// \section{Soft Skills}
// \begin{onecolentry}
// Team Collaboration, Communication, Planning, Adaptability, Problem Solving, Time Management
// \end{onecolentry}
// \SectionBreak

// % ---------------------- Education ----------------------
// \section{Education}
// \begin{onecolentry}
// \textbf{Bachelor of Computer Applications (BCA)} \hfill July 2017 -- June 2020 \\
// Institute of Management and Engineering, New Delhi

// \vspace{6pt}
// \textbf{Higher Secondary (12th)} \hfill May 2014 -- June 2016 \\
// AL-Hind Distance Education Academy, Laxmi Nagar, New Delhi

// \vspace{6pt}
// \textbf{Front-End Web Development (Self-Learning)} \hfill Feb 2022 -- Present \\
// Completed structured learning through Udemy, YouTube tutorials, and applied knowledge in real-world projects. \\
// \textbf{Certification:} React Development by Codeprog (Sept 2024)
// \end{onecolentry}
// \SectionBreak

// % ---------------------- Projects ----------------------
// \section{Projects}
// \begin{onecolentry}
// \textbf{Udemy-Clone} \hfill 
// \href{https://github.com/Tausifqureshi/Udemy-Clone}{GitHub} |
// \href{https://65d3989f42b0a515514a520e--polite-palmier-e23c7f.netlify.app/}{Live} \\
// A React-based online learning platform that replicates Udemy's key functionalities.
// \begin{itemize}[left=10pt, topsep=0pt, noitemsep]
//   \item Dynamic course listing with search and category filters
//   \item Interactive course detail and add-to-cart functionality
//   \item Clean UI using Redux and React Router
// \end{itemize}
// \textbf{Tech Stack:} React, Redux, React Router, HTML, CSS, JavaScript

// \vspace{6pt}
// \textbf{StoreFusion-Digital} \hfill 
// \href{https://github.com/Tausifqureshi/StoreFusion-Digital}{GitHub} |
// \href{https://storefusion-digital.netlify.app/}{Live} \\
// A responsive e-commerce platform tailored for digital product sales.
// \begin{itemize}[left=10pt, topsep=0pt, noitemsep]
//   \item Implements Firebase for user authentication and database storage
//   \item Includes admin panel, product CRUD, and integrated cart system
//   \item Mobile-first responsive design using Tailwind CSS
// \end{itemize}
// \textbf{Tech Stack:} React, Tailwind CSS, Firebase, Material-UI

// \vspace{6pt}
// \textbf{Rodan+Fields Clone} \hfill 
// \href{https://github.com/Tausifqureshi/RodanAndFields_clone}{GitHub} |
// \href{https://rodanfieldwebsite.netlify.app/home.html}{Live} \\
// A cosmetics e-commerce clone website with client-side state management.
// \begin{itemize}[left=10pt, topsep=0pt, noitemsep]
//   \item Product listing with filtering, cart feature using LocalStorage
//   \item Simulated user login and checkout flow
//   \item Built with semantic HTML and responsive layout
// \end{itemize}
// \textbf{Tech Stack:} HTML, CSS, JavaScript, LocalStorage, DOM
// \end{onecolentry}
// \SectionBreak

// % ---------------------- Interests ----------------------
// \section{Interests}
// \begin{onecolentry}
// Reading tech blogs, UI/UX research, JavaScript updates, Gaming, Cricket
// \end{onecolentry}

// \end{document}