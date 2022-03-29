import "./styles.css";
import DisplayItems from "./DisplayItems";

export default function App() {
  const pages = [
    {
      id: "home",
      text: "Home"
    },
    {
      id: "about",
      text: "About"
    },
    {
      id: "contact",
      text: "Contact"
    }
  ];
  return (
    <div className="App">
      <h1>Welcome to my page</h1>
      <ul>
        <DisplayItems listItem={pages} />
      </ul>
    </div>
  );
}
