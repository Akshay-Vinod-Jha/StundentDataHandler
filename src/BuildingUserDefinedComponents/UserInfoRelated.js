import React, { useRef, useState } from "react";
import "./UserInfoRelated.css";
import GreetUser from "../Greeting/GreetUser";
import SimpleButton from "../Button/SimpleButton";
function UserInfoRelated(ThePassedParameter) {
  const [show, updateShow] = useState(false);
  const nameRef = useRef();
  //using variables
  // const owner = "Akshay";
  //checking filter,map,reduce

  // let array = [10, 20, 30, 40, 50, 60];
  // console.log("map");
  // let response = array.map((value, index, array) => {
  //   return value * value;
  // });
  // console.log(response);
  // console.log("filter");
  // response = array.filter((value, index, array) => {
  //   return value % 3 === 0;
  // });
  // console.log(response);
  // console.log("reduce");
  // response = array.reduce((pastValue, currentValue) => {
  //   console.log(pastValue, currentValue);
  //   return pastValue + currentValue;
  // });
  // console.log(response);

  //returing jsx:- javascript xl
  // console.log("another", ThePassedParameter.isindex);
  return (
    <div className="w-[90%] mb-1 text-black bg-[#1F2833] rounded-xl gap-3 py-2 font-mono font-extrabold tracking-wider grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 place-content-center grid-rows-7">
      {/* //multilevel passing of the props */}
      <GreetUser username={ThePassedParameter.combinedData.name}></GreetUser>
      {/* finishing passing multi level props */}
      <div className="bg-[#66fcf1] p-2 rounded-xl text-black row-span-1 xl:row-span-2">
        <span className="text-[#45a29e]">Name:-</span>
        {ThePassedParameter.combinedData.name}
      </div>
      <div className="bg-[#66fcf1] p-2 rounded-xl row-span-1 xl:row-span-2">
        <span className="text-[#45a29e]">Enrollment No:-</span>
        {ThePassedParameter.combinedData.roll}
      </div>
      <div className="bg-[#66fcf1] p-2 rounded-xl row-span-1 xl:row-span-2">
        <span className="text-[#45a29e]">Branch:-</span>
        {ThePassedParameter.combinedData.branch}
      </div>
      <div className="bg-[#66fcf1] p-2 rounded-xl row-span-1 xl:row-span-2">
        <span className="text-[#45a29e]">Date:-</span>
        {ThePassedParameter.combinedData.date}
      </div>
      <div className="p-2 rounded-xl xl:col-span-2 bg-[#66fcf1]">
        <div className="">
          <span className="text-[#45a29e]">Owner:-</span>
          {ThePassedParameter.combinedData.owner}
        </div>
      </div>
      {show && (
        <div className="w-full grid grid-cols-3 gap-2 xl:col-span-2">
          <input
            type="text"
            name="nameToChange"
            id="nameToChange"
            className="col-span-2 p-2 rounded-xl text-gray-500"
            placeholder="Enter The Name To Change"
            ref={nameRef}
          />
          <SimpleButton
            className=" p-2 rounded-xl bg-[#45a29e]"
            isEvent={true}
            onClick={() => {
              updateShow(!show);
              ThePassedParameter.change(
                nameRef.current.value,
                ThePassedParameter.isindex
              );
            }}
          >
            Change It
          </SimpleButton>
        </div>
      )}
      {!show && (
        <SimpleButton
          className="bg-[#45a29e] p-2 rounded-xl xl:col-span-2 cursor-move"
          isEvent={true}
          onClick={() => {
            updateShow(!show);
          }}
        >
          Change the User Name
        </SimpleButton>
      )}
      <SimpleButton
        className="bg-[#0b0c10] text-white border-2 border-white p-2 rounded-xl xl:col-span-2 cursor-move"
        isEvent={true}
        onClick={() => {
          // ThePassedParameter.deleteAnRecord(ThePassedParameter.isindex);
          window.scrollTo(0, 0);
          ThePassedParameter.setDeleteUser([
            true,
            ThePassedParameter.isindex,
            ThePassedParameter.combinedData.name,
          ]);
        }}
      >
        Delete User
      </SimpleButton>
    </div>
  );
}

export default UserInfoRelated;
