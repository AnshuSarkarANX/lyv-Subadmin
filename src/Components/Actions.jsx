import { useState, useRef, useEffect } from "react";

const Actions = ({  items = [] }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative inline-block" ref={ref}>
      {/* Trigger button (you can pass any React node) */}
      <div onClick={() => setOpen((v) => !v)}>
        
          <button className="px-3 py-1 rounded-md bg-[#5F6EC9] text-white ">
           <span className="font-bold">Action </span> ▾
          </button>
        
      </div>

      {open && (
        <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white shadow-xl">
          {items.map(({ icon: Icon, name, onClick }, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                onClick?.();
                setOpen(false);
              }}
              className="flex w-full items-center gap-3 px-4 py-2 text-sm text-gray-400 "
            >
              {Icon}
              <span className="text-[#AEAAB1]">{name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Actions;
