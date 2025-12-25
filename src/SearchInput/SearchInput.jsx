// SearchInput Toggle Example
// This component demonstrates how to toggle an input field and a button



import { useState } from "react";

function SearchInput() {
  const [toggle, setToggle] = useState(false); // Toggle button state
  const [showInput, setShowInput] = useState(true); // input show/hide state


  const [inputValue, setInputValue] = useState(""); // Input field value

  // 🔹 List values (map ke liye)
  const [submittedValues, setSubmittedValues] = useState(() => {
    const stored = localStorage.getItem("submittedValue");
    return stored ? JSON.parse(stored) : [];
  });

  // 🔹 Box value (cancelable)
  const [lastValue, setLastValue] = useState("");

  // Toggle input visibility
  const inputToggle = () => {
    setShowInput(!showInput);
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const updatedValues = [...submittedValues, inputValue];

    setSubmittedValues(updatedValues); // list update
    setLastValue(inputValue);          // box update

    localStorage.setItem(
      "submittedValue",
      JSON.stringify(updatedValues)
    );

    setInputValue(""); // input clear
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 backdrop-blur-xl shadow-2xl border border-gray-200 
        rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
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
            focus:ring-2 focus:ring-blue-500 outline-none"
          />
        )}

        {/* 🔹 Submitted Value Box (Cancelable) */}
        <div className="mb-8 p-4 bg-gray-50 border rounded-xl shadow-sm flex justify-between items-center">
          <h1 className="text-gray-700 text-lg font-medium">
            {lastValue || "Nothing submitted yet"}
          </h1>

          {lastValue && (
            <button
              type="button"
              onClick={() => setLastValue("")}
              className="text-red-500 font-bold text-lg"
            >
              ✕
            </button>
          )}
        </div>

        {/* Toggle Input */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={showInput}
              onChange={inputToggle}
              className="h-5 w-5 accent-blue-600"
            />
            <label className="text-gray-700 font-medium">
              Show Input
            </label>
          </div>

          <button
            type="button"
            onClick={inputToggle}
            className="px-4 py-2 bg-gray-800 text-white rounded-xl"
          >
            Toggle Input
          </button>
        </div>

        {/* Toggle Text Button */}
        <button
          type="button"
          onClick={() => setToggle(!toggle)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl mb-4"
        >
          Click to Toggle Text
        </button>

        {toggle ? (
          <p className="text-green-600 text-center font-semibold mb-4">
            Toggle is ON
          </p>
        ) : (
          <p className="text-red-600 text-center font-semibold mb-4">
            Toggle is OFF
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl"
        >
          Submit
        </button>
      </form>

      {/* 🔹 List Section (map ONLY here) */}
      <div
        className="w-full max-w-md mt-6 bg-white/80 backdrop-blur-xl 
        border border-gray-200 rounded-2xl shadow-lg p-4 max-h-48 overflow-y-auto"
      >
        <h3 className="text-gray-700 font-semibold mb-3 text-center">
          Submitted Values
        </h3>

        {submittedValues.length === 0 ? (
          <p className="text-center text-gray-400 text-sm">
            No values yet
          </p>
        ) : (
          submittedValues.map((value, index) => (
            <div
              key={index}
              className="flex items-center gap-3 mb-2 p-2 
              bg-gray-50 rounded-xl shadow-sm"
            >
              <span
                className="w-7 h-7 rounded-full bg-blue-600 
                text-white flex items-center justify-center text-sm"
              >
                {index + 1}
              </span>

              <p className="text-gray-700 text-sm break-words">
                {value}
              </p>
            </div>
          ))
        )}
      </div>
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
