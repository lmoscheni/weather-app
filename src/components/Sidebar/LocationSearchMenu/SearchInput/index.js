import "./styles.css";

export default function SearchInput({ onEnter, onChange }) {
  const handleEnter = (event) => {
    if (event.code === "Enter") {
      onEnter();
    }
  };
  return (
    <div className="search-input-container">
      <span className="search-icon icon material-icons-outlined">search</span>
      <input
        placeholder="Search location"
        onKeyDown={handleEnter}
        onChange={onChange}
      />
    </div>
  );
}
