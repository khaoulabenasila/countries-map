import { Box, Card, CardContent, Popover } from "@mui/material";
import React from "react";
import MapIcon from "@mui/icons-material/Map";
import FlagIcon from "@mui/icons-material/Flag";
import GroupsIcon from "@mui/icons-material/Groups";
import PublicIcon from "@mui/icons-material/Public";
import LanguageIcon from "@mui/icons-material/Language";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import useStyle from "./style";

const CountryInfo = ({ country, anchorEl, handlePopoverClose }) => {
  const classes = useStyle();
  const countryInfo = [
    {
      title: "Name",
      value: country.name,
      icon: <FlagIcon fontSize="large" className={classes.icon} />
    },
    {
      title: "Continent",
      value: country.continent,
      icon: <PublicIcon fontSize="large" className={classes.icon} />
    },
    {
      title: "Capital",
      value: country.capital,
      icon: <LocationCityIcon fontSize="large" className={classes.icon} />
    },
    {
      title: "Area",
      value: `${country.area} Km²`,
      icon: <MapIcon fontSize="large" className={classes.icon} />
    },
    {
      title: "Population",
      value: country.population,
      icon: <GroupsIcon fontSize="large" className={classes.icon} />
    },
    {
      title: "Languages",
      value: country.languages,
      icon: <LanguageIcon fontSize="large" className={classes.icon} />
    },
    {
      title: "Currencies",
      value: country.currencies,
      icon: (
        <AccountBalanceWalletIcon fontSize="large" className={classes.icon} />
      )
    }
  ];

  return (
    <div>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none"
        }}
        open={true}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Card>
          <CardContent>
            {countryInfo.map((item, index) => {
              return (
                <Box className={classes.containerBox} key={index}>
                  <Box sx={{ mr: 4 }}>{item.icon}</Box>
                  <Box className={classes.boxTitleValue}>
                    <Box component="span" sx={{ mr: 1 }}>
                      {" "}
                      <span className={classes.spanTitle}>{item.title} :</span>
                    </Box>
                    <Box component="p">
                      <span className={classes.spanValue}>{item.value}</span>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </CardContent>
        </Card>
      </Popover>
    </div>
  );
};

export default CountryInfo;
