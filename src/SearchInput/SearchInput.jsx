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
