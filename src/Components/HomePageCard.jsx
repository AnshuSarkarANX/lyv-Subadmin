import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { FaRegHourglass } from "react-icons/fa6";
import { useNavigate } from "react-router";

const HomePageCard = ({ item , defaultOpen = true}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const navigate = useNavigate();

  const toggleOpen = (e) => {
    // Prevent inner ExpandableSection clicks from affecting parent
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="bg-white rounded-[15px] px-[20px] pb-[20px] cursor-pointer cardShadow hover:shadow-md transition-all duration-300">
      <div
        onClick={toggleOpen}
        className="flex items-center justify-between  pt-[20px]"
      >
        <div className="flex items-center gap-[10px]">
          {item.icon}
          <p>{item.label}</p>
          <div className="font-semibold H-18 leading-[13px] text-[#5F6EC9] border border-[#16041F1A] rounded-[10px] px-[10px] ">
            {item.totalItems}
          </div>
        </div>
        <IoIosArrowUp
          className={`size-[20px] text-[#808080BF] transform transition-transform duration-300 ${
            isOpen ? "" : "rotate-180"
          }`}
        />
      </div>

      {isOpen && (
        <div className="grid grid-cols-2 gap-[12px] mt-[15px]">
          {/*Pending Orders*/}
          <div
            className="p-[15px] border border-[#1F1F1F1A] rounded-[10px] flex gap-[10px] h-[74px]"
            onClick={() => navigate("/pending-orders")}
          >
            <div className="border border-[#1F1F1F1A] px-[13.5px] py-[11px] rounded-[5px] flex items-center justify-center">
              <FaRegHourglass className="h-[20px] w-[15px] text-[#808080BF]" />
            </div>
            <div>
              <p className="H-10 text-nowrap">Pending Orders</p>
              <p className="H-20 font-bold text-[#FF384A]">{item.pending}</p>
            </div>
          </div>
          {/*In Progress Orders*/}
          <div
            className="p-[15px] border border-[#1F1F1F1A] rounded-[10px] flex gap-[10px] h-[74px]"
            onClick={() => navigate("/in-progress-orders")}
          >
            <div className="border border-[#1F1F1F1A] px-[13.5px] py-[11px] rounded-[5px] flex items-center justify-center">
              <FaRegHourglass className="h-[20px] w-[15px] text-[#808080BF]" />
            </div>
            <div>
              <p className="H-10 text-nowrap"> In Progress Orders</p>
              <p className="H-20 font-bold text-[#E58D00]">{item.inProgress}</p>
            </div>
          </div>
          {/*Out for Delivery Orders*/}
          <div
            className="p-[15px] border border-[#1F1F1F1A] rounded-[10px] flex gap-[10px] h-[74px]"
            onClick={() => navigate("/out-for-delivery-orders")}
          >
            <div className="border border-[#1F1F1F1A] px-[13.5px] py-[11px] rounded-[5px] flex items-center justify-center">
              <FaRegHourglass className="h-[20px] w-[15px] text-[#808080BF]" />
            </div>
            <div>
              <p className="H-10 text-nowrap">Out for Delivery</p>
              <p className="H-20 font-bold text-[#5F6EC9]">
                {item.outForDelivery}
              </p>
            </div>
          </div>
          {/*Delivered Orders*/}
          <div className="p-[15px] border border-[#1F1F1F1A] rounded-[10px] flex gap-[10px] h-[74px]" onClick={() => navigate("/delivered-orders")}>
            <div className="border border-[#1F1F1F1A] px-[13.5px] py-[11px] rounded-[5px] flex items-center justify-center">
              <FaRegHourglass className="h-[20px] w-[15px] text-[#808080BF]" />
            </div>
            <div>
              <p className="H-10 text-nowrap">Delivered Orders</p>
              <p className="H-20 font-bold text-[#14974C]">{item.delivered}</p>
            </div>
          </div>
          <div className="p-[15px] border border-[#1F1F1F1A] rounded-[10px] flex gap-[10px] h-[74px]">
            <div className="border border-[#1F1F1F1A] px-[13.5px] py-[11px] rounded-[5px] flex items-center justify-center">
              <FaRegHourglass className="h-[20px] w-[15px] text-[#808080BF]" />
            </div>
            <div>
              <p className="H-10 text-nowrap">Return Due Orders</p>
              <p className="H-20 font-bold text-[#FF384A]">{item.returnDue}</p>
            </div>
          </div>
          <div className="p-[15px] border border-[#1F1F1F1A] rounded-[10px] flex gap-[10px] h-[74px]">
            <div className="border border-[#1F1F1F1A] px-[13.5px] py-[11px] rounded-[5px] flex items-center justify-center">
              <FaRegHourglass className="h-[20px] w-[15px] text-[#808080BF]" />
            </div>
            <div>
              <p className="H-10 text-nowrap">Completed Orders</p>
              <p className="H-20 font-bold text-[#14974C]">{item.completed}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePageCard