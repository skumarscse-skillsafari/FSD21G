function Card({ children, title, details }) {
  return (
    <div className="card">
      <div className="card-details">
        <h2>{title}</h2>
        {details}
      </div>
      {children}
    </div>
  );
}

export default Card;
