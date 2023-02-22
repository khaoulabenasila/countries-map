import { makeStyles } from "@mui/styles";
const useStyle = makeStyles(() => ({
  menuContainer: {
    display: "flex",
    backgroundColor: "#060047!important",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: "10px"
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center"
  },
  radioBtn: {
    color: "#61DBFB !important"
  },
  radioLabel: {
    color: "white"
  },
  container: {
    marginBottom: "30px"
  },

  slider: {
    color: "#61DBFB !important"
  },
  sliderContainer: {
    width: "18%"
  },
  btn: {
    color: "#060047 !important",
    backgroundColor: "#61DBFB !important",
    fontWeight: "bold !important"
  }
}));

export default useStyle;
