import Alert from "./Components/Alert/Alert";
import CartSuccess from "./Components/CartSuccess/CartSuccess";
import { createUseStyles } from "react-jss";

// console.log(createUseStyles);
const useStyles = createUseStyles({
  wrapper: {
    padding: 20,
  }
});
// console.log(useStyles);
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Alert title="Items Not Added" type="error">
        <div>Your items are out of stock</div>
      </Alert>
      <CartSuccess />
    </div>
  );
}
