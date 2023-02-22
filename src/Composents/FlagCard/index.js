import { Card, CardContent } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const FlagCard = ({ countryInfo }) => {
  return (
    <Link to="/details" state={countryInfo}>
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
          />
        </CardContent>
      </Card>
    </Link>
  );
};

export default FlagCard;
