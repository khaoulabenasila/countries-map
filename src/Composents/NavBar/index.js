import React from "react";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import useStyle from "./style";
const NavBar = () => {
  const classes = useStyle();
  return (
    <div>
      <ul className={classes.unorderedListWrapper}>
        <Link to="/" className={classes.linkWrapper}>
          <li className={classes.listItemWrapper}>
            {" "}
            <HomeOutlinedIcon /> Home
          </li>
        </Link>
        <Link to="/about" className={classes.linkWrapper}>
          <li className={classes.listItemWrapper}>
            {" "}
            <InfoOutlinedIcon /> About
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
