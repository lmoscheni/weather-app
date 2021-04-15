import SearchResultItem from "./SearchResultItem";

export default function SearchResult({
  items,
  error,
  isLoading,
  setLocation,
  closeMenu,
}) {
  if (isLoading) {
    return <div>Searching...</div>;
  }

  if (error) {
    return <div>Error when trying to search</div>;
  }

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <>
      {items.map((item, index) => (
        <SearchResultItem
          key={`${item.title}-${index}`}
          value={item}
          setLocation={setLocation}
          closeMenu={closeMenu}
        />
      ))}
    </>
  );
}
