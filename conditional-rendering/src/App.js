import "./styles.css";
import Signin from "./Signin";
import Signup from "./Signup";

export default function App() {
  const displaySignin = true;
  return (
    <div className="App">
      <h1>Welcome to Form registration</h1>
      {displaySignin ? <Signin /> : <Signup />}
    </div>
  );
}
