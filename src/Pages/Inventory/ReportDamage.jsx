import { useState } from "react";
import CounterInput from "../../Components/CounterInput"
import SearchSortFilter from "../../Components/SearchSortFilter"
import ExpandableSection from "../../Components/ExpandableSection";
import { TbAirConditioningDisabled } from "react-icons/tb";
import { Button } from "../../Components/Button";

const ReportDamage = () => {
    const [count,setCount] = useState(0)
    const reasons = [
      "Insufficient Cooling",
      "Unusual Noise",
      "Unit Overheating",
      "Heavy Vibration",
      "Coil Freezing",
    ];
      const [selectedReasons, setSelectedReasons] = useState([]);
  return (
    <div className="space-y-[20px]">
      {" "}
      <SearchSortFilter heading="Report Damage" />
      <div className="p-[15px] bg-white rounded-[5px] cardShadow flex items-center justify-between mt-[30px]">
        <p className="font-bold H-20">Damage Items</p>
        <CounterInput count={count} setCount={setCount} />
      </div>
      <ExpandableSection title="Select Reason">
        {reasons.map((r, index) => (
          <div
            key={index}
            className=" my-[10px] rounded-[15px] flex items-center justify-between gap-[10px] p-[10px] px-[15px] cardShadow"
            onClick={() => {
              setSelectedReasons(
                selectedReasons.includes(r)
                  ? selectedReasons.filter((item) => item !== r)
                  : [...selectedReasons, r]
              );
            }}
          >
            <div className="flex items-center  gap-[10px]">
              <TbAirConditioningDisabled size={20} />
              <p className="text-[#1F1F1F] text-[16px]">{r}</p>
            </div>

            <input
              className="w-[15px] h-[15px] rounded-[5px] "
              type="checkbox"
              name="reason"
              value={r}
              checked={selectedReasons.includes(r)}
            />
          </div>
        ))}
<label className="font-bold text-text2">Add Comment</label>
        <textarea
          label="Add A Comment"
          type="textarea"
          placeholder="Add A Comment"
          className={"mt-[10px] w-full h-[100px] rounded-[15px] border border-[#808080]/50 p-[10px]"}
       
        />
      </ExpandableSection>
      <Button text="Save Changes" widthClass={"w-full"}
       />
    </div>
  );
}

export default ReportDamage