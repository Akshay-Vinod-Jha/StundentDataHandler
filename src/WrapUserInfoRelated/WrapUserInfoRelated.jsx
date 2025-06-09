import React from "react";
import UserInfoRelated from "../BuildingUserDefinedComponents/UserInfoRelated";
import RemoveMe from "../ExtraComponents/RemoveMe";
import ShowError from "../Error/ShowError";
function WrapUserInfoRelated(props) {
  // console.log(props.users.length);
  return (
    <>
      <div className="w-[90%]  grid place-content-center place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {props.filterText === "" ? (
          props.users.length === 0 ? (
            <ShowError></ShowError>
          ) : (
            props.users.map((separateUser, index) => {
              // console.log(index);
              return (
                <UserInfoRelated
                  key={index}
                  combinedData={separateUser}
                  change={props.change}
                  isindex={index}
                  deleteAnRecord={props.deleteAnRecord}
                  setDeleteUser={props.setDeleteUser}
                ></UserInfoRelated>
              );
            })
          )
        ) : props.users.filter((separateUser, index) => {
            return separateUser.name.indexOf(props.filterText) !== -1;
          }).length === 0 ? (
          <ShowError></ShowError>
        ) : (
          props.users
            .filter((separateUser, index) => {
              return separateUser.name.indexOf(props.filterText) !== -1;
            })
            .map((separateUser, index) => {
              // console.log(index);
              return (
                <UserInfoRelated
                  key={index}
                  combinedData={separateUser}
                  change={props.change}
                  isindex={index}
                  deleteAnRecord={props.deleteAnRecord}
                  setDeleteUser={props.setDeleteUser}
                ></UserInfoRelated>
              );
            })
        )}
      </div>
      <RemoveMe />
    </>
  );
}

export default WrapUserInfoRelated;
