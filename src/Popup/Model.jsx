import React, { useState, useRef, useEffect,  version } from "react";

const Model = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (!message.trim()) return;
    setMessages([...messages, message]);
    setMessage("");
  };

  const outSiteClose = useRef(null);
  
   //Click outside to close the chat box
 useEffect(() => {
    const handleClickOutside = (e) => {
      if ( outSiteClose.current &&!outSiteClose.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Chat Button */}
      {/* <h1> </h1 */}
      <button
        onClick={(e) => {
            e.stopPropagation(); // 🔥 ye line important
            setOpen(!open);
        }}
        className="fixed bottom-5 right-5 bg-[#0A66C2] text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg hover:bg-blue-700"
      >
        💬,
      </button>

      {/* Chat Box */}
      {open && (
        <div ref={outSiteClose} className="fixed bottom-24 right-5 w-80 h-[420px] bg-white rounded-xl shadow-2xl flex flex-col border">
          
          {/* Header */}
          <div className="bg-[#0A66C2] text-white px-4 py-3 flex justify-between items-center rounded-t-xl">
            <span className="font-semibold">Messaging</span>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          {/* Body */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.length === 0 && (
              <p className="text-gray-400 text-center mt-20">
                No messages yet
              </p>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className="bg-blue-100 px-3 py-2 rounded-lg text-sm w-fit max-w-[80%]"
              >
                {msg}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-3 border-t flex gap-2">
            <input
              type="text"
              placeholder="Write a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-[#0A66C2] text-white px-4 rounded-lg text-sm hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Model;
