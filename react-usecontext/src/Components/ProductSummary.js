import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  list: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    maxHeight: 50,
    "& li": {
      width: 100
    }
  },
  wrapper: {
    borderTop: "black solid 1px",
    display: "flex",
    padding: 25
  }
});

function ProductSummary() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <h2>Your Products</h2>
      <ul className={classes.list}>
        <li>Sony</li>
        <li>Vu</li>
        <li>LG</li>
      </ul>
    </div>
  );
}

export default ProductSummary;
