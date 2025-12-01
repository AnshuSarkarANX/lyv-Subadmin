
import { HiMenuAlt2 } from "react-icons/hi";
import { FaRegBell } from "react-icons/fa";
const Navbar = ({ setMenuState }) => {
  return (
    <div
      className="flex items-center justify-between p-[20px] rounded-b-[15px]"
      style={{
        background:
          "linear-gradient(152.21deg, rgba(255, 255, 255, 0.75) 48.96%, rgba(238, 240, 255, 0.75) 79.55%, rgba(219, 222, 249, 0.75) 94.97%, rgba(196, 201, 239, 0.75) 246.7%)",
      }}
    >
      <div className="flex gap-2.5 items-center">
        <div className="h-[40px] w-[40px]  rounded-[15px] border-[0.5px] border-[#1F1F1F1A] flex items-center justify-center" onClick={() => setMenuState(true)}>
          <HiMenuAlt2 className="text-[20px]" />
        </div>
        <div className="h-[40px] w-[40px]  rounded-[15px] border-[0.5px] border-[#1F1F1F1A] flex items-center justify-center">
          <img
            src="/assets/logoImage.svg"
            alt=""
            className="h-[30px] w-[30px]"
          />
        </div>
      </div>
      <div className="flex gap-2.5 items-center">
        <div className="h-[40px] w-[40px]  rounded-[15px] border-[0.5px] border-[#1F1F1F1A] flex items-center justify-center">
          <FaRegBell className="text-[20px]" />
        </div>
        <div className="h-[40px] w-[40px]  rounded-[15px] border-[0.5px] border-[#1F1F1F1A] flex items-center justify-center">
          <HiMenuAlt2 className="text-[20px]" />
        </div>
      </div>
    </div>
  );
}

export default Navbar