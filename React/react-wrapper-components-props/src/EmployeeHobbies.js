function EmployeeHobbies({ ...props }) {
  // ...props = { designation: '', hobbies: [] }
  return (
    <div>
      <p>{props.hobbies.join(", ")}</p>
      <p>{props.designation}</p>
    </div>
  );
}

export default EmployeeHobbies;
