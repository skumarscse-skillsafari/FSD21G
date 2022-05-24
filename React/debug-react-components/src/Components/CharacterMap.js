import { useContext } from "react";
import { TextContext } from "../App";

function itemize(text) {
  const letters = text
    .split("")
    .filter((l) => l !== " ") // [ 'A', 'a', 'b']
    .reduce((collection, item) => {
      const letter = item.toLowerCase();
      // collection: { a: 1}
      // letter = 'b'
      // { a: 2, b: 1}
      return {
        ...collection,
        [letter]: (collection[letter] || 0) + 1
      };
    }, {});
  console.log(letters);
  return Object.entries(letters).sort((a, b) => b[1] - a[1]);
}

function CharacterMap({ show }) {
  const text = useContext(TextContext);

  if (!show) {
    return null;
  }
  return (
    <div>
      Character Map:
      {console.log(itemize(text))}
      {itemize(text).map((char) => (
        <div key={char[0]}>
          {char[0]} : {char[1]}
        </div>
      ))}
    </div>
  );
}

export default CharacterMap;
