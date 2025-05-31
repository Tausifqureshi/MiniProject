// SearchInput Toggle Example
// This component demonstrates how to toggle an input field and a button

import React, { useState } from "react";
function QueryExample() {
  const [toggle, setToggle] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [showInput, setShowInput] = useState(true); // input dikh raha hai ya nahi

  const inputToggle = () => {
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

      <button type="button" onClick={inputToggle}>
        Toggle
      </button>
      <button type="button" onClick={() => setToggle(!toggle)}>
        Click
      </button>
      {toggle ? <p>Toggle is ON</p> : <p>Toggle is OFF</p>}
    </>
  );
}

export default QueryExample;



// Checkbox Toggle Example
import React from "react";

function QueryExample() {
  const [toggle, setToggle] = React.useState(true);
  return (
    <div>
      {toggle ? <p>Toggle is ON</p> : <p>Toggle is OFF</p>}
      <input type="checkbox" name="" id="" checked={toggle} onChange={() => setToggle(!toggle)} />
    </div>
  );

}

// export default QueryExample;
