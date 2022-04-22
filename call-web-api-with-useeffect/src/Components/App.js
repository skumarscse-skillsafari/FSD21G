import { useState, useEffect } from 'react';
import {getUsers, postUser} from '../services/users';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [userInput, setUserInput] = useState({
    name: '',
    designation: '',
    age: ''
  });
  const [alert, setAlert] = useState(false);
  console.log(users);
  console.log(userInput);

  useEffect(() => {
    if(users.length && !alert) { // true && true
      return;
    } 
    getUsers()
      .then(items => {
        setUsers(items);
      })
  }, [alert, users]);

  useEffect(() => {
    if(alert) {
      setTimeout(() => {
        setAlert(false);
      }, 2000)
    }
  }, [alert]);

  const handleChange = (e) => {
    setUserInput(prevUserInput => {
      if(e.target.type === 'number') {
        return {
          ...prevUserInput,
          [e.target.name]: +e.target.value, // age: 18
        }
      }
      return {
        ...prevUserInput,
        [e.target.name]: e.target.value, // name: 'John', designation: 'Tester' 
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postUser(userInput)
      .then(() => {
        setUserInput({
          name: '',
          designation: '',
          age: ''
        });
        setAlert(true);
      })
  }

  return (
    <div className='wrapper'>
      <h1><u>Users details:</u></h1>
      <div className='card'>
        {users.map((user) => (
          <div className='card-item' key={user.id}>
            <p><strong>Username:</strong>{user.name}</p>
            <p><strong>Designation:</strong>{user.designation}</p>
            <p><strong>Age:</strong>{user.age}</p>
          </div>
        ))}
      </div>
      {alert && <h2>Submit Successfull</h2>}
      <h3><u>New User:</u></h3>
      <form className='user-input' onSubmit={handleSubmit}>
        <label>
          <input type='text' name="name" value={userInput.name} onChange={handleChange} placeholder="Enter user name" />
        </label>
        <label>
          <input type='text' name="designation" value={userInput.designation} onChange={handleChange} placeholder="Enter user designation" />
        </label>
        <label>
          <input type='number' name="age" value={userInput.age} onChange={handleChange} placeholder="Enter user age" />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
