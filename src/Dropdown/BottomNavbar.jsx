// import Recat from "react";
// function BottomNavbar() {
//   return (
//     <>
//       <h1> BottomNavbar</h1>
//     </>
//   );
// }
// export default BottomNavbar;



// import React, { useState } from "react";

// const BottomNavbar = () => {
//   const [open, setOpen] = useState(false);
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);

//   const sendMessage = () => {
//     if (!message.trim()) return;
//     setMessages([...messages, message]);
//     setMessage("");
//   };

//   return (
//     <>
//       {/* Chat Button */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="fixed bottom-5 right-5 bg-[#0A66C2] text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg hover:bg-blue-700"
//       >
//         💬
//       </button>

//       {/* Chat Box */}
//       {open && (
//         <div className="fixed bottom-24 right-5 w-80 h-[420px] bg-white rounded-xl shadow-2xl flex flex-col border">
          
//           {/* Header */}
//           <div className="bg-[#0A66C2] text-white px-4 py-3 flex justify-between items-center rounded-t-xl">
//             <span className="font-semibold">Messaging</span>
//             <button onClick={() => setOpen(false)}>✖</button>
//           </div>

//           {/* Body */}
//           <div className="flex-1 p-3 overflow-y-auto space-y-2">
//             {messages.length === 0 && (
//               <p className="text-gray-400 text-center mt-20">
//                 No messages yet
//               </p>
//             )}

//             {messages.map((msg, i) => (
//               <div
//                 key={i}
//                 className="bg-blue-100 px-3 py-2 rounded-lg text-sm w-fit max-w-[80%]"
//               >
//                 {msg}
//               </div>
//             ))}
//           </div>

//           {/* Footer */}
//           <div className="p-3 border-t flex gap-2">
//             <input
//               type="text"
//               placeholder="Write a message..."
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//             />
//             <button
//               onClick={sendMessage}
//               className="bg-[#0A66C2] text-white px-4 rounded-lg text-sm hover:bg-blue-700"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default BottomNavbar;









import React, { useState } from "react";

const users = [
  { id: 1, name: "Rahul Sharma", avatar: "👨‍💻" },
  { id: 2, name: "Anjali Verma", avatar: "👩‍💼" },
  { id: 3, name: "Amit Singh", avatar: "🧑‍🚀" },
];

