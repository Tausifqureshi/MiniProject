// SearchInput Toggle Example
// This component demonstrates how to toggle an input field and a button
import  { useState } from "react";
function  SearchInput() {
  const [toggle, setToggle] =useState(false);
  const [inputValue, setInputValue] =useState("");
  const [showInput, setShowInput] = useState(true); // input dikh raha hai ya nahi

  const inputToggle = () => {
    //  Toggle to input 
    
    // setInputValue((prevValue) => !prevValue);
    // if (inputValue) {
    //   setInputValue("");
    // } else {
    //   setInputValue("Default Value");
    // }
    setShowInput(!showInput);
  };

  return (
    <>
      {showInput && (
        <input
          type="text"
          placeholder="Type something..."
          width="100px"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      )}

      {/* <button type="button" onClick={inputToggle}>
        Toggle to input 
      </button> <br /> <br /> <br /> */}
     
       <br /> <br /> <br />

      <label htmlFor=""> Toggle to input </label>
      <input type="checkbox" name="" id="" checked={showInput} onChange={inputToggle}/>

      <button type="button" onClick={() => setToggle(!toggle)}>
        Click to text toggle 
      </button>
      
      {toggle ? <p>Toggle is ON</p> : <p>Toggle is OFF</p>}
    </>
  );
}

export default SearchInput;



// Checkbox Toggle Example
// import React from "react";

// function QueryExample() {
//   const [toggle, setToggle] = React.useState(true);
//   return (
//     <div>
//       {toggle ? <p>Toggle is ON</p> : <p>Toggle is OFF</p>}
//       <input type="checkbox" name="" id="" checked={toggle} onChange={() => setToggle(!toggle)} />
//     </div>
//   );

// }

// export default QueryExample;
















// \section*{Education}
// \textbf{Front-End Web Development Certification (Ongoing)} \\
// Codeprog — Advanced React.js, Redux, Routing, APIs, real-world projects \hfill Feb 2023 -- Sept 2024 \\

// \textbf{Front-End Skill Development Program} \\
// Bootcamp-style self-learning: HTML, CSS, JavaScript, React, Git workflows \hfill Jan 2021 -- Jan 2023 \\

// \textbf{Bachelor of Computer Applications (BCA)} \\
// Institute of Management and Engineering, New Delhi \hfill Jul 2017 -- Jun 2020




// Technical Skills kine last add
// Concepts: Responsive Design, SPA, State Management, RESTful APIs, Cross-Browser Compatibility, Component Lifecycle