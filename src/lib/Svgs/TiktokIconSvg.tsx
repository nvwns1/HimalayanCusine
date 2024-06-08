import React from "react";
import ISvgIconProps from "../interfaces/ISVGProps";

const TiktokIconSvg = (props: ISvgIconProps) => {
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
        d="M4.16669 20.0001C4.16669 12.5367 4.16669 8.80341 6.48502 6.48508C8.80335 4.16675 12.535 4.16675 20 4.16675C27.4634 4.16675 31.1967 4.16675 33.515 6.48508C35.8334 8.80341 35.8334 12.5351 35.8334 20.0001C35.8334 27.4634 35.8334 31.1967 33.515 33.5151C31.1967 35.8334 27.465 35.8334 20 35.8334C12.5367 35.8334 8.80335 35.8334 6.48502 33.5151C4.16669 31.1967 4.16669 27.4651 4.16669 20.0001Z"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.56 18.3468C16.1934 18.1535 13.0767 18.4718 11.55 21.2968C10.0234 24.1218 11.5617 27.0618 12.5234 28.1785C13.4717 29.2235 16.4867 31.2018 19.685 29.2702C20.4784 28.7918 21.4667 28.4335 22.5867 24.6918L22.4567 9.96851C22.24 11.5902 24.0317 15.3935 29.13 15.8435"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TiktokIconSvg;
