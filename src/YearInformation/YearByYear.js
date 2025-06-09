import React from "react";
import YearBlock from "./UI/YearBlock";
// import ReturnObject from "./ReturnObject";
const obj = {
  2003: 0,
  2004: 0,
  2005: 0,
  2006: 0,
};
function YearByYear(props) {
  Object.keys(obj).forEach((year) => {
    obj[year] = props.users.filter((value) => {
      return value.date.split("-")[0] === year;
    }).length;
  });
  const arrayOfCounts = Object.keys(obj).map((index) => {
    return obj[index];
  });
  let maxCount = Math.max(...arrayOfCounts);
  const outer =
    "w-[90%] p-2 bg-[#0B0C10] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-start rounded-xl gap-4";
  return (
    <div className={outer}>
      {Object.keys(obj).map((key, index) => {
        return (
          <YearBlock
            year={key}
            key={index}
            value={obj[key]}
            total={props.users.length}
            maxCount={maxCount}
          ></YearBlock>
        );
      })}
    </div>
  );
}

export default YearByYear;
