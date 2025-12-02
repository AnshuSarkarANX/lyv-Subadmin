import { useState } from "react";
import { Button } from "../../Components/Button";
import SearchSortFilter from "../../Components/SearchSortFilter"
import { useLocation, useNavigate } from "react-router";


const AddQuantityPage = () => {
    const location = useLocation()
    const {quantity} = location.state || {quantity: 0};
    const [count, setCount] = useState(quantity || 0);
    const navigate = useNavigate();
  return (
    <div className="space-y-[50px]">
      <SearchSortFilter heading="Add Quantity" />

      <div className="flex items-center justify-center gap-[24px] w-full">
        <div
          className="border-2 rounded-full w-[50px] h-[50px] flex items-center justify-center text-[30px] text-[#5F6EC9] font-bold border-[#5F6EC9]"
          style={{
            boxShadow: "0px 5px 40px 5px rgba(95, 110, 201, 0.20)",
          }}
          onClick={() => setCount(Math.max(count - 1, 0))}
        >
          -
        </div>
        <div
          className="w-[60vw] max-w-[240px] flex flex-col items-center justify-center bg-white  rounded-full h-[60vw] max-h-[240px]"
          style={{
            boxShadow: "0px 5px 50px 5px rgba(95, 110, 201, 0.30)",
          }}
        >
          <h1 className="text-[96px] font-bold gradient-text mt-[-25px]">
            {count}
          </h1>
          <h3 className="mt-[-15px]">Available Beds</h3>
        </div>
        <div
          className="border-2 rounded-full w-[50px] h-[50px] flex items-center justify-center text-[30px] text-[#5F6EC9] font-bold border-[#5F6EC9]"
          style={{
            boxShadow: "0px 5px 40px 5px rgba(95, 110, 201, 0.20)",
          }}
          onClick={() => setCount(count + 1)}
        >
          +
        </div>
      </div>
      <Button text="Save Changes" widthClass="w-full" onClick={()=> navigate(-1)} />
    </div>
  );
}

export default AddQuantityPage