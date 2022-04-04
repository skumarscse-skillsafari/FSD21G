import { useContext } from "react";
import UserContext from "./UserContext";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    borderBottom: "black solid 1px",
    padding: [15, 10],
    textAlign: "right"
  }
});

function Navigation() {
  const user = useContext(UserContext);
  console.log(user);
  const classes = useStyles();
  return <div className={classes.wrapper}>Welcome, {user.name}</div>;
}

export default Navigation;
