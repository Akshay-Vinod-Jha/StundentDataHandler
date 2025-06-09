import React from "react";
import SimpleButton from "../Button/SimpleButton";
function UnNecessaryForm(props) {
  return (
    <div className="w-[90%]  mt-4 rounded-xl bg-[#E3E2DF] grid grid-cols-1 place-content-center place-items-center p-4">
      <SimpleButton
        className="p-4 w-[50%] rounded-xl  font-mono text-black border-2 border-black bg-[#66FCF1]"
        onClick={() => {
          props.updateFillForm();
          window.scrollTo(0, 0);
        }}
        isEvent={true}
      >
        Add Users
      </SimpleButton>
    </div>
  );
}

export default UnNecessaryForm;
