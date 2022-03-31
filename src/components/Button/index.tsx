import { type } from "os";
import { useState } from "react";
import "./style.css";

export type ButtonProps = {
  color?: "primary" | "secondary" | "default";
  type: "contained-hover" | "text" | "outline" | "contained";
  active?: boolean;
  width?: number | string;
  height?: number;
  borderRadius?: number;
  text: string;
  bold?: boolean;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    width,
    height = 44,
    borderRadius,
    color = "default",
    bold,
    active,
  } = props;

  const handleClick = () => {
    props.onClick?.();
  };

  const style = {
    width,
    height,
    borderRadius,
  };

  const renderButton = () => {
    switch (props.type) {
      case "outline":
        return (
          <button
            className={`btn ${active ? "btn--primary" : "btn--outline"} ${
              bold && "btn--bold"
            }`}
            style={style}
            onClick={handleClick}
          >
            {props.text}
          </button>
        );
      default:
        return (
          <button
            onClick={props.onClick}
            className={`btn btn--${color} ${
              props.type === "contained-hover" && "btn--hover"
            } ${bold && "btn--bold"}`}
            style={style}
          >
            {props.text}
          </button>
        );
    }
  };

  return <>{renderButton()}</>;
};
