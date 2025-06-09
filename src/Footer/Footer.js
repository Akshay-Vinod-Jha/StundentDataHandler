import React from "react";
import FooterBg from "./FooterBg";
import SimpleButton from "../Button/SimpleButton";
function Footer() {
  return (
    <FooterBg className="">
      <SimpleButton className="font-mono bg-red-600 px-8 py-2 xl:py-4 xl:px-16 rounded-xl my-2 ">
        Start Journey
      </SimpleButton>
      <SimpleButton className="font-mono bg-red-600 px-8 py-2 xl:py-4 xl:px-16 rounded-xl my-2 ">
        Know More
      </SimpleButton>
    </FooterBg>
  );
}

export default Footer;
