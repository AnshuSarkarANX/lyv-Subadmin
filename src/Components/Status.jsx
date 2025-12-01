

const Status = ({status}) => {
  return (
    <div
      className={`h-[30px] w-[65px] rounded-[10px] text-[14px] font-bold flex items-center justify-center ${
        status
          ? "bg-[#67BF8D]/10 text-[#14974C]"
          : "bg-[#FFBABA] text-[#D8000C]"
      }`}
    >
      {status ? "Active" : "Inactive"}
    </div>
  );
}

export default Status