import React, { useRef } from "react";

function EnterTextField(received) {
  return (
    <div className="font-mono font-extrabold text-3xl text-white p-4 rounded-xl">
      Enter Your Text Here :-
      <input
        type="text"
        name="EnterTextField"
        id="EnterTextField"
        autoFocus="true"
        value={received.defaultValue}
        onChange={(event) => {
          received.toChangeText(event.target.value);
        }}
        className="bg-orange-500 p-4 rounded-xl ml-4"
      />
    </div>
  );
}

export default EnterTextField;
