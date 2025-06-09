import React from "react";
import { LiaPoopSolid } from "react-icons/lia";
import { MdOutlineReportProblem } from "react-icons/md";
import { FcSearch } from "react-icons/fc";
import { TbZoomReplace } from "react-icons/tb";

function ShowError() {
  return (
    <div className="w-[90%] col-span-1 md:col-span-2 lg:col-span-3 bg-red-600 rounded-xl font-mono font-extrabold tracking-widest text-white flex  flex-col justify-center items-center p-4 my-4">
      <h1 className="flex justify-center items-center md:hidden lg:hidden">
        {" "}
        No Results Found <LiaPoopSolid className="ml-4"></LiaPoopSolid>
      </h1>
      <h1 className="hidden md:flex md:justify-center md:items-center lg:hidden">
        Oops Something went Wrong...
        <MdOutlineReportProblem className="ml-4"></MdOutlineReportProblem>
      </h1>
      <h1 className="hidden md:hidden mb-4 lg:flex lg:justify-center lg:items-center">
        No Results Found For Your Search...{" "}
        <FcSearch className="ml-4"></FcSearch>
      </h1>
      <h1 className="hidden md:hidden lg:flex lg:justify-center lg:items-center">
        Try With Other Searches...
        <TbZoomReplace className="ml-4"></TbZoomReplace>
      </h1>
    </div>
  );
}

export default ShowError;
