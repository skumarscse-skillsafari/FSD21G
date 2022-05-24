import { useState, useEffect } from "react";
import { getStudentsInformation } from "../data/students";

function StudentsInformation({ name }) {
  const [studentInformation, setStudentInformation] = useState({});

  useEffect(() => {
    let mounted = true;
    getStudentsInformation(name).then((data) => {
      if (mounted) {
        setStudentInformation(data);
      }
    });
    return () => (mounted = false);
  }, [name]);

  console.log(studentInformation);

  return (
    <div>
      <h2>Students Information</h2>
      <ul>
        <li>
          <strong>Student Id:</strong> {studentInformation.id}
        </li>
        <li>
          <strong>Student department:</strong> {studentInformation.dept}
        </li>
        <li>
          <strong>Student block:</strong> {studentInformation.block}
        </li>
      </ul>
    </div>
  );
}

export default StudentsInformation;
