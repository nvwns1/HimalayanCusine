import React from "react";
import ISvgIconProps from "../interfaces/ISVGProps";

const HamburgerIcon = (props: ISvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 8h22M5 16h22M5 24h22"
      />
    </svg>
  );
};

export default HamburgerIcon;
