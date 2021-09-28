import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavigationItem.module.css";

// MATERIAL IMPORTS
import { theme } from "../../../MaterialColorTheme/MaterialColorTheme";

const NavigationItem = (props) => {
  return (
    <li className={styles.list}>
      <NavLink
        to={props.to}
        exact={props.exact}
        style={{ color: theme.palette.secondary.main }}
        className={styles.text}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
