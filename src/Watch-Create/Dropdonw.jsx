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




























// ATS SCORE 68 
// \documentclass[10pt,a4paper]{article}

// \usepackage[top=1.2cm, bottom=1.2cm, left=1.4cm, right=1.4cm]{geometry}
// \usepackage{enumitem}
// \usepackage{hyperref}
// \usepackage{titlesec}
// \usepackage{parskip}
// \usepackage{charter}
// \pagestyle{empty}
// \setlength{\parindent}{0pt}

// \hypersetup{
//     colorlinks=true,
//     urlcolor=black
// }

// % Section formatting (default black headings)
// \titleformat{\section}{\bfseries\large\uppercase}{\thesection}{1em}{}
// \titlespacing{\section}{0pt}{6pt}{2pt}

// % Custom command for section bottom border
// \newcommand{\SectionBreak}{
//     \vspace{0.2cm}
//     \hrule height 0.4pt
//     \vspace{0.3cm}
// }

// \begin{document}

// %================ Header ===================
// \begin{center}
//     {\LARGE \textbf{Tausif Qureshi}}\\[3pt]
//     Lucknow, U.P \textbar~
//     \href{mailto:tausifqureshi504@gmail.com}{tausifqureshi504@gmail.com} \textbar~
//     +91-8429097693 \textbar~
//     \href{https://tausifporfolio-website.netlify.app/}{Portfolio} \textbar~
//     \href{https://www.linkedin.com/in/tausif-qureshi/}{LinkedIn} \textbar~
//     \href{https://github.com/Tausifqureshi}{GitHub}
// \end{center}

// \vspace{4pt}
// \hrule height 0.5pt
// \vspace{0.4cm}

// %================ Professional Summary ===================
// \section*{Professional Summary}
// Front-End Developer specializing in building responsive and dynamic user interfaces using React.js, Redux, and JavaScript. Experienced in delivering production-ready web applications with a focus on performance, usability, and clean code. Skilled in collaborating within agile teams, version control with Git/GitHub, and integrating backend services via Firebase and REST APIs.
// \SectionBreak

// %================ Technical Skills ===================
// \section*{Technical Skills}
// \textbf{Languages:} HTML5, CSS3, JavaScript (ES6+) \\
// \textbf{Frameworks/Libraries:} React.js, Redux, React Router, Tailwind CSS, Material-UI, Bootstrap \\
// \textbf{Tools/Platforms:} Git, GitHub, Firebase, LocalStorage, JSON, DOM \\
// \textbf{Other:} Responsive Design, API Integration, Cross-Browser Compatibility
// \SectionBreak

// %================ Projects ===================
// \section*{Projects}
// \textbf{Udemy-Clone} \\
// \href{https://github.com/Tausifqureshi/Udemy-Clone}{GitHub} \textbar~ \href{https://65d3989f42b0a515514a520e--polite-palmier-e23c7f.netlify.app/}{Live Demo}\\
// Developed a fully responsive online course platform inspired by Udemy. Implemented features such as course browsing, detail pages, and a shopping cart using React, Redux, and React Router. \\
// \textbf{Tech Stack:} React, Redux, React Router, HTML, CSS, JavaScript

// \vspace{6pt}
// \textbf{StoreFusion-Digital} \\
// \href{https://github.com/Tausifqureshi/StoreFusion-Digital}{GitHub} \textbar~ \href{https://storefusion-digital.netlify.app/}{Live Demo}\\
// Built a scalable e-commerce website with user authentication, admin dashboard, and payment integration. Leveraged React for the UI, Tailwind CSS for styling, and Firebase for backend services. \\
// \textbf{Tech Stack:} React, Tailwind CSS, Firebase, Material-UI

// \vspace{6pt}
// \textbf{Rodan+Fields Clone} \\
// \href{https://github.com/Tausifqureshi/RodanAndFields_clone}{GitHub} \textbar~ \href{https://rodanfieldwebsite.netlify.app/home.html}{Live Demo}\\
// Created a skincare e-commerce platform using vanilla JavaScript and CSS. Implemented user authentication, product browsing, cart management, and checkout with local storage.\\
// \textbf{Tech Stack:} HTML, CSS, JavaScript, DOM, LocalStorage
// \SectionBreak

// %================ Education ===================
// \section*{Education}
// \textbf{Bachelor of Computer Applications (BCA)} \hfill 2017 -- 2020 \\
// AL-Hind Distance Education Academy, Laxmi Nagar, New Delhi

// \textbf{Intermediate (12th)} \hfill 2014 -- 2016 \\
// Institute of Management and Engineering, New Delhi

// \textbf{React Development Certification} \hfill Sept 2024 (Expected) \\
// Codeprog (Online via Udemy/YouTube)
// \SectionBreak

// %================ Additional Training ===================
// \section*{Additional Training}
// Self-taught front-end development through online courses, building real-world projects, and continuous upskilling in React ecosystem, UI/UX best practices, and API integration.
// \SectionBreak

// %================ Soft Skills ===================
// \section*{Soft Skills}
// Teamwork \textbar~ Communication \textbar~ Adaptability \textbar~ Problem-Solving \textbar~ Planning
// \SectionBreak

// %================ Interests ===================
// \section*{Interests}
// Reading \textbar~ Gaming \textbar~ Cricket \textbar~ Travelling

// \end{document}