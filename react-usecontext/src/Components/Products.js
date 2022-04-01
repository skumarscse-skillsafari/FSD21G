import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  add: {
    background: "none",
    border: "none",
    cursor: "pointer"
  },
  favourite: {
    fontSize: 20,
    position: "absolute",
    top: 10,
    left: "25%"
  },
  wrapper: {
    border: "lightgrey solid 1px",
    margin: 20,
    padding: 25,
    position: "relative",
    textAlign: "center",
    textTransform: "capitalize",
    width: 200
  }
});

function Products({ product, name }) {
  const classes = useStyles();
  const favourite = true;
  return (
    <div className={classes.wrapper}>
      <h3>{name}</h3>
      <span className={classes.favourite}>
        {favourite ? "Favourite Product" : ""}
      </span>
      <button className={classes.add}>{product}</button>
    </div>
  );
}

export default Products;
