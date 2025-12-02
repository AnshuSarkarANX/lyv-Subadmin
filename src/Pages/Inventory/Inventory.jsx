import { FaBoxes } from "react-icons/fa";
import InventoryCard from "../../Components/InventoryCard";
import SearchSortFilter from "../../Components/SearchSortFilter"
import { BiEdit } from "react-icons/bi";
import { useNavigate } from "react-router";

const Inventory = () => {
  const navigate = useNavigate();
    const inventoryItem = [
      {
        item: "Bedding",
        icon: <FaBoxes className="text-[#5F6EC9]" />,
        status: 1,
        aval: 100,
        inUse: 0,
        damage: 0,
        dType: "Pick-Up",
        rType: "Non-returnable",
        actions: [
          {
            icon: <BiEdit className="text-[#AEAAB1] w-[25px] h-[25px]" />,
            name: "Add Quantity",
            onClick: () => navigate("/inventory/add-quantity", {state: {quantity: 100}}),
          },
          {
            icon: <BiEdit className="text-[#AEAAB1] w-[25px] h-[25px]" />,
            name: "Report Damage",
            onClick: () => navigate("/inventory/report-damage"),
          },
        ],
      },
    ];
  return (
    <div>
      <SearchSortFilter search={true} sort={true} filter={true} heading="Inventory" />
      <div className="space-y-[20px] mt-[20px]">
        {inventoryItem.map((item) => (
          <InventoryCard key={item.item} Item={item} />
        ))}
      </div>
    </div>
  );
}

export default Inventory