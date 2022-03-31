import { Component } from "react";

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

class Product extends Component {
  state = {
    cart: []
  };
  // currencyOptions = {
  //   minFractionDigits: 2,
  //   maxFractionDigits: 2
  // };

  getTotal = () => {
    return this.state.cart.reduce(
      (totalCost, item) => totalCost + item.price,
      0
    );
  };

  add = (product) => {
    console.log(product);
    this.setState((state) => ({
      cart: [...state.cart, product]
    }));
  };

  remove = (product) => {
    this.setState((state) => {
      const cart = [...state.cart]; // [ 'Mango', 'Apple', 'Orange' ]
      console.log(cart);
      const productIndex = cart.findIndex(
        (cartProduct) => cartProduct.name === product.name
      );
      console.log(productIndex);
      if (productIndex < 0) {
        return;
      }
      cart.splice(productIndex, 1);
      return {
        cart
      };
    });
  };
  render() {
    return (
      <div className="wrapper">
        <div>Shopping Cart: {this.state.cart.length} total items.</div>
        <div>Total: {this.getTotal()}</div>

        {products.map((product) => (
          <div className="product" key={product.id}>
            <h2>{product.name}</h2>
            <button onClick={() => this.add(product)}>Add</button>
            <button onClick={() => this.remove(product)}>Remove</button>
          </div>
        ))}
        {console.log(this.state)}
      </div>
    );
  }
}

export default Product;
