import React from "react";
import { CiSearch } from "react-icons/ci";
import SimpleButton from "../Button/SimpleButton";
function ShowFIlter(props) {
  return (
    <div className="w-[90%] my-8 rounded-xl bg-[#E3E2DF] grid grid-cols-1 place-content-center place-items-center p-4">
      <SimpleButton
        className="p-4 w-[50%] rounded-xl flex justify-center items-center font-mono tet-white border-2 border-black bg-[#66FCF1]"
        onClick={() => {
          window.scrollTo(0, 0);
          props.updateFilter();
        }}
        isEvent={true}
      >
        Search
        <CiSearch className="ml-4 text-xl"></CiSearch>
      </SimpleButton>
    </div>
  );
}

export default ShowFIlter;
