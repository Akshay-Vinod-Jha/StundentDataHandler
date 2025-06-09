import React from "react";

function YearBlock(props) {
  const h1 =
    "w-full grid grid-cols-2 gap-4 place-content-center place-items-center";
  const spanStyle =
    "rounded-xl p-2 bg-[#66fcf1] border-2 border-black w-full text-black flex justify-center items-center";
  return (
    <div className="w-full flex flex-col justify-center items-center p-2 bg-[#E3E2DF] rounded-xl font-mono font-extrabold tracking-widest text-sm md:text-base lg:text-lg">
      <h1 className={h1}>
        <span className={spanStyle}>Year</span>
        <span
          className={
            spanStyle + " bg-white text-black relative overflow-hidden "
          }
        >
          <div
            className="absolute left-0 top-0 h-full  bg-[#45a29e] z-0"
            style={{
              width: (props.value / props.maxCount) * 100 + "%",
            }}
          ></div>
          <h1 className="z-10 text-black">Count</h1>
        </span>
      </h1>
      <h1 className={h1}>
        <span>{props.year}</span>
        <span className="text-pink-500">
          {props.value}/{props.total}
        </span>
      </h1>
    </div>
  );
}

export default YearBlock;
