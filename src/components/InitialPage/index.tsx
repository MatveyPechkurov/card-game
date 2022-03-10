import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { assignName } from "../../redux/actions";
export const InitialPage = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  return (
    <div className={"container"}>
      <input
        className={"container_input"}
        placeholder={"Enter your name here"}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <NavLink onClick={() => dispatch(assignName(inputValue))} to="/game">
        {" "}
        Start game!
      </NavLink>
    </div>
  );
};
