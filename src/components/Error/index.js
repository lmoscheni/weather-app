import "./styles.css";

export default function Error() {
  return (
    <div className="error-container">
      <h1>Something went wrong</h1>
      <p className="icon-container">
        <span className="material-icons-outlined">error_outline</span>
      </p>
      <p>Try again later.</p>
    </div>
  );
}
