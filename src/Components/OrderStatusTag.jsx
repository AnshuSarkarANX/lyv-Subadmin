const OrderStatusTag = ({status}) => {
  const renderTag = (status) => {
    switch (status) {
      case "pending":
        return "bg-[#FF5463]/5 text-[#FF384A]";
      case "delivered":
        case "picked-up":
        return "bg-[#14974C]/5 text-[#14974C]";
      case "in_progress":
        return "bg-[#FFD341]/5 text-[#FFD341]";
      case "out_for_delivery":
      case "ready_for_pickup":
        return "bg-[#5F6EC9]/5 text-[#5F6EC9]";
      default:
        return "";
    }
  };
  const StatusText = status
    .toLowerCase()
    .replace(/_/g, " ") // replace all underscores
    .replace(/\b\w/g, (c) => c.toUpperCase()); // capitalize each word
  return (
    <div
      className={`px-[10px] py-[2px] rounded-[10px] font-bold H-14 ${renderTag(
        status
      )}`}
    >
      {StatusText}
    </div>
  );
}

export default OrderStatusTag