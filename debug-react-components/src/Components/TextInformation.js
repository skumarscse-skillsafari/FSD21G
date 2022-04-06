import { useReducer } from "react";

const tabsReducer = (state, action) => {
  // state = { characterCount: true, wordCount: true, characterMap: true }
  // action = 'characterCount'
  // [characterCount] = false
  return {
    ...state,
    [action]: !state[action]
  };
};
function TextInformation() {
  const [tabs, toogleTabs] = useReducer(tabsReducer, {
    characterCount: true,
    wordCount: true,
    characterMap: true
  });
  return (
    <div>
      <button onClick={() => toogleTabs("characterCount")}>
        characterCount
      </button>
      <button onClick={() => toogleTabs("wordCount")}>wordCount</button>
      <button onClick={() => toogleTabs("characterMap")}>characterMap</button>
    </div>
  );
}

export default TextInformation;
