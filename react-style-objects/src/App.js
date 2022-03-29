import Alert from "./Components/Alert/Alert";
import CartSuccess from "./Components/CartSuccess/CartSuccess";

export default function App() {
  const wrapper = {
    padding: 20
  };
  return (
    <div style={wrapper}>
      <Alert title="Items Not Added" type="error">
        <div>Your items are out of stock</div>
      </Alert>
      <CartSuccess />
    </div>
  );
}
