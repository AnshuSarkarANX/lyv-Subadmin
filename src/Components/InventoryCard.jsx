import Actions from "./Actions";
import Status from "./Status";


const InventoryCard = ({Item}) => {
    const {item,icon,status,aval,inUse,damage,dType,rType,actions} = Item;
  return (
    <div className="border-[0.6px] border-[#6060601A] rounded-[20px] p-[20px] cardShadow bg-white">
      <div className="flex items-center justify-between mb-[12px]">
        <div className="space-y-[5px]">
          <p>Inventory name & Icon</p>
          <div className="flex items-center gap-[10px]">
            {icon}
            <p className="font-bold">{item}</p>
          </div>
        </div>

        <Status status={status} />
      </div>
      <div>
        <div className="flex items-center justify-between border-t-1 border-[#1F1F1F1A] py-[15px]">
          <p className="font-semibold">Available</p>
          <p>{aval}</p>
        </div>
        <div className="flex items-center justify-between border-t-1 border-[#1F1F1F1A] py-[15px]">
          <p className="font-semibold">In Use</p>
          <p>{inUse}</p>
        </div>
        <div className="flex items-center justify-between border-t-1 border-[#1F1F1F1A] py-[15px]">
          <p className="font-semibold">Damage</p>
          <p>{damage}</p>
        </div>
        <div className="flex items-center justify-between border-t-1 border-[#1F1F1F1A] py-[15px]">
          <p className="font-semibold">Delivery Type</p>
          <p>{dType}</p>
        </div>
        <div className="flex items-center justify-between border-t-1 border-[#1F1F1F1A] py-[15px]">
          <p className="font-semibold">Return Type</p>
          <p>{rType}</p>
        </div>
        <div className="flex items-center justify-between border-t-1 border-[#1F1F1F1A] py-[15px]">
          <p className="font-semibold">Damage</p>
          <Actions items={actions} />
        </div>
      </div>
    </div>
  );
}

export default InventoryCard