import React, { PropsWithChildren, useState } from "react";

type TooltipProps = PropsWithChildren<{
  text: string;
  position?: "top" | "bottom" | "left" | "right";
  witdh: string;
}>;

const Tooltip: React.FC<TooltipProps> = ({ text, position = "top", children, witdh }) => {
  const [show, setShow] = useState(false);

  const positionClasses = {
    top: "bottom-full mb-2 left-1/2 transform -translate-x-1/2",
    bottom: "top-full mt-2 left-1/2 transform -translate-x-1/2",
    left: "left-full ml-1 top-1/2 transform -translate-y-1/2",
    right: "right-full mr-1 top-1/2 transform -translate-y-1/2",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div
          className={`w-[${witdh}px] absolute bg-gray-800 text-white text-sm p-2 rounded-md border-2 border-px border-white z-10 ${positionClasses[position]}`}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
