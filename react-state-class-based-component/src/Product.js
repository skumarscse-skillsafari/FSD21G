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
    cart: [],
    total: 0
  };
  // currencyOptions = {
  //   minFractionDigits: 2,
  //   maxFractionDigits: 2
  // };

  getTotal = () => {
    return this.state.total;
  };

  add = (product) => {
    console.log(product);
    this.setState((state) => ({
      cart: [...state.cart, product.name],
      total: state.total + product.price
    }));
  };

  remove = (product) => {
    this.setState((state) => {
      const cart = [...state.cart]; // [ 'Mango', 'Apple', 'Orange' ]
      console.log(cart);
      cart.splice(cart.indexOf(product.name));
      console.log(cart);
      return {
        cart,
        total: state.total - product.price
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
