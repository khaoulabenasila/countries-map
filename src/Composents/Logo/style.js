import { makeStyles } from "@mui/styles";
const useStyle = makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundImage: "url(/background.jpg)",
    backgroundPosition: "left",
    padding: "3px",
    height: "46px",
    borderRadius: "23px",
    width: "190px",
    margin: "auto"
  },
  img: {
    width: "40px",
    height: "40px"
  },
  text: {
    color: "#61DBFB",
    fontWeight: "bold",
    fontSize: "1.5rem",
    paddingLeft: "8px"
  }
}));

export default useStyle;
