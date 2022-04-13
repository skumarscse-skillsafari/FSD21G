import { useReducer, useState } from "react";
import "./styles.css";

function formReducer(state, event) {
  return {
    ...state,
    [event.name]: event.value
  };
}

export default function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };
  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value
    });
  };
  return (
    <div className="wrapper">
      <h1>Product Summary</h1>
      {submitting && (
        <div>
          You are submitting the following details...
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}>
                <strong>{name}</strong>: {value}
              </li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Product Name:</p>
            <input name="productName" onChange={handleChange} />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
