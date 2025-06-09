import React from "react";

function GreetUser(ReceivedName) {
  return (
    <div className="text-white font-mono tracking-widest xl:col-span-2 flex justify-start gap-2 items-end">
      Welcome
      <span className="text-[#66fcf1] font-extrabold">
        {ReceivedName.username}
      </span>
    </div>
  );
}

export default GreetUser;
