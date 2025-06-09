// import Header from "./Header/Header";
import WrapUserInfoRelated from "./WrapUserInfoRelated/WrapUserInfoRelated";
import FillForm from "./Form/FillForm";
import UnNecessaryForm from "./Form/UnNecessaryForm";
// import Footer from "./Footer/Footer";
import React, { useEffect, useState } from "react";
import HideFilter from "./FIlterReq/HideFilter";
import ShowFIlter from "./FIlterReq/ShowFIlter";
import YearByYear from "./YearInformation/YearByYear";
import ShowWarning from "./ShowWarning";
function App() {
  const arrayOfUsersAre = [
    {
      name: "akshay",
      roll: "217034",
      branch: "Information Technology",
      owner: "Akshay",
      date: "2006-01-15",
    },
    {
      name: "aditya",
      roll: "217070",
      branch: "Information Technology",
      owner: "Akshay",
      date: "2006-01-15",
    },
    {
      name: "sujit",
      roll: "217040",
      branch: "Computer Enginering",
      owner: "Akshay",
      date: "2006-01-15",
    },
  ];
  useEffect(() => {
    JSON.parse(localStorage.getItem("arrayOfOptions"))
      ? console.log("ahhe")
      : localStorage.setItem(
          "arrayOfOptions",
          JSON.stringify(["Home", "About", "Contact"])
        );
  }, []);
  useEffect(() => {
    JSON.parse(localStorage.getItem("arrayOfUsers"))
      ? console.log("aahe")
      : localStorage.setItem("arrayOfUsers", JSON.stringify(arrayOfUsersAre));
  }, []);
  //video lecture 5.2
  // const [arrayOfOptions, updateArrayOfOptions] = useState([]);
  const [arrayOfUsers, updateArrayOfUsers] = useState([]);
  useEffect(() => {
    // updateArrayOfOptions(JSON.parse(localStorage.getItem("arrayOfOptions")));
    updateArrayOfUsers(JSON.parse(localStorage.getItem("arrayOfUsers")));
  }, []);
  const updateAOU = (passedObject) => {
    console.log(passedObject);
    let temp = [...arrayOfUsers];
    temp.push(passedObject);
    updateArrayOfUsers(temp);
    localStorage.setItem("arrayOfUsers", JSON.stringify(temp));
  };

  const changeArrayOfUsers = (replacementName, index) => {
    console.log("success");
    let temp = [...arrayOfUsers];
    temp[index].name = replacementName;
    updateArrayOfUsers(temp);
    localStorage.setItem("arrayOfUsers", JSON.stringify(arrayOfUsers));
  };
  const [fillForm, setFillForm] = useState(false);
  const [filter, setFilter] = useState(false);
  const [filterText, setFilterText] = useState("");
  const updateFillForm = () => {
    setFillForm(!fillForm);
  };
  const deleteAnRecord = (index) => {
    let temp = [...arrayOfUsers];
    temp.splice(index, 1);
    updateArrayOfUsers(temp);
    localStorage.setItem("arrayOfUsers", JSON.stringify(temp));
  };
  const updateFilter = () => {
    setFilter((prevResponse) => {
      return !prevResponse;
    });
  };
  const updateFilterText = (changingValue) => {
    setFilterText(changingValue);
  };
  const [deleteUser, setDeleteUser] = useState([false, 0, "Unknown"]);
  return (
    <React.Fragment>
      {deleteUser[0] && (
        <ShowWarning
          setDeleteUser={setDeleteUser}
          deleteAnRecord={deleteAnRecord}
          deleteUser={deleteUser}
        />
      )}
      <div className="w-screen h-auto min-h-screen flex flex-col items-center justify-center bg-[#1F2833]">
        <div></div>
        {/* <Header options={arrayOfOptions}></Header> */}
        {fillForm && (
          <FillForm
            updateFillForm={updateFillForm}
            updateAOU={updateAOU}
          ></FillForm>
        )}
        {!fillForm && (
          <UnNecessaryForm updateFillForm={updateFillForm}></UnNecessaryForm>
        )}
        {!filter && <ShowFIlter updateFilter={updateFilter}></ShowFIlter>}
        {filter && (
          <HideFilter
            updateFilter={updateFilter}
            filterText={filterText}
            updateFilterText={updateFilterText}
          ></HideFilter>
        )}
        <YearByYear users={arrayOfUsers}></YearByYear>
        <WrapUserInfoRelated
          filterText={filterText}
          change={changeArrayOfUsers}
          users={arrayOfUsers}
          deleteAnRecord={deleteAnRecord}
          setDeleteUser={setDeleteUser}
        ></WrapUserInfoRelated>
        {/* <Footer></Footer> */}
      </div>
    </React.Fragment>
  );
}

export default App;

// {
/* {Array(5)
  .fill(true)
  .map((value, index) => {
    return <LeraningState key={index}></LeraningState>;
  })} */
// }
//5.4
