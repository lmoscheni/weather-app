import "./styles.css";

export default function Loader({ isLoading, children }) {
  console.log("Loader is loading?", isLoading);
  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="lds-ripple"><div></div><div></div></div>
      </div>
    );
  }
  return children;
}
