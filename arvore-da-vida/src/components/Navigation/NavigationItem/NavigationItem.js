import React from "react";
import { NavLink } from "react-router-dom";

// MATERIAL IMPORTS
import { theme } from "../../../MaterialColorTheme/MaterialColorTheme";

const NavigationItem = (props) => {
  return (
    <li style={{ margin: "0 10px" }}>
      <NavLink
        to={props.to}
        exact={props.exact}
        style={{
          textDecoration: "none",
          color: theme.palette.secondary.main,
          display: "flex",
          textAlign: "center",
        }}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
