import React from "react";

function DisplayTextField(received) {
  return (
    <div className="font-mono font-extrabold text-3xl text-white p-4 rounded-xl">
      You Entered :-
      <input
        type="text"
        name="DisplayTextField"
        id="DisplayTextField"
        value={received.typedValue}
        className="bg-green-500 p-4 rounded-xl ml-4"
      />
    </div>
  );
}

export default DisplayTextField;
