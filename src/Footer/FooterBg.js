import React from "react";

function FooterBg(props) {
  return (
    <div
      className={
        "w-screen fixed bottom-0 left-0 bg-orange-500 flex flex-row justify-evenly items-centers xl:justify-around col-span-2   xl:col-span-3" +
        props.className
      }
    >
      {props.children}
    </div>
  );
}

export default FooterBg;
