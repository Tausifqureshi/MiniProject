import React, { useState } from "react";

function SeeText() {
  const [showMore, setShowMore] = useState(false);

  const text = `Yeh ek lamba text hai jo hum card ke andar dikhayenge.
Jab user 'See More' dabaye to pura text open ho jaye,
aur 'See Less' dabaye to wapas chhota ho jaye.
Is tarah ka code but tailwind me first
Is tarah hum long descriptions ko compact bana sakte hain.`;

  const shortText = text.slice(0, 80); // kitna text dikhana hai (adjustable)

  return (
    <div className="w-96 p-5 bg-white rounded-xl shadow-md mx-auto mt-10 font-sans">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        React See More / See Less
      </h3>

      <p className="text-gray-600 text-sm mb-2 leading-relaxed">
        {showMore ? text : shortText + "..."}
      </p>

      <button
        onClick={() => setShowMore(!showMore)}
        className="text-blue-600 font-bold text-sm hover:underline"
      >
        {showMore ? "See Less" : "See More"}
      </button>
    </div>
  );
}

export default SeeText;


