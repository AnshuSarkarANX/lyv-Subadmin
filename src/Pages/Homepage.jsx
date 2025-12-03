import { IoIosArrowUp } from "react-icons/io"
import SearchSortFilter from "../Components/SearchSortFilter"
import { FaRegHourglass } from "react-icons/fa"
import HomePageCard from "../Components/HomePageCard"


const sampleItems = [
  {
    icon: <IoIosArrowUp className="size-[20px] text-[#808080BF]" />,
    label: "Delivery",
    totalItems: "540",
    pending: "120",
    inProgress: "300",
    outForDelivery: "80",
    delivered: "40",
    returnDue: "10",
    completed: "200",
  },
  {
    icon: <FaRegHourglass className="size-[20px] text-[#808080BF]" />,
    label: "Pick-up",
    totalItems: "120",
    pending: "60",
    inProgress: "300",
    outForDelivery: "80",
    delivered: "40",
    returnDue: "10",
    completed: "200",
  },
];
const Homepage = () => {
  return (
    <div className="space-y-[20px]">
    
    <SearchSortFilter heading="Home" totalItems={"540"}/>
    {sampleItems.map((item) => (
      <HomePageCard key={item.label} item={item} />
    ))}
    </div> 

  )
}

export default Homepage