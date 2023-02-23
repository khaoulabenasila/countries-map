import { makeStyles } from "@mui/styles";
const useStyle = makeStyles(() => ({
  title: {
    fontSize: "2rem !important",
    fontWeight: "bold !important",
    color: "#060047",
  },
  titleContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  titleSpan: {
    color: "#61DBFB",
  },
  spanValue: {
    fontWeight: "bold",
    fontSize: "1.1rem",
    color: "#23374D",
    marginLeft: "5px",
  },
  boxTitleValue: {
    display: "flex",
    alignItems: "inherit",
    fontFamily: "Roboto,Helvetica,Arial,sans-serif",
  },
  containerBox: {
    display: "flex",
    alignItems: "center",
    marginBottom: "0px",
    marginLeft: "8px",
  },
  icon: {
    color: "#060047",
  },
  infoBoxLeft: {
    display: "flex",
  },
  infoBoxLeft: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "30px",
  },
  infoBoxRight: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "50px",
  },
  avatarBox: {
    marginRight: "8px",
  },
  avatar: {
    backgroundColor: "#acecfd !important",
  },
  cardContainer: {
    display: "flex",
    width: "85%",
    margin: "auto",
  },
  cardMedia: {
    boxShadow: "3px 2px 7px rgb(0 0 0 / 69%)",
    width: "300px !important",
  },
  InfoContainer: {
    marginBottom: "30px",
  },
}));

export default useStyle;
