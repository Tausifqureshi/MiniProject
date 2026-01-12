import React, { useState, useEffect, version } from "react";

const images = [
  "https://picsum.photos/id/1018/600/300",
  "https://picsum.photos/id/1015/600/300",
  "https://picsum.photos/id/1019/600/300",
];

function ImgSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  // 🔥 AUTO SLIDER
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-[600px] mx-auto text-center">
      {/* IMAGE */}
      <img
        src={images[currentIndex]}
        alt="slider"
        className="w-full rounded-xl transition-all duration-500"
      />

      {/* BUTTONS */}
      <div className="mt-4 flex justify-center gap-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
        >
          Next
        </button>
      </div>

      <h1>{version}</h1>

      {/* DOTS */}
      <div className="flex justify-center mt-3 gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full cursor-pointer transition
              ${
                currentIndex === index
                  ? "bg-gray-900 scale-110"
                  : "bg-gray-400"
              }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImgSlider;
