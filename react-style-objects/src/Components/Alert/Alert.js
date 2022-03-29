function Alert({ children, title, type }) {
  const colors = {
    success: "#6da06f",
    error: "#f56260"
  };

  const styles = {
    heading: {
      color: colors[type],
      margin: "0 0 10px 0"
    },
    wrapper: {
      border: `${colors[type]} solid 1px`,
      marginBottom: 15,
      padding: 15,
      position: "relative"
    }
  };
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>{title}</h2>
      {children}
    </div>
  );
}

export default Alert;
