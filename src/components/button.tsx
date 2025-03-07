import React, { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
  onClick: () => void; 
  variant?: "primary" | "secondary";
}>;

const Button: React.FC<ButtonProps> = ({ onClick, variant = "primary", children }) => {
  const buttonClasses = {
    primary: "text-lime-400 border-lime-500",
    secondary: "text-white border-white",
  };

  return (
    <button
      className={`px-4 py-1 flex items-center gap-2 hover:bg-gray-700 border rounded-md font-semibold transition-colors duration-300 bg-transparent cursor-pointer ${buttonClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
