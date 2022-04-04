import { createContext, useReducer } from "react";
import { createUseStyles } from "react-jss";
import ProductBuilder from "./ProductBuilder";
import ProductSummary from "./ProductSummary";

const useStyles = createUseStyles({
  wrapper: {
    textAlign: "center"
  }
});

export const ProductContext = createContext();

function productReducer(state, item) {
  return [...state, item];
}

function ProductMaker() {
  const classes = useStyles();
  const [product, setProduct] = useReducer(productReducer, []);
  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      <h1 className={classes.wrapper}>Pick your favourite Products...!</h1>
      <ProductBuilder />
      <ProductSummary />
    </ProductContext.Provider>
  );
}

export default ProductMaker;
