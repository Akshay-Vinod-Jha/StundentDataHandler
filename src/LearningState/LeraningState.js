import React, { useState } from "react";
import SimpleButton from "../Button/SimpleButton";
import TextField from "./TextField";
function LeraningState() {
  const [numericValue, setNumericValue] = useState(0);
  const updateNumericValue = (value) => {
    console.log("changed Successfully");
    setNumericValue(value);
  };
  return (
    <div className="w-100 h-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 m-4">
      <SimpleButton
        className="bg-green-500  p-2 rounded-xl"
        isEvent={true}
        onClick={() => {
          setNumericValue(numericValue + 1);
        }}
      >
        Increment
      </SimpleButton>
      <TextField
        sendValue={numericValue}
        updateNumericValue={updateNumericValue}
      ></TextField>
      <SimpleButton
        className="bg-red-500  p-2 rounded-xl"
        isEvent={true}
        onClick={() => {
          setNumericValue(numericValue - 1);
        }}
      >
        Decrement
      </SimpleButton>
    </div>
  );
}

export default LeraningState;
