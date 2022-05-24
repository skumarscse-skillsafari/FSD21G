function EmployeeCard({
  name,
  designation,
  age,
  hobbies,
  additional,
  showAdditional
}) {
  console.log(showAdditional);
  console.log(additional);
  return (
    <div className="employee-card">
      <h1>This is Employee Card number</h1>
      <h2>Name: {name}</h2>
      <h2>Designation: {designation}</h2>
      <h2>Age: {age} Years</h2>
      <p>Hobbies: {hobbies.join(", ")}</p>
      <button onClick={() => showAdditional(additional)}>More Info...</button>
    </div>
  );
}

export default EmployeeCard;
