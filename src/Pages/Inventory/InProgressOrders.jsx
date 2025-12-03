import { useState } from "react";
import SearchSortFilter from "../../Components/SearchSortFilter";
import OrderCard from "../../Components/OrderCard";

const InProgressOrders = () => {
  const [tab, setTab] = useState("delivery");
  const orders = [
    {
      order_id: "123456",
      room_no: "101",
      total_items: 5,
      delivery_date: "2023-08-15",
      status: "in_progress",
    },
    {
      order_id: "125456",
      room_no: "101",
      total_items: 5,
      delivery_date: "2023-08-15",
      status: "in_progress",
    },
  ];
  return (
    <div className="space-y-[20px]">
      <SearchSortFilter back heading={"In Progress Orders"} sort filter search />
      <div className="bg-white  rounded-[10px] flex  items-center h-[50px]">
        <div
          className={`w-1/2 h-full flex items-center justify-center cursor-pointer rounded-[10px] transition-all duration-300 ${
            tab === "delivery" ? "bg-[#F4F5FF]  " : ""
          }`}
          onClick={() => setTab("delivery")}
        >
          <p
            className={
              tab === "delivery"
                ? "gradient-text font-bold "
                : "text-[#787878BF]"
            }
          >
            Delivery
          </p>{" "}
        </div>
        <div
          className={`w-1/2  h-full flex items-center justify-center cursor-pointer rounded-[10px] transition-all duration-300 ${
            tab === "pickup" ? "bg-[#F4F5FF] " : ""
          }`}
          onClick={() => setTab("pickup")}
        >
          <p
            className={
              tab === "pickup" ? "gradient-text font-bold " : "text-[#787878BF]"
            }
          >
            Pickup
          </p>
        </div>
      </div>

      {orders.map((order, index) => (
        <OrderCard item={order} pickup={tab === "pickup"} />
      ))}
    </div>
  );
}

export default InProgressOrders