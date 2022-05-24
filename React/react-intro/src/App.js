import "./styles.css";
import Instructions from "./Instructions";

export default function App() {
  const displayMessage = (e) => console.log(e.target.id);
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
  const displayAction = true;
  return (
    <div className="App">
      <h1>Hello World...!!!</h1>
      {displayAction && <p>This is paragraph</p>}
      <Instructions />
      <ul>
        {pages.map((page, index) => {
          return (
            <li key={index}>
              <button onClick={displayMessage}>
                <span id={page.id}>{page.text}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
