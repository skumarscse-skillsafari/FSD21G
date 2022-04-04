import { useContext, useReducer } from "react";
import UserContext from "./UserContext";
import { ProductContext } from "../Components/ProductMaker";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  add: {
    background: "none",
    border: "none",
    cursor: "pointer"
  },
  favorite: {
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

const idReducer = (key) => key + 1;

function Products({ product, name }) {
  let user = useContext(UserContext);
  const { setProduct } = useContext(ProductContext);
  const [id, updateId] = useReducer(idReducer, 0);
  console.log(user);
  const classes = useStyles();
  const favorite = user.favorites.includes(name);
  console.log(favorite);

  function update() {
    setProduct({
      name,
      id: `${name}-${id}`
    });
    updateId();
  }

  return (
    <div className={classes.wrapper}>
      <h3>{name}</h3>
      <span className={classes.favorite}>
        {favorite ? "Favorite Product" : ""}
      </span>
      <button className={classes.add} onClick={update}>
        {product}
      </button>
    </div>
  );
}

export default Products;
