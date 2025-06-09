import React from "react";
import SimpleButton from "../Button/SimpleButton";
function Header(props) {
  //header with specified naviagation options
  return (
    <div className="w-screen fixed top-[0%] left-[0%] bg-orange-500 flex flex-row justify-end gap-4 py-4 pr-8 pl-0 text-gray-900 font-mono font-extrabold text-sm md:text-base lg:text-lg xl:text-xl md:gap-6 lg:gap-8 xl:gap-10 mb-4">
      {props.options.map((value) => {
        return (
          <SimpleButton className="bg-black p-2 rounded-xl w-max hover:bg-white hover:text-black duration-300">
            {value}
          </SimpleButton>
        );
      })}
    </div>
  );
}

export default Header;
