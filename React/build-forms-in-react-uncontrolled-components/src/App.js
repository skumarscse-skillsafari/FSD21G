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
      console.log(formData);
    }, 3000);
  };
  const handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value
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
                <strong>{name}</strong>: {value.toString()}
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
        <fieldset>
          <label>
            <p>Select a Product:</p>
            <select name="selectedProduct" onChange={handleChange}>
              <option value="">Plese select any one</option>
              <option value="Vu">Vu</option>
              <option value="LG">LG</option>
              <option value="Samsung">Samsung</option>
            </select>
          </label>
          <label>
            <p>Count:</p>
            <input type="number" name="productCount" onChange={handleChange} />
          </label>
          <label>
            <p>Gift Wrap?</p>
            <input type="checkbox" name="giftWrap" onChange={handleChange} />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
