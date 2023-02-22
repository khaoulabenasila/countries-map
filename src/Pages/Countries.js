import React from "react";
import { ImageList, ImageListItem } from "@mui/material";
import FlagCard from "../Composents/FlagCard";

const Countries = ({ countriesList }) => {
  return (
    <div>
      <ImageList
        gap={12}
        sx={{
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))!important"
        }}
      >
        {countriesList.map((country, index) => {
          return (
            <ImageListItem key={index}>
              <FlagCard countryInfo={country} />
            </ImageListItem>
          );
        })}
      </ImageList>
    </div>
  );
};

export default Countries;
