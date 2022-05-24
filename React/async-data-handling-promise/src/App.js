import { lazy, Suspense, useReducer, useState } from "react";
import "./styles.css";
// import StudentsInformation from "./Components/StudentsInformation";
const StudentsInformation = lazy(() =>
  import(
    /*webpackChunkName: 'StudentsInformation' */ "./Components/StudentsInformation"
  )
);

export default function App() {
  const [student, setStudent] = useState("john");
  const [show, toggle] = useReducer((state) => !state, true);
  return (
    <div className="wrapper">
      <h1>Information about the students</h1>
      <div>
        <button onClick={toggle}>Toggle Details</button>
      </div>
      <button onClick={() => setStudent("john")}>John</button>
      <button onClick={() => setStudent("jack")}>Jack</button>
      <button onClick={() => setStudent("mary")}>Mary</button>
      <button onClick={() => setStudent("skillsafari")}>SkillSafari</button>
      <Suspense fallback={<div>Loading Component</div>}>
        {show && <StudentsInformation name={student} />}
      </Suspense>
    </div>
  );
}
