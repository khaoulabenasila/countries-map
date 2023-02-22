import { makeStyles } from "@mui/styles";
const useStyle = makeStyles(() => ({
  linkWrapper: {
    textDecoration: "none",
    marginRight: "30px",
    color: "black"
  },
  unorderedListWrapper: {
    display: "flex",
    listStyle: "none"
  },
  listItemWrapper: {
    display: "flex",
    alignItems: "flex-end"
  }
}));

export default useStyle;
