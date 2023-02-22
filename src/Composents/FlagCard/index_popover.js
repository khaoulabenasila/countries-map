import { Card, CardContent } from "@mui/material";
import React from "react";
import { Redirect } from "react-router";
const FlagCard = ({ countryInfo }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <>
      <Card
        style={{
          height: "150px",
          width: "250px"
        }}
      >
        <CardContent sx={{ p: 0 }}>
          <img
            src={countryInfo.flag}
            alt={countryInfo.name}
            style={{
              height: "150px",
              width: "250px",
              cursor: "pointer"
            }}
            aria-owns={open ? "mouse-over-popover" : undefined}
            //aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          />
        </CardContent>
      </Card>
      {open && (
        // <CountryInfo
        //   country={countryInfo}
        //   anchorEl={anchorEl}
        //   handlePopoverClose={handlePopoverClose}
        // />
        <Redirect push to="/details" />
      )}
    </>
  );
};

export default FlagCard;
