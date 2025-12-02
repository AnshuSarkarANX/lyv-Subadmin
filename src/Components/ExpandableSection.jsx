/* eslint-disable no-unused-vars */
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function ExpandableSection({
  title,
  children,
  defaultOpen = true
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleOpen = (e) => {
    // Prevent inner ExpandableSection clicks from affecting parent
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="bg-white rounded-[15px] px-[20px] pb-[20px] cursor-pointer cardShadow hover:shadow-md transition-all duration-300">
      <div
        className="flex items-center justify-between  pt-[20px]"
        onClick={toggleOpen}
      >
        <h1 className="H-20 font-bold ">{title}</h1>
        <div
          className={`transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"
          }`}
        >
          <IoIosArrowUp className="size-[20px] text-[#808080BF]" />
        </div>
      </div>

      {isOpen && (
        <div className="text-[#444] pt-[15px] bg-white transition-all duration-300 ease-in-out">
          {children}
        </div>
      )}
    </div>
  );
}
