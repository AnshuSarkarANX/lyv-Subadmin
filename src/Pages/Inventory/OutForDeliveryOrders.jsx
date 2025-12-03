import OrderCard from "../../Components/OrderCard";
import SearchSortFilter from "../../Components/SearchSortFilter";


const OutForDeliveryOrders = () => {
const orders = [
  {
    order_id: "123456",
    room_no: "101",
    total_items: 5,
    delivery_date: "2023-08-15",
    status: "out_for_delivery",
  },
  {
    order_id: "125456",
    room_no: "101",
    total_items: 5,
    delivery_date: "2023-08-15",
    status: "out_for_delivery",
  },
];
    return (
    <div className="space-y-[20px]">
      <SearchSortFilter back heading={"Out For Delivery Orders"} sort filter search />
      {orders.map((order, index) => (
        <OrderCard item={order} />
      ))}
    </div>
  )
}

export default OutForDeliveryOrders