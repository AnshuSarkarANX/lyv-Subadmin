import { FiMinus, FiPlus } from "react-icons/fi";

export default function CounterInput({ count, setCount }) {
  const currentCount =
    isNaN(count) || count === null || count === undefined ? 0 : Number(count);

  const handleIncrement = () => {
    setCount(currentCount + 1);
  };

  const handleDecrement = () => {
    if (currentCount > 0) {
      setCount(currentCount - 1);
    }
  };

  return (
    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden w-fit">
      {/* Decrement Button */}
      <button
        onClick={handleDecrement}
        disabled={count == 0}
        className="p-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FiMinus className="text-orange-500 text-lg" />
      </button>

      {/* Count Display */}
      <div className="p-1  bg-white  text-center">
        <span className="text-gray-800 font-medium">{currentCount}</span>
      </div>

      {/* Increment Button */}
      <button
        onClick={handleIncrement} 
        className="p-2  transition-colors"
      >
        <FiPlus className="text-orange-500 text-lg" />
      </button>
    </div>
  );
}
