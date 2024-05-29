import React from "react";
import ISvgIconProps from "../interfaces/ISVGProps";

const FacebookIconSvg = (props: ISvgIconProps) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M40 20.05C40 9.01005 31.04 0.0500488 20 0.0500488C8.96 0.0500488 0 9.01005 0 20.05C0 29.73 6.88 37.79 16 39.65V26.05H12V20.05H16V15.05C16 11.19 19.14 8.05005 23 8.05005H28V14.05H24C22.9 14.05 22 14.95 22 16.05V20.05H28V26.05H22V39.9501C32.1 38.9501 40 30.43 40 20.05Z"
        fill="white"
      />
    </svg>
  );
};

export default FacebookIconSvg;
