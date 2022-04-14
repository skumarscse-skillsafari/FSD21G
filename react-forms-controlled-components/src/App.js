import { useReducer, useState } from "react";
import "./styles.css";

function formReducer(state, event) {
  if (event.reset) {
    return {
      productName: "",
      selectedProduct: "",
      productCount: 0,
      giftWrap: false
    };
  }
  return {
    ...state,
    [event.name]: event.value
  };
}

export default function App() {
  const [formData, setFormData] = useReducer(formReducer, {
    productName: "",
    selectedProduct: "",
    productCount: 0,
    giftWrap: false
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true
      });
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
        <fieldset disabled={submitting}>
          <label>
            <p>Product Name:</p>
            <input
              name="productName"
              value={formData.productName || ""}
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <fieldset disabled={submitting}>
          <label>
            <p>Select a Product:</p>
            <select
              name="selectedProduct"
              value={formData.selectedProduct || ""}
              onChange={handleChange}
            >
              <option value="">Plese select any one</option>
              <option value="Vu">Vu</option>
              <option value="LG">LG</option>
              <option value="Samsung">Samsung</option>
            </select>
          </label>
          <label>
            <p>Count:</p>
            <input
              type="number"
              name="productCount"
              value={formData.productCount || ""}
              diabled={submitting}
              onChange={handleChange}
            />
          </label>
          <label>
            <p>Gift Wrap?</p>
            <input
              type="checkbox"
              name="giftWrap"
              checked={formData["giftWrap"] || false}
              disabled={formData.selectedProduct !== "LG"}
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}
