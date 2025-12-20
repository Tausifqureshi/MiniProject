import React, { useState } from "react";

export default function SeeMoreAccordion() {
  // Accordion data
  const data = [
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
  ];

  // ✅ State: Accordion open/close ke liye (multiple open allowed)
  const [accordionOpen, setAccordionOpen] = useState({});

  // ✅ State: See More / See Less ke liye
  const [seeMoreExpanded, setSeeMoreExpanded] = useState({});

  //   const toggleAccordions = (index) => { //Single According open karne ke liye.
  //   setAccordionOpen(accordionOpen === index ? null : index);
  // };

  // ✅ Multiple accordion toggle
  const toggleAccordion = (index) => {
    // setAccordionOpen((prev) => ({
    //   ...prev,
    //   [index]: !prev[index], // agar open hai → close, warna open
    // }));

    setAccordionOpen((accordionOpen) => ({
      ...accordionOpen,
      [index]: !accordionOpen[index],// agar true tha to false kar do, agar false tha to true kar do
    }));
  };

  // ✅ See More / See Less toggle
  const toggleSeeMore = (index) => {
    // setSeeMoreExpanded((prev) => ({
    //   ...prev,
    //   [index]: !prev[index],
    // }));

    setSeeMoreExpanded((seeMoreExpanded) => ({
      ...seeMoreExpanded,
      [index]: !seeMoreExpanded[index], // agar true tha to false kar do, agar false tha to true kar do
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h2 className="text-2xl font-bold text-center mb-8">
        ⚡ See More / See Less Accordion
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {data.map((item, index) => {
          // const isOpen = openIndex === index; //Single according open karne ke liye aisa.
          const isOpen = accordionOpen[index] || false; // Multiple accordion open karne ke liye
          const isExpanded = seeMoreExpanded[index] || false;// Multiple see more expanded karne ke liye
          // agar is item ka text expanded hai to true, warna false

          // Short text for See More feature
          const shortText =
            item.text.length > 100
              ? item.text.slice(0, 100) + "..."
              : item.text;

          return (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left focus:outline-none focus-visible:ring focus-visible:ring-blue-300"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <span
                  className={`transform transition-transform duration-300 ${
                    isOpen
                      ? "rotate-180 text-blue-600"
                      : "rotate-0 text-gray-500"
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* Accordion Body */}
              {isOpen && (
                <div className="px-5 pb-4 transition-all duration-500 ease-in-out">
                  <p className="text-gray-600 leading-relaxed">
                    {isExpanded ? item.text : shortText}
                  </p>

                  {/* See More / See Less Button */}
                  {item.text.length > 100 && (
                    <button
                      onClick={() => toggleSeeMore(index)}
                      className="mt-2 text-blue-600 font-semibold hover:underline"
                    >
                      {isExpanded ? "See Less" : "See More"}
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
