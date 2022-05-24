import { useContext } from "react";
import { TextContext } from "../App";

function WordCount({ show }) {
  const text = useContext(TextContext);
  if (!show) {
    return null;
  }
  return <div>Word Count: {text.split(" ").length}</div>;
}

export default WordCount;
