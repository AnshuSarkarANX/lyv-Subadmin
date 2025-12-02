export const Button = ({ text,widthClass, disabled, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`
            ${widthClass} py-[10px] rounded-[10px] cursor-pointer text-[16px] font-bold capitalize
            text-white 
            transition-all duration-300
            hover:scale-90
            focus:outline-none 
            disabled:opacity-50 disabled:cursor-not-allowed
          
        `}
        style={{
          background:
            "linear-gradient(120deg, #5F6EC9 0%,#5F6EC9 50%, #B2BDFF 100%)",
        }}
      >
        {text}
      </button>
    </div>
  );
};
