import "./styles.css";
import { useState } from "react";

export default function App() {
  // console.log(useState({ user: "SkillSafari" }));
  // useState() = [value, setValue];
  // const [value, setValue] = useState(1);
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(100);
  return (
    <div className="App">
      <h1>{increment}</h1>
      <h1>{decrement}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setIncrement(increment + 1)}>Increment</button>
      <button onClick={() => setDecrement(decrement - 1)}>Decrement</button>
    </div>
  );
}
