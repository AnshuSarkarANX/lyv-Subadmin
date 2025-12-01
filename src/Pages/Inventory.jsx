import { FaBoxes } from "react-icons/fa";
import InventoryCard from "../Components/InventoryCard";
import SearchSortFilter from "../Components/SearchSortFilter"
import { BiEdit } from "react-icons/bi";

const Inventory = () => {
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
            name: "Edit",
            onClick: () => {},
          },
          {
            icon: <BiEdit className="text-[#AEAAB1] w-[25px] h-[25px]" />,
            name: "Delete",
            onClick: () => {},
          },
        ],
      },
    ];
  return (
    <div>
      <SearchSortFilter />
      <div className="space-y-[20px] mt-[20px]">
        {inventoryItem.map((item) => (
          <InventoryCard key={item.item} Item={item} />
        ))}
      </div>
    </div>
  );
}

export default Inventory