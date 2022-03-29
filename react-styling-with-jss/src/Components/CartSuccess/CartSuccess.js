import Alert from "../Alert/Alert";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  item: {},
  wrapper: {
    borderTop: "1px solid black",
    display: "flex",
    flexWrap: "wrap",
    "& h2": {
      width: "100%"
    },
    "& $item": {
      marginRight: 20
    }
  }
});

function CartSuccess() {
  const classes = useStyles();
  return (
    <Alert title="Added to Cart" type="success">
      <div className={classes.wrapper}>
        <h2>You have added 3 items:</h2>
        <div className={classes.item}>
          <div>Bananas</div>
          <div>Quantity: 2</div>
        </div>
        <div className={classes.item}>
          <div>Mangoes</div>
          <div>Quantity: 1</div>
        </div>
      </div>
    </Alert>
  );
}

export default CartSuccess;
