import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import useStyle from "./style";
const NavBar = () => {
  const classes = useStyle();
  const [isHomeActive, setIsHomeActive] = useState(true);
  const [isAboutActive, setIsAboutActive] = useState(false);
  return (
    <div className={classes.navContainer}>
      <ul className={classes.unorderedListWrapper}>
        <Link
          to="/"
          className={classes.linkWrapper}
          onClick={() => {
            setIsHomeActive(true);
            setIsAboutActive(false);
          }}
        >
          <li
            className={
              isHomeActive
                ? classes.listItemWrapperActive
                : classes.listItemWrapperInactive
            }
          >
            {" "}
            <HomeOutlinedIcon fontSize="large" /> Home
          </li>
        </Link>
        <Link
          to="/about"
          className={classes.linkWrapper}
          onClick={() => {
            setIsAboutActive(true);
            setIsHomeActive(false);
          }}
        >
          <li
            className={
              isAboutActive
                ? classes.listItemWrapperActive
                : classes.listItemWrapperInactive
            }
          >
            {" "}
            <InfoOutlinedIcon fontSize="large" /> About
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
