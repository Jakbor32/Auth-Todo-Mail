import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="menu-item w-5/6 sm:w-auto relative rounded px-8 py-3 overflow-hidden group bg-green-900  hover:bg-gradient-to-r hover:from-green-900 hover:to-green-900 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-700 transition-all ease-out duration-300"
    >
      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-[100vw] ease"></span>
      <span className="relative">
        <span className="relative text-white font-bold">{props.text}</span>
      </span>
    </button>
  );
};

export default Button;
