import "./styles.css";
import data from "./data";
import EmployeeCard from "./EmployeeCard";
import RadioButtonsGroup from "./MaterialUI";

export default function App() {
  return (
    <div className="App">
      <RadioButtonsGroup />
      <h1>Create Wrapper Components using Props</h1>
      {data.map((employee, index) => (
        <EmployeeCard
          key={index}
          name={employee.name}
          designation={employee.designation}
          age={employee.age}
          hobbies={employee.hobbies}
        />
      ))}
    </div>
  );
}
