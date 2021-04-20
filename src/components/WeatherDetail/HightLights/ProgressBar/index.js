import "./styles.css";

export default function ProgressBar({ completed }) {
  const barStyle = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: "#FFEC65",
    borderRadius: "inherit",
    textAlign: "right",
  };
  return (
    <>
      <div className="progress-bar-indicator">
        <span className="initial-indicator">0</span>
        <span className="middle-indicator">50</span>
        <span className="final-indicator">100</span>
      </div>
      <div className="progress-bar-container">
        <div style={barStyle}>{/* <span style={labelStyles}></span> */}</div>
      </div>
    </>
  );
}
