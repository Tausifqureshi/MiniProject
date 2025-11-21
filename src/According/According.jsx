import React, { useState } from "react";

export default function According() {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionData = [
    {
      id: 1,
      title: "Hospital Management System",
      text: "Hospital management system me doctor, patient, schedule aur billing module hota hai. React + Firebase se ye project bana sakte hain. Isme authentication, live appointments aur smart scheduling hota hai.",
    },
    {
      id: 2,
      title: "Smart City Dashboard",
      text: "Smart city dashboard me sensors data, live traffic, air quality aur waste management analytics show hota hai. Isme chart.js aur Firebase realtime data use hota hai. Ye ek modern city monitoring system banata hai.",
    },
    {
      id: 3,
      title: "AI Healthcare Chatbot",
      text: "AI healthcare chatbot patients ke questions answer karta hai aur unhe appointment ya medicine reminder bhi de sakta hai. Ye React + OpenAI API se build hota hai aur advanced NLP features provide karta hai.",
    },
  ];
 
  const handleToggle = (index) => {
    setOpenIndex(openIndex !== index ? index : null);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h2 className="text-2xl font-bold text-center mb-8">
        ⚡ React Accordion (Single Component)
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {accordionData.map((item, index) => {
          const isOpen = openIndex === index; // Single accordion open check

          return (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300"
            >
              {/* Header */}
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <span
                  className={`transform transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-blue-600" : "rotate-0 text-gray-500"
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* Body */}
              <div
                className={`transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-60 px-5 pb-4 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p className="text-gray-600">{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
