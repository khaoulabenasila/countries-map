import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider
} from "@mui/material";
import React from "react";
import useFetchData from "../../Util/api";
import useStyle from "./style";

const Filter = ({ selectedContinent, onRadioChange, onButtonClicked }) => {
  const classes = useStyle();
  const fetchedData = useFetchData();
  const continents = [...new Set(fetchedData.map((item) => item.continent))];
  return (
    <div className={classes.container}>
      <div className={classes.menuContainer}>
        <div className={classes.sliderContainer}>
          <Slider
            className={classes.slider}
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </div>
        <div>
          <FormControl>
            <RadioGroup
              row
              value={selectedContinent}
              name="controlled-radio-buttons-group"
              onChange={onRadioChange}
            >
              {continents.map((continent, index) => {
                return (
                  <FormControlLabel
                    key={index}
                    value={continent}
                    control={<Radio className={classes.radioBtn} />}
                    label={
                      <span className={classes.radioLabel}>{continent}</span>
                    }
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        </div>
      </div>

      <div className={classes.btnContainer}>
        <Button
          className={classes.btn}
          sx={{ mb: 2 }}
          size="medium"
          variant="contained"
          onClick={onButtonClicked}
        >
          Reset Filter
        </Button>
      </div>
    </div>
  );
};
export default Filter;
