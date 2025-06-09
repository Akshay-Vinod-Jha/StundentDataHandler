import React from "react";
import printHelloWorld from "../AllFilesToExport/PrintHelloWorld";
import { returnMuumyName as myMuumyName } from "../AllFilesToExport/PrintHelloWorld";
import byWorld, { akshay, impFun } from "../AllFilesToExport/printByWorld";
import * as FirstBundle from "../AllFilesToExport/BundledReturn";

function ExportDifferently() {
  return (
    <div
      className="w-screen flex-col h-screen bg-gray-700 flex justify-center items-center font-mono
 font-extrabold tracking-widest text-white text-3xl"
    >
      Hello World
      <br />
      {printHelloWorld}
      <br />
      {myMuumyName}
      <br />
      {byWorld}
      <br />
      {akshay}
      <br />
      {impFun()}
      <br />
      {FirstBundle.default}
      <br />
      {FirstBundle.name}
      <br />
      {FirstBundle.fatherName}
      <br />
      {FirstBundle.surname}
      <br />
      <div className="lastDiv"></div>
    </div>
  );
}

export default ExportDifferently;
