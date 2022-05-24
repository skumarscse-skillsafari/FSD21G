import PropTypes from "prop-types";
import EmployeeHobbies from "./EmployeeHobbies";
import Card from "./Card";

function EmployeeCard({ name, age, ...props }) {
  return (
    <Card title="Employee" details={<EmployeeHobbies {...props} />}>
      <h3>{name}</h3>
      <div>{age} Years</div>
    </Card>
  );
}

EmployeeCard.PropTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  hobbies: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default EmployeeCard;
