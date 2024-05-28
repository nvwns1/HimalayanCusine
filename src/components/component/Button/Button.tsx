import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";
import TooltipComponent from "../Tooltip/Tooltip";

interface IButton extends React.ComponentPropsWithoutRef<"button"> {
  size?: "sm" | "md";
  background?: "filled" | "outline";
  label?: string;
  content?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

const Button = ({
  content,
  size = "md",
  background = "filled",
  children,
  disabled = false,
  ...rest
}: IButton) => {
  const { className, ...attr } = rest;
  const btnClasses = {
    btnRoot: classNames(
      styles.btnRoot,
      className,
      styles[size],
      styles[background],
      disabled && styles.disabled
    ),
  };
  const button = (
    <button className={btnClasses.btnRoot} {...attr}>
      <span className={styles.buttonLabel}>{children}</span>
    </button>
  );

  if (content !== undefined && content.length > 0) {
    return <TooltipComponent content={content}>{button}</TooltipComponent>;
  }

  return button;
};

export default Button;
