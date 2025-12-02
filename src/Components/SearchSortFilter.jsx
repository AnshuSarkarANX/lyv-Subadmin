import { FaBoxes } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { useLocation } from "react-router";

const SearchSortFilter = ({heading,search= false,sort= false,filter= false,totalItems}) => {
    const location = useLocation();
    const currentSegment = location.pathname.split("/")[1];
  return (
    <div className="space-y-[20px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FaBoxes className="text-[#5F6EC9]" />
          <span className="font-semibold H-18 leading-[13px] text-[#808080]">
            {heading || currentSegment}
          </span>
          {totalItems && (
            <div className="font-semibold H-18 leading-[13px] text-[#5F6EC9] border border-[#16041F1A] rounded-[5px] px-[10px] ">
              {totalItems}
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          {sort && (
            <div className="h-[30px] w-[30px]  rounded-[10px] border-[0.5px] border-[#1F1F1F1A] flex items-center justify-center bg-white">
              <FaBoxes className="text-[#AEAAB1] w-[12px] h-[12px]" />
            </div>
          )}
          {sort && (
            <div className="h-[30px] w-[30px]  rounded-[10px] border-[0.5px] border-[#1F1F1F1A] flex items-center justify-center bg-white">
              <FaBoxes className="text-[#AEAAB1] w-[12px] h-[12px]" />
            </div>
          )}
          {filter && (
            <div className="h-[30px] w-[30px]  rounded-[10px] border-[0.5px] border-[#1F1F1F1A] flex items-center justify-center bg-white">
              <FaBoxes className="text-[#AEAAB1] w-[12px] h-[12px]" />
            </div>
          )}
        </div>
      </div>
      {search && (
        <div className="flex items-center w-full gap-[5px] focus:outline-purple-500 border-1 bg-white rounded-[15px] border-[#1F1F1F1A] p-[10px]">
          <IoSearchOutline className="text-[#5F6EC9] w-[25px] h-[25px] " />
          <input
            type="text"
            placeholder="Search"
            className="w-full focus:outline-none"
          />
        </div>
      )}
    </div>
  );
};

export default SearchSortFilter;
