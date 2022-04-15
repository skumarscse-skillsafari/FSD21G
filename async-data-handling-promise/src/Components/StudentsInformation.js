import { useState, useEffect } from "react";
import { getStudentsInformation } from "../data/students";

function StudentsInformation() {
  const [studentInformation, setStudentInformation] = useState({});

  useEffect(() => {
    getStudentsInformation().then((data) => {
      setStudentInformation(data);
    });
  }, []);

  console.log(studentInformation);

  return (
    <div>
      <h2>Students Information</h2>
      <ul>
        <li>
          <strong>Student name:</strong> {studentInformation.name}
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
