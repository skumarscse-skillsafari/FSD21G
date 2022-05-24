import "./Alert.css";

function Alert({ children, title, type }) {
  return (
    <div className={`alert-wrapper ${type}`}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default Alert;
