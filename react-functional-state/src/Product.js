import { useState, useReducer } from "react";

const products = [
  {
    id: 1,
    name: "Mango",
    price: 5
  },
  {
    id: 2,
    name: "Apple",
    price: 15.5
  },
  {
    id: 3,
    name: "Orange",
    price: 7.5
  }
];
function cartReducer(state, action) {
  // console.log(state); // []
  // console.log(product); // Mango
  switch (action.type) {
    case "add":
      return [...state, action.product];
    case "remove":
      const productIndex = state.findIndex(
        (item) => item.name === action.product.name
      );
      if (productIndex < 0) {
        return state;
      }
      const update = [...state];
      update.splice(productIndex, 1);
      return update;
    default:
      return state;
  }
}

function Product() {
  console.log(useReducer());
  const [cart, setCart] = useReducer(cartReducer, []);
  // console.log(cart, total);

  function getTotal(cart) {
    return cart.reduce((totalPrice, item) => totalPrice + item.price, 0);
  }

  function add(product) {
    setCart({ product, type: "add" });
    // console.log(cart, total);
  }

  function remove(product) {
    setCart({ product, type: "remove" });
  }
  return (
    <div className="wrapper">
      <div>Shopping Cart: {cart.length} total items</div>
      <div>Total: {getTotal(cart)}</div>
      {products.map((product) => (
        <div className="product" key={product.id}>
          <h2>{product.name}</h2>
          <button onClick={() => add(product)}>Add</button>
          <button onClick={() => remove(product)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Product;
