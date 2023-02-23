import { makeStyles } from "@mui/styles";
const useStyle = makeStyles(() => ({
  linkWrapper: {
    textDecoration: "none",
    marginRight: "30px",
    color: "black",
  },
  unorderedListWrapper: {
    display: "flex",
    listStyle: "none",
    paddingInlineStart: "5px !important",
  },
  listItemWrapperInactive: {
    display: "flex",
    alignItems: "flex-end",
    fontWeight: "bold",
    fontSize: "1.4rem",
    color: "#060047",
  },
  listItemWrapperActive: {
    display: "flex",
    alignItems: "flex-end",
    fontSize: "1.4rem",
    fontWeight: "bold",
    color: "#61DBFB",
    borderBottom: "3px solid #060047",
    paddingBottom: "5px",
  },
  navContainer: {
    marginBottom: "20px",
  },
}));

export default useStyle;
