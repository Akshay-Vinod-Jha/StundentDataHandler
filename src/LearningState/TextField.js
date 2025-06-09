import React, { useEffect, useState } from "react";

function TextField(props) {
  const [textareaValue, setTextAreaValue] = useState(props.sendValue);
  useEffect(() => {
    setTextAreaValue(props.sendValue);
  }, [props.sendValue]);
  return (
    <div>
      <input
        className="border-none outline-none rounded-xl p-4 text-right"
        type="number"
        name="number"
        id="number"
        value={textareaValue}
        onChange={(event) => {
          setTextAreaValue(event.target.value);
          props.updateNumericValue(event.target.value);
        }}
      />
    </div>
  );
}

export default TextField;
