import React from "react";
import { useLocation } from "react-router-dom";
import MapIcon from "@mui/icons-material/Map";
import GroupsIcon from "@mui/icons-material/Groups";
import PublicIcon from "@mui/icons-material/Public";
import LanguageIcon from "@mui/icons-material/Language";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Avatar, Box, Card, CardMedia, Typography } from "@mui/material";
import useStyle from "./style";
import Map from "./Map";
const CountryDetails = () => {
  const classes = useStyle();
  const location = useLocation();
  const country = location.state;
  const countryInfo = [
    {
      title: "Continent",
      value: country.continent,
      icon: <PublicIcon fontSize="large" className={classes.icon} />,
    },
    {
      title: "Capital",
      value: country.capital,
      icon: <LocationCityIcon fontSize="large" className={classes.icon} />,
    },
    {
      title: "Area",
      value: `${country.area} Km²`,
      icon: <MapIcon fontSize="large" className={classes.icon} />,
    },
    {
      title: "Population",
      value: country.population,
      icon: <GroupsIcon fontSize="large" className={classes.icon} />,
    },
    {
      title: "Languages",
      value: country.languages,
      icon: <LanguageIcon fontSize="large" className={classes.icon} />,
    },
    {
      title: "Currencies",
      value: country.currencies,
      icon: (
        <AccountBalanceWalletIcon fontSize="large" className={classes.icon} />
      ),
    },
  ];

  return (
    <div>
      <div className={classes.titleContainer}>
        <Typography className={classes.title}>
          Key Information About{" "}
          <span className={classes.titleSpan}>"{country.name}"</span>
        </Typography>
      </div>

      <div className={classes.InfoContainer}>
        <Card className={classes.cardContainer}>
          <CardMedia
            component="img"
            image={country.flag}
            alt={country.name}
            className={classes.cardMedia}
          />

          <Box className={classes.infoBox}>
            {countryInfo.map((item, index) => {
              return (
                <Box className={classes.containerBox} key={index}>
                  <Box className={classes.avatarBox}>
                    <Avatar className={classes.avatar}>{item.icon}</Avatar>
                  </Box>
                  <Box className={classes.boxTitleValue}>
                    <Box component="span">
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
          </Box>
        </Card>
      </div>

      <div>
        <Map country={country} />
      </div>
    </div>
  );
};
export default CountryDetails;
