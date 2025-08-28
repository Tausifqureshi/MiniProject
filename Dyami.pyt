
# Hanumant Technology Software Training Institute ----> 
#  Hanumant Technology Training Institute”









\documentclass[10pt, letterpaper]{article}

\usepackage[
    top=1cm,
    bottom=.8cm,
    left=1.1cm,
    right=1.1cm
]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
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
    urlcolor=black
}

% ---------------------- Section Styling ----------------------
\titleformat{\section}{\bfseries\large}{}{0pt}{}[\vspace{2pt}]
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
Aspiring \textbf{Front-End Developer} with hands-on experience in building \textbf{responsive}, \textbf{interactive}, and \textbf{accessible web applications} using \textbf{React.js}, \textbf{JavaScript}, and modern UI frameworks. Skilled in \textbf{component-driven development}, \textbf{state management}, \textbf{dynamic UI rendering}, and \textbf{performance optimization}. Passionate about \textbf{clean code}, \textbf{user-focused design}, and continuous learning in modern web development.
\end{onecolentry}
\SectionBreak

% ---------------------- Technical Skills ----------------------
\section{Technical Skills}
\begin{onecolentry}
\textbf{Languages:} HTML5, CSS3, JavaScript (ES6+) \\
\textbf{Libraries/Frameworks:} React.js, Redux, React Router, Tailwind CSS, Bootstrap, Material-UI \\
\textbf{Tools:} Git, GitHub, VS Code, Firebase, Postman, Chrome DevTools \\
\textbf{Concepts:} Responsive Design, Component-driven Development, State Management, UI Optimization
\end{onecolentry}
\SectionBreak

% ---------------------- Education ----------------------
\section{Education}
\begin{onecolentry}

\textbf{Front-End Web Development} \hfill Dec 2022 -- June 2023 \\
Hanumant Technology Software Training Institute, Lucknow

\vspace{4pt}
\textbf{Bachelor of Computer Applications (BCA)} \hfill July 2017 -- June 2020 \\
Institute of Management and Engineering, New Delhi

\vspace{4pt}
\textbf{Higher Secondary (12th)} \hfill May 2014 -- June 2016 \\
AL-Hind Distance Education Academy, Laxmi Nagar, New Delhi

\end{onecolentry}
\SectionBreak

% ---------------------- Certifications ----------------------
\section{Certifications}
\begin{onecolentry}
\textbf{React Development} \hfill Sept 2024 \\
Codeprog – Online Bootcamp
\end{onecolentry}
\SectionBreak

% ---------------------- Relevant Projects ----------------------
\section{Projects}
\begin{onecolentry}

\textbf{StoreFusion-Digital} \hfill 
\href{https://github.com/Tausifqureshi/StoreFusion-Digital}{GitHub} |
\href{https://storefusion-digital.netlify.app/}{Live} \\
E-commerce platform for digital product sales.
\begin{itemize}[left=10pt, topsep=0pt, noitemsep]
  \item Implemented shopping flow including product catalog, order cart, and purchase completion
  \item Built admin panel for creating, updating, and deleting products
  \item Optimized performance and ensured responsive design across devices
\end{itemize}
\textbf{Tech Stack:} React, Redux, Firebase, Tailwind CSS, Material-UI

\vspace{4pt}
\textbf{Udemy Clone} \hfill 
\href{https://github.com/Tausifqureshi/Udemy-Clone}{GitHub} |
\href{https://65d3989f42b0a515514a520e--polite-palmier-e23c7f.netlify.app/}{Live} \\
Online course platform replicating key Udemy features.
\begin{itemize}[left=10pt, topsep=0pt, noitemsep]
  \item Designed course pages with category filters, detailed view, and cart features
  \item Constructed interactive course detail pages with dynamic content to make navigation easier
  \item Integrated React Router for smooth page navigation
\end{itemize}
\textbf{Tech Stack:} React, Context API, useReducer, React Router, JavaScript, CSS

\vspace{4pt}
\textbf{Rodan+Fields Clone} \hfill 
\href{https://github.com/Tausifqureshi/RodanAndFields_clone}{GitHub} |
\href{https://rodanfieldwebsite.netlify.app/home.html}{Live} \\
Skincare e-commerce website clone showcasing beauty product shopping features
\begin{itemize}[left=10pt, topsep=0pt, noitemsep]
  \item Constructed product, cart, and checkout pages for smooth shopping experience
  \item Created interactive product slider showcasing products for user-friendly browsing
  \item Tracked user actions in LocalStorage to enhance interactivity
\end{itemize}
\textbf{Tech Stack:} HTML, CSS, JavaScript, LocalStorage

\end{onecolentry}
\SectionBreak

% ---------------------- Soft Skills ----------------------
\section{Soft Skills}
\begin{onecolentry}
\noindent
\textbullet~Communication \hspace{2em} 
\textbullet~Team Collaboration \hspace{2em} 
\textbullet~Problem Solving \hspace{2em} 
\textbullet~Continuous Learning
\end{onecolentry}

\end{document}




