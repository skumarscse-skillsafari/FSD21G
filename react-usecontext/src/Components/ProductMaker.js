import { createUseStyles } from "react-jss";
import ProductBuilder from "./ProductBuilder";
import ProductSummary from "./ProductSummary";

const useStyles = createUseStyles({
  wrapper: {
    textAlign: "center"
  }
});

function ProductMaker() {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.wrapper}>Pick your favourite Products...!</h1>
      <ProductBuilder />
      <ProductSummary />
    </>
  );
}

export default ProductMaker;
