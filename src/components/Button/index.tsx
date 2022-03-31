// import { useState, useEffect } from "react"
import { Button } from "../../types";
import "./style.css";

export const ButtonReact: React.FC<Button> = (props) => {
  const buttonType = props;

  return (
    <div>
      {buttonType.type === 1 ? (
        <button className="contained-hover">{buttonType.name}</button>
      ) : buttonType.type === 2 ? (
        <button>goodbye</button>
      ) : buttonType.type === 3 ? (
        <button></button>
      ) : (
        <button></button>
      )}
    </div>
  );
};
