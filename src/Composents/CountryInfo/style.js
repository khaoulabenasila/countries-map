import { makeStyles } from "@mui/styles";
const useStyle = makeStyles(() => ({
  spanTitle: {
    fontSize: "1rem",
    color: "#23374D"
  },
  spanValue: {
    fontWeight: "bold",
    fontSize: "1.1rem",
    color: "#23374D"
  },
  boxTitleValue: {
    display: "flex",
    alignItems: "inherit",
    fontFamily: "Roboto,Helvetica,Arial,sans-serif"
  },
  containerBox: {
    display: "flex",
    alignItems: "center",
    marginBottom: "0px"
  },
  icon: {
    color: "#060047"
  }
}));

export default useStyle;
