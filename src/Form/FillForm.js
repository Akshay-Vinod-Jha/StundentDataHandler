import React, { useState } from "react";
import GreetUser from "../Greeting/GreetUser";
function FillForm(props) {
  const [userDataObject, setUserDataObject] = useState({
    name: "",
    roll: "",
    date: "",
    branch: "",
    owner: "Akshay",
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.updateFillForm();
        props.updateAOU(userDataObject);
      }}
      className="grid grid-cols-1 xl:col-span-3 col-span-2 gap-4 w-[90%] xl:grid-cols-2 mt-4"
    >
      <GreetUser username={userDataObject.name}></GreetUser>
      <input
        type="text"
        name="name"
        required="true"
        id="name"
        placeholder="Enter Name Here"
        onChange={(e) => {
          setUserDataObject((previosState) => {
            return { ...previosState, name: e.target.value };
          });
        }}
        className="font-mono font-extrabold tracking-wider  text-sm p-2 rounded-xl"
      />
      <input
        type="number"
        name="roll"
        required="true"
        className="font-mono font-extrabold tracking-wider text-sm p-2 rounded-xl"
        id="roll"
        placeholder="Enter Roll No."
        onChange={(event) => {
          setUserDataObject((previosState) => {
            return { ...previosState, roll: event.target.value };
          });
        }}
      />
      <input
        type="date"
        name="date"
        required="true"
        className="font-mono font-extrabold tracking-wider text-sm p-2 rounded-xl"
        id="date"
        placeholder="Enter Your Birthdate"
        onChange={(e) => {
          setUserDataObject((pastValue) => {
            return { ...pastValue, date: e.target.value };
          });
        }}
      />
      <input
        type="text"
        name="branch"
        id="branch"
        required="true"
        placeholder="Enter Branch Here"
        className="font-mono font-extrabold tracking-wider text-sm p-2 rounded-xl"
        onChange={(e) => {
          setUserDataObject((pastValue) => {
            return { ...pastValue, branch: e.target.value };
          });
        }}
      />
      <button
        className="bg-[#45A29e] xl:col-span-2 mb-4 p-2 rounded-xl font-mono font-extrabold  text-xl text-white"
        isEvent={true}
        onClick={() => {}}
      >
        Submit Me
      </button>
    </form>
  );
}

export default FillForm;
