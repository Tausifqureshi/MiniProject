import { useState } from "react";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaCaretDown,
} from "react-icons/fa";

export default function DropdownSelection() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Select your options");

  const options = [
    {
      name: "Github",
      icon: <FaGithub className="text-[#171515]" />,
      url: "https://github.com",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-[#E1306C]" />,
      url: "https://instagram.com",
    },
    {
      name: "Linkedin",
      icon: <FaLinkedin className="text-[#0E76A8]" />,
      url: "https://linkedin.com",
    },
    {
      name: "Facebook",
      icon: <FaFacebook className="text-[#4267B2]" />,
      url: "https://facebook.com",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="text-[#1DA1F2]" />,
      url: "https://twitter.com",
    },
  ];

  const handleSelect = (opt) => {
    setSelected(opt.name);
    setOpen(false);
    window.open(opt.url, "_blank");
  };

  return (
    <div className="w-[95%] sm:w-[85%] md:w-[400px] lg:w-[420px] xl:w-[450px] mx-auto mt-20">
      {/* Select Button */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between bg-white h-[55px] px-5 
        text-base sm:text-lg font-normal rounded-lg shadow cursor-pointer"
      >
        <span>{selected}</span>

        <FaCaretDown
          className={`text-xl sm:text-2xl transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Options */}
      <ul
        className={`bg-white shadow rounded-lg overflow-hidden transition-all duration-500 ${
          open ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        {options.map((opt, index) => (
          <li
            key={index}
            onClick={() => handleSelect(opt)}
            className="flex items-center h-[55px] px-4 cursor-pointer hover:bg-[#f0f6fb]"
          >
            {opt.icon}
            <span className="ml-3 text-base sm:text-lg text-gray-700">
              {opt.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
