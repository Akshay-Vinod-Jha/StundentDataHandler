import React from "react";
import SimpleButton from "../Button/SimpleButton";
import { FaRunning } from "react-icons/fa";

function HideFilter(props) {
  return (
    <div className="w-[90%] my-4 grid grid-cols-3 gap-2 xl:col-span-2">
      <input
        type="text"
        name="nameToChange"
        id="nameToChange"
        className="col-span-2 py-3 px-2 rounded-xl text-gray-500"
        placeholder="Search by Name"
        autoFocus="true"
        onChange={(e) => {
          props.updateFilterText(e.target.value);
        }}
      />
      <SimpleButton
        className=" py-3 px-2 rounded-xl  hover:bg-[#45a29db2] flex justify-center items-center gap-2 bg-[#45a29e]"
        isEvent={true}
        onClick={() => {
          props.updateFilter();
          props.updateFilterText("");
          window.scrollTo(0, 0);
        }}
      >
        Close Tab<FaRunning></FaRunning>
      </SimpleButton>
    </div>
  );
}

export default HideFilter;
