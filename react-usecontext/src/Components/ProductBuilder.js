import { createUseStyles } from "react-jss";
import Products from "./Products";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    padding: [10, 50],
    justifyContent: "center"
  }
});

const products = [
  {
    product: "Televisions",
    name: "Sony"
  },
  {
    product: "Mobile Phones",
    name: "Vu"
  },
  {
    product: "Air Conditioners",
    name: "LG"
  },
  {
    product: "Refrigirators",
    name: "Whirpool"
  },
  {
    product: "Watches",
    name: "Rolex"
  },
  {
    product: "Fruits",
    name: "Apple"
  }
];

function ProductBuilder() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      {products.map((product, index) => (
        <Products key={index} product={product.product} name={product.name} />
      ))}
    </div>
  );
}

export default ProductBuilder;