const BottomNavbar = () => {
  const [open, setOpen] = useState(false);
  const [activeUser, setActiveUser] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState({});

  const sendMessage = () => {
    if (!message.trim() || !activeUser) return;

    setMessages((prev) => ({
      ...prev,
      [activeUser.id]: [...(prev[activeUser.id] || []), message],
    //   { ...PreviousState, [event.target.name]: event.target.value };
    }));
    setMessage("");
  };



//   const sendMessage = () => {

//   // ❌ Agar message empty hai ya koi user select nahi hai
//   // to function yahin stop ho jaaye
//   if (!message.trim() || !activeUser) return;

//   // ✅ Messages state update ho rahi hai
//   setMessages((prev) => ({

//     // 🔹 Step 1: purana poora messages object copy karo
//     // taaki baaki users ke chats delete na ho
//     ...prev,

//     // 🔹 Step 2: jis user ke saath chat open hai
//     // uski ID ko key bana rahe hain
//     [activeUser.id]: [

//       // 🔹 Step 3: agar us user ke purane messages hain
//       // to unko copy karo
//       ...(prev[activeUser.id] || []),

//       // 🔹 Step 4: naya message last me add karo
//       message
//     ],
//   }));

//   // ✅ Step 5: message bhejne ke baad input box clear
//   setMessage("");
// };




return (
  <>
    {/* MAIN CHAT BOX */}
    <div
      className={`fixed bottom-0 right-6 w-72 bg-white shadow-2xl rounded-t-xl
      transition-transform duration-300 flex flex-col
      ${open ? "translate-y-0" : "translate-y-[370px]"}`}
      style={{ height: "420px" }}
    >
      {/* HEADER (same bar for open / close) */}
      <div
        onClick={(e) => {
          e.stopPropagation();   // parent click rok do
          setOpen(!open); // toggle open / close
          setActiveUser(null); //sirf chat close karo
        }}
        className="bg-[#0A66C2] text-white px-4 py-3 flex justify-between items-center rounded-t-xl cursor-pointer"
      >
        {activeUser ? (
          <div
            className="flex items-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setActiveUser(null)}> ← </button> {/* chat se bahar jaane ke liye */}
            <span className="font-semibold">{activeUser.name}</span>
          </div>
        ) : (
          <span className="font-medium">Messaging</span>
        )}

        {/* 🔥 ONLY ARROW (LinkedIn style) */}
        <span className="text-lg font-bold">
          {open ? "▼" : "▲"}
        </span>
      </div>

   
   {open && (
  <>
    {activeUser ? ( //agar activeUser ne user id select kiya hai to ye show karo
      /* ================= CHAT WINDOW ================= */
      <>
        {/* Messages */}
        <div className="flex-1 p-3 overflow-y-auto space-y-2">
          {(messages[activeUser.id] || []).length === 0 && (
            <p className="text-gray-400 text-center mt-20">
              Start a conversation
            </p>
          )}

          {(messages[activeUser.id] || []).map((msg, i) => (
            <div
              key={i}
              className="bg-blue-100 px-3 py-2 rounded-lg text-sm w-fit max-w-[80%]"
            >
              {msg}
            </div>
          ))}
        </div>

        {/* INPUT */}
        <div className="p-3 border-t flex gap-2">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Write a message..."
            className="flex-1 border rounded-lg px-3 py-2 text-sm"
          />
          <button
            onClick={sendMessage}
            className="bg-[#0A66C2] text-white px-4 rounded-lg text-sm"
          >
            Send
          </button>
        </div>
      </>
    ) : ( //agar activeUser ne select nhi kiya hai to ye show karo
      /* ================= USERS LIST ================= */
      <div className="flex-1 overflow-y-auto">
        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => setActiveUser(user)}
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer border-b"
          >
            <span className="text-2xl">{user.avatar}</span>
            <span className="text-sm font-medium">{user.name}</span>
          </div>
        ))}
      </div>
    )}
  </>
)}

    </div>
  </>
);


};

export default BottomNavbar;











//    {open && (
//         <>
//           {/* USERS LIST */}
//           {!activeUser && ( // sirf tab dikhana jab koi user select na ho.user select karne ke baad ye automatically hide ho jaaye ga !activeUser && yaha condition ki waza se is condition ka matlab ture hai tohi show karna warna nhi.
//             <div className="flex-1 overflow-y-auto">
//               {users.map((user) => (
//                 <div
//                   key={user.id}
//                   onClick={() => setActiveUser(user)}
//                   className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer border-b"
//                 >
//                   <span className="text-2xl">{user.avatar}</span>
//                   <span className="text-sm font-medium">{user.name}</span>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* CHAT WINDOW */}
//           {activeUser && ( // sirf tab dikhana jab koi user select ho
//             <>
//               {/* Messages */}
//               <div className="flex-1 p-3 overflow-y-auto space-y-2">
//                 {(messages[activeUser.id] || []).length === 0 && (
//                   <p className="text-gray-400 text-center mt-20">
//                     Start a conversation
//                   </p>
//                 )}

//                 {(messages[activeUser.id] || []).map((msg, i) => (
//                   <div
//                     key={i}
//                     className="bg-blue-100 px-3 py-2 rounded-lg text-sm w-fit max-w-[80%]"
//                   >
//                     {msg}
//                   </div>
//                 ))}
//               </div>

//               {/* INPUT */}
//               <div className="p-3 border-t flex gap-2">
//                 <input
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//                   placeholder="Write a message..."
//                   className="flex-1 border rounded-lg px-3 py-2 text-sm"
//                 />
//                 <button
//                   onClick={sendMessage}
//                   className="bg-[#0A66C2] text-white px-4 rounded-lg text-sm"
//                 >
//                   Send
//                 </button>
//               </div>
//             </>
//           )}
//         </>
//       )}