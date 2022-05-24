import { useContext } from "react";
import { TextContext } from "../App";

function CharacterCount({ show }) {
  const text = useContext(TextContext);
  console.log(text);

  if (!show) {
    return null;
  }

  return <div>Character Count: {text.length}</div>;
}

export default CharacterCount;
