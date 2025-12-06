// SearchInput Toggle Example
// This component demonstrates how to toggle an input field and a button
import { useState } from "react";
function SearchInput() {
  const [toggle, setToggle] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showInput, setShowInput] = useState(true); // input dikh raha hai ya nahi
  const [showValue, setShowValue] = useState(true); // value dikh raha hai ya nahi

  const inputToggle = (e) => {
    //  Toggle to input

    // if (inputValue) {
    //   setInputValue("");
    // } else {
    //   setInputValue("Default Value");
    // }
    setShowInput(!showInput);
    // setShowInput(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowValue(inputValue);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 backdrop-blur-xl shadow-2xl border border-gray-200 
        rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8 tracking-wide">
          Search Input Toggle
        </h2>

        {/* Input Field */}
        {showInput && (
          <input
            type="text"
            placeholder="Type something..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full px-4 py-3 mb-5 border rounded-xl shadow-sm 
             bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
        )}

        {/* Submitted Value Box */}
        <div className="mb-8 p-4 bg-gray-50 border rounded-xl shadow-sm">
          <h1 className="text-gray-700 text-lg font-medium">
            {showValue ? showValue : "Nothing submitted yet"}
          </h1>
        </div>

        {/* Toggle Input (Checkbox + Button) */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={showInput}
              onChange={inputToggle}
              className="h-5 w-5 accent-blue-600 cursor-pointer"
            />
            <label className="text-gray-700 font-medium text-[17px]">
              Show Input
            </label>
          </div>

          <button
            type="button"
            onClick={inputToggle}
            className="px-4 py-2 bg-gray-800 text-white rounded-xl hover:bg-gray-900 
            transition-all shadow"
          >
            Toggle Input
          </button>
        </div>

        {/* Toggle Button */}
        <button
          type="button"
          onClick={() => setToggle(!toggle)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white 
          py-3 rounded-xl shadow transition-all mb-4"
        >
          Click to Toggle Text
        </button>

        {toggle ? (
          <p className="text-green-600 text-center font-semibold text-lg mb-4">
            Toggle is ON
          </p>
        ) : (
          <p className="text-red-600 text-center font-semibold text-lg mb-4">
            Toggle is OFF
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white 
          py-3 rounded-xl shadow transition-all"
        >
          Submit
        </button>
    </form>
    </div>
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
