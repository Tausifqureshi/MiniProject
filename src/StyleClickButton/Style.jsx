// import React from "react";

// function QueryExample() {
//   const [style, setStyle] = React.useState({
//     border: "2px solid green",
//     width: "100%",
//     height: "300px",
//     backgroundColor: "#f0f0f0", // starting color
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     textAlign: "center",
//     fontSize: "1.5em",
//     padding: "10px",
//     borderRadius: "5px",
//   });

//   const changeStyle = () => {
//     setStyle((prevStyle) => ({
//       ...prevStyle,
//       backgroundColor:
//         prevStyle.backgroundColor === "#f0f0f0" ? "blue" : "#f0f0f0",
//     }));
//   };

//   return (
//     <>
//       <p style={style}>Hello World</p>
//       <button onClick={changeStyle}>Theme Change</button>
//     </>
//   );
// }

// export default QueryExample;



// Tailwind use case example
import React, { useState } from "react";
function style() {
  const [isBlue, setIsBlue] = useState(false);
  return (
    <>
      <p
        className={`border-2 border-green-600 w-full h-[300px] text-center text-xl p-4 rounded shadow ${
          isBlue ? "bg-blue-500 text-white" : "bg-gray-100"
        }`}
      >
        Hello World
      </p>

      <button
        onClick={() => setIsBlue((prev) => !prev)}
        className="mt-2 p-2 bg-gray-300 rounded hover:bg-gray-400"
      >
        Theme Change
      </button>
    </>
  );
}

export default style;
