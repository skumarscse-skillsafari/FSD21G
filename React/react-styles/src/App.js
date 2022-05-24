import "./App.css";
import Alert from "./Components/Alert/Alert";
import CartSuccess from "./Components/CartSuccess/CartSuccess";

export default function App() {
  return (
    <div className="wrapper">
      <h1>Different Methods of styling React Components</h1>
      <h2>Plain CSS - Style Object - Style Libraries</h2>
      <Alert title="Items Not Added" type="error">
        <div>Your items are out of stock</div>
      </Alert>
      <CartSuccess />
    </div>
  );
}
