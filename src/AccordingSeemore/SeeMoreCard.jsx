import React, { useState } from "react";

function SeeMoreText() {
  const cardData = [
    {
      id: 1,
      title: "Hospital Management System",
      text: `Hospital management system me doctor, patient, schedule aur billing module hota hai. React + Firebase se ye project bana sakte hain. Isme authentication, live appointments aur smart scheduling hota hai.`,
    },
    {
      id: 2,
      title: "Smart City Dashboard",
      text: `Smart city dashboard me sensors data, live traffic, air quality aur waste management analytics show hota hai. Isme chart.js aur Firebase realtime data use hota hai. Ye ek modern city monitoring system banata hai.`,
    },
    {
      id: 3,
      title: "AI Healthcare Chatbot",
      text: `AI healthcare chatbot patients ke questions answer karta hai aur unhe appointment ya medicine reminder bhi de sakta hai. Ye React + OpenAI API se build hota hai aur advanced NLP features provide karta hai.`,
    },
    {
      id: 4,
      title: "E-commerce Dashboard",
      text: `E-commerce dashboard me products, orders aur analytics module hota hai. React + Firebase ya API se realtime data dikha sakte hain. Ye long descriptions ko compact karne ke liye See More / See Less feature useful hai.`,
    },
  ];

  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h2 className="text-2xl font-bold text-center mb-8">
        ⚡ Multiple See More / See Less Cards
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {cardData.map((item, index) => {
          const isExpanded = expanded[index] || false;
          const shortText =
            item.text.length > 100 ? item.text.slice(0, 100) + "..." : item.text;

          return (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-5 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-2 leading-relaxed">
                {isExpanded ? item.text : shortText}
              </p>
              {item.text.length > 100 && (
                <button
                  onClick={() => toggleExpand(index)}
                  className="text-blue-600 font-bold text-sm hover:underline"
                >
                  {isExpanded ? "See Less" : "See More"}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SeeMoreText;
