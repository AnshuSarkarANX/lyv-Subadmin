import { useState } from "react"
import OrderStatusTag from "./OrderStatusTag"
import { IoMdCheckmark } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const OrderCard = ({item,pickup}) => {
    const {order_id, room_no,total_items,delivery_date,status} = item
    const dateText = (status) => {
        if(status === "delivered"){
            return "Delivered Date" 
        }
        if(status === "picked-up"){
            return "Picked-Up Date "
        }
        if(status === "out_for_delivery"){
            return "Delivery Date "
        }
        if (status === "ready_for_pickup") {
          return "Pick-Up Date ";
        } else {
         return pickup ? "Future Pickup Date " : "Future Delivery Date "
        }
    }
    const [orderAccepted,setOrderAccepted] = useState(null)
    const [outForDelivery,setOutForDelivery] = useState(null)
    const [orderDelivered, setOrderDelivered] = useState(null);
    const renderButtons = (status) => {
        switch (status) {
          case "pending":
            return (
              <div className="flex items-center justify-between gap-[15px] mt-[20px]">
                <button
                  onClick={() =>
                    orderAccepted !== "declined" && setOrderAccepted("accepted")
                  }
                  className={`px-[20px] py-[10px]  w-1/2 bg-white rounded-[10px] cardShadow border font-bold flex items-center justify-center gap-[10px] transition-all duration-200 ${
                    orderAccepted === "accepted"
                      ? "text-[#14974C] border-[#14974C]"
                      : orderAccepted === "declined"
                      ? "opacity-30 cursor-not-allowed"
                      : "text-[#5F6EC9] border-[#5F6EC9]"
                  }`}
                >
                  <IoMdCheckmark />
                  Accept Order
                </button>
                <button
                  onClick={() =>
                    orderAccepted !== "accepted" && setOrderAccepted("declined")
                  }
                  className={` px-[20px] py-[10px]  w-1/2 bg-white bg-white rounded-[10px]  font-bold cardShadow flex items-center justify-center gap-[10px] transition-all duration-200
                    ${
                      orderAccepted === "declined"
                        ? "text-[#FF5463] border border-[#FF5463]"
                        : orderAccepted === "accepted"
                        ? "opacity-30 cursor-not-allowed"
                        : "text-[#5F6EC9]"
                    }`}
                >
                  <RxCross1 />
                  Decline Order
                </button>
              </div>
            );
            case "out_for_delivery":
              case "ready_for_pickup":
return (
  <button
    onClick={() => !orderDelivered && setOrderDelivered(true)}
    className={`px-[20px] py-[10px] mt-[20px] w-full bg-white rounded-[10px] cardShadow border font-bold flex items-center justify-center gap-[10px] transition-all duration-200 ${
      orderDelivered
        ? "opacity-30 cursor-not-allowed text-text2"
        : "text-[#5F6EC9] border-[#5F6EC9]"
    }`}
  >
     {status === "ready_for_pickup" ? "Order Picked Up" : "Order Delivered"}
  </button>
);
            case "in_progress":
            return (
              <button
                onClick={() => !outForDelivery && setOutForDelivery(true)}
                className={`px-[20px] py-[10px] mt-[20px] w-full bg-white rounded-[10px] cardShadow border font-bold flex items-center justify-center gap-[10px] transition-all duration-200 ${
                  outForDelivery
                    ? "opacity-30 cursor-not-allowed text-text2"
                    : "text-[#5F6EC9] border-[#5F6EC9]"
                }`}
              >
                <IoMdCheckmark /> Mark {pickup ? "Ready to Pickup" : "Out For Delivery"}
              </button>
            );
            case "delivered":
                return null

          default:
            return null;
        }

    }
  return (
    <div className="bg-white rounded-[10px] cardShadow p-[20px]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-text2 H-10">Order Number</p>
          <p className="font-bold H-18">{order_id}</p>
        </div>
        <OrderStatusTag status={status} />
      </div>

      <div className="mt-[15px]">
        <div className="border-t border-[#1F1F1F1A] flex items-center justify-between py-[10px]">
          <p className="font-bold H-14">Room Number</p>
          <p>{room_no}</p>
        </div>
        <div className="border-t border-[#1F1F1F1A] flex items-center justify-between py-[10px]">
          <p className="font-bold H-14">Total Items</p>
          <p>{total_items}</p>
        </div>
        <div className="border-t border-[#1F1F1F1A] flex items-center justify-between pt-[10px]">
          <p className="font-bold H-14">{dateText(status)}</p>
          <p>{delivery_date}</p>
        </div>
      </div>
  
        {renderButtons(status)}
      
    </div>
  );
}

export default OrderCard