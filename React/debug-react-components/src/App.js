import { useState, createContext } from "react";
import "./App.css";
import TextInformation from "./Components/TextInformation";

export const TextContext = createContext();
TextContext.displayName = "TextContext";

export default function App() {
  const [text, setText] = useState("");
  console.log(text);
  return (
    <TextContext.Provider value={text}>
      <div className="wrapper">
        <label htmlFor="text">
          Add Tour Text Here:
          <br />
          <textarea
            id="text"
            name="text"
            rows="10"
            cols="100"
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </label>
        <TextInformation />
      </div>
    </TextContext.Provider>
  );
}
