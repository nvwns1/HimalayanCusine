"use client";
import React from "react";
import { Tooltip } from "react-tooltip";

interface IToolTip {
  id?: string;
  content: string;
  children: React.ReactNode;
  place?: "top" | "bottom" | "left" | "right";
}

const TooltipComponent = ({
  id,
  content,
  place = "bottom",
  children,
}: IToolTip) => {
  const result = content.replace(/\s/g, "");
  const ids = id ?? result;

  return (
    <>
      <div id={ids}>{children}</div>
      <Tooltip
        style={{ fontSize: "12px", letterSpacing: "var( --font-normal)" }}
        anchorSelect={`#${ids}`}
        content={content}
        place={place}
      />
    </>
  );
};

export default TooltipComponent;
