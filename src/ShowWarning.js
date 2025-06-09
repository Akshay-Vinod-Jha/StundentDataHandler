import React from "react";
import SimpleButton from "./Button/SimpleButton";
import ReactDom from "react-dom";
const First = (props) => {
  return (
    <div
      className="w-full h-screen bg-transparent relative left-0 top-0"
      onClick={() => {
        console.log("outer");
        props.setdeleteuser([false, 0, "Unknown"]);
      }}
    ></div>
  );
};
const Second = (props) => {
  return (
    <div
      onClick={(e) => {
        console.log("inner");
      }}
      className="absolute left-[50vw] w-[50%] top-[50vh] -translate-x-[50%]  overflow-hidden -translate-y-[50%] rounded-md bg-white flex flex-col justify-start items-center"
    >
      <h1 className="w-full py-4 px-4 font-mono mb-2 font-extrabold text-base md:text-lg lg:text-xl xl:text-2xl bg-[#45a29e]">
        Delete Warning
      </h1>
      <h1 className="w-full px-4 py-2 font-mono mb-2 font-extrabold text-sm md:text-base lg:text-base xl:text-lg">
        Do You Really Want To Delete The Information Related To User:{" "}
        <span className="text-[#45a29e]">{props.deleteuser[2]}</span>
      </h1>
      <div className="w-full px-2 gap-0  grid grid-cols-1 lg:grid-cols-2 lg:gap-2 place-content-center place-items-center">
        <SimpleButton
          className="w-full lg:w-[50%] px-4 mx-2 my-2 py-2 self-end font-mono font-extrabold text-base md:text-lg lg:text-xl xl:text-2xl bg-[#45a29e] rounded-md"
          isEvent={true}
          onClick={() => {
            props.setdeleteuser([false, 0, "Unknown"]);
          }}
        >
          Close
        </SimpleButton>
        <SimpleButton
          className="w-full lg:w-[50%] px-4 mx-2 my-2 py-2 self-end font-mono font-extrabold text-base md:text-lg lg:text-xl xl:text-2xl bg-[#45a29e] rounded-md"
          isEvent={true}
          onClick={() => {
            props.setdeleteuser([false, 0, "Unknown"]);
            props.deleteanrecord(props.deleteuser[1]);
          }}
        >
          Delete
        </SimpleButton>
      </div>
    </div>
  );
};
const Third = (props) => {
  return (
    <div className="w-screen absolute z-20 h-screen top-0 left-0 bg-[#000000df]">
      {props.children}
    </div>
  );
};
const ShowWarning = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Third>
          <First setdeleteuser={props.setDeleteUser}></First>
          <Second
            deleteuser={props.deleteUser}
            setdeleteuser={props.setDeleteUser}
            deleteanrecord={props.deleteAnRecord}
          ></Second>
        </Third>,
        document.getElementById("akshay1")
      )}
    </React.Fragment>
  );
};

export default ShowWarning;
