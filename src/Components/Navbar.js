import React from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "antd";

import classes from "./Navbar.module.css";

const activeStyle = "text-blue-500 font-bold";

function Navbar() {
  return (
    <div className=" flex space-x-4 py-2 p-4">
      <div>
        {/* inline title convin */}

        <img
          className="pr-4"
          src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62e29970bd028f59a5fefdc6_logo.png"
        ></img>
        <NavLink
          activeClassName={activeStyle}
          className={
            "mx-2 hover:font-bold hover:text-blue-500 active:text-blue-500 text-black no-underline"
          }
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          activeClassName={activeStyle}
          className={"mx-2 hover:font-bold text-black no-underline"}
          to="/history"
        >
          History
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
