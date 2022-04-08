import "./styles.css";
import john, { jack, mary, showMessage } from "./ImportExport";

export default function App() {
  console.log(john);
  return (
    <div className="App">
      <h1>{john.name}</h1>
      <h2>{john.age}</h2>
      <h2>{jack.name}</h2>
      <h2>{jack.age}</h2>
      <h2>{mary.name}</h2>
      <h2>{mary.age}</h2>
      <p>Calling showMessage method: {showMessage(10, 5)}</p>
    </div>
  );
}
