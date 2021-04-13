import "./styles.css";

export default function SearchResultItem(props) {
  const selectItem = () => {
    props.setLocation(props.value)
    props.closeMenu();
  };

  return (
    <div className="search-result-item" onClick={selectItem}>
      {props.value.title}
    </div>
  );
}
