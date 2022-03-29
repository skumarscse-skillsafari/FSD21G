import "./styles.css";
// import pic from './Images/JS.png';
import data from "./data";
import EmployeeCard from "./EmployeeCard";

function showAdditional(additional) {
  //const { notes } = additional;
  alert(additional?.notes);
}

export default function App() {
  console.log(data);
  return (
    <div className="App">
      <h1>React Props Example</h1>
      {data.map((employee, index) => (
        <EmployeeCard
          key={index}
          name={employee.name}
          designation={employee.designation}
          age={employee.age}
          hobbies={employee.hobbies}
          additional={employee.additional}
          showAdditional={showAdditional}
        />
      ))}
    </div>
  );
}
