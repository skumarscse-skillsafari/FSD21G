import { useEffect, useState } from "react";
import "./FileNamer.css";

function FileNamer() {
  const [name, setName] = useState("");
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const handleWindowClick = () => setAlert(false);
    if (alert) {
      window.addEventListener("click", handleWindowClick);
    } else {
      window.removeEventListener("click", handleWindowClick);
    }
    return () => window.removeEventListener("click", handleWindowClick);
  }, [alert, setAlert]);

  function validate(event) {
    if (/\*/.test(name)) {
      event.preventDefault();
      setAlert(true);
      return;
    }
    setAlert(false);
  }
  return (
    <div className="wrapper">
      <div className="preview">
        <h2>Preview the FileName: {name}.js</h2>
      </div>
      <form>
        <label>
          <p>Enter the FileName: </p>
          <input
            autoComplete="off"
            name="name"
            // onBlur={() => setAlert(false)}
            onChange={(event) => setName(event.target.value)}
            // onFocus={() => setAlert(true)}
          />
        </label>
        <div className="information-wrapper">
          <button
            className="information"
            onClick={() => setAlert(true)}
            type="button"
          >
            more information
          </button>
          {alert && (
            <div className="popup">
              <span>Allowed: AlphaNumeric</span>
              <br />
              <span>Not-Allowed: '*'</span>
            </div>
          )}
        </div>
        <div>
          <button onClick={validate}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FileNamer;
