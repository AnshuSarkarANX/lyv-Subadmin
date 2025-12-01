import { useEffect } from "react";
import { useLocation } from "react-router";
import ActiveLink from "./ActiveLink";
import { RxCross2 } from "react-icons/rx";
import { FaBoxes } from "react-icons/fa";

const SideMenu = ({ menuState, setMenuState }) => {
//   const menuData = useSelector((state) => state.menu);
//   const [logoSrc, setLogoSrc] = useState(LogoFromId());
  const admin = localStorage.getItem("AdminId");

  // Handle dynamic logo when category changes
  useEffect(() => {
    const lastCategoryRef = { current: localStorage.getItem("category") };

    const checkLocalStorage = () => {
      const current = localStorage.getItem("category");
      if (current !== lastCategoryRef.current) {
        lastCategoryRef.current = current;
        // setLogoSrc(LogoFromId());
      }
    };

    const interval = setInterval(checkLocalStorage, 500);

    window.addEventListener("storage", checkLocalStorage);

    return () => {
      clearInterval(interval);
      window.removeEventListener("storage", checkLocalStorage);
    };
  }, []);

  // Wrapper component for scrolling to top on route change
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [location]);
    return children;
  };

  const smapleMenuData = [{
    heading_english: "Inventory",
    totalItems:540,
    link:"/inventory"
    
  }]

  return (
    <div
      className={`fixed inset-0 z-15 transition-opacity duration-300 ${
        menuState ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Darkened Background */}
      <div
        className="side-menu-overlay "
        onClick={() => setMenuState(false)}
        onTouchMove={() => setMenuState(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-xl rounded-tr-[30px] ease-out transition-transform duration-300 ${
          menuState ? "translate-x-0" : "-translate-x-full"
        } w-[75%] max-w-[400px]`}
      >
        {/* Close Button */}
        <div className="flex justify-end mt-[15px] mr-[15px]">
          <div
            className="p-1.5 h-[37px] w-[37px] bg-White rounded-full flex shadow items-center justify-center cursor-pointer"
            onClick={() => setMenuState(false)}
          >
            <RxCross2 className="h-[20px] w-[20px]" />
          </div>
        </div>

        {/* Content Wrapper with Scroll */}
        <div className="flex flex-col h-[calc(100vh-60px)] overflow-y-auto">
          <div className="flex items-center justify-center gap-[20px] px-5 pb-[20px]">
            <img
              className="h-[90px] w-[90px]"
              src={"/assets/logoImage.svg"}
              alt="Logo"
            />
          </div>
          <hr className="my-5 border-[1px] border-solid border-[#6060601A]" />

          {/* Menu Section */}
          <Wrapper>
            <div className="flex flex-col gap-[40px] pl-8 px-5 overflow-y-auto h-content">
              {smapleMenuData.map((item) => (
                <ActiveLink
                  key={item.heading_english}
                  to={item.link}
                  onClick={() => setMenuState(false)}
                >
                  <div className="menuOption flex items-center justify-between gap-4 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <FaBoxes className="text-[#808080]" />
                      <span className="font-semibold H-18 leading-[13px] text-[#808080]">
                        {item.heading_english}
                      </span>
                    </div>

                    <div className="font-semibold H-18 leading-[13px] text-[#5F6EC9] border border-[#16041F1A] rounded-[10px] px-[10px] ">
                      {item.totalItems}
                    </div>
                  </div>
                </ActiveLink>
              ))}
            </div>
          </Wrapper>

         
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
