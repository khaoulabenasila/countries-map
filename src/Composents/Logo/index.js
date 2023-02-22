import React from "react";
import useStyle from "./style";

const Logo = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <img className={classes.img} src="logo192.png" alt="logo" />
      <span className={classes.text}>React World</span>
    </div>
  );
};
export default Logo;
