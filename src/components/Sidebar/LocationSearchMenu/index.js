import { useState } from "react";

import { findLocationByQuery } from "../../../apiClient";

import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";

import "./styles.css";

export default function LocationSearchMenu({ onClose, setLocation }) {
  const [searchResult, setSearchResult] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [query, setQuery] = useState(null);

  const isValidQuery = (query) => query && query.length >= 3;

  const search = (query) => {
    if (isValidQuery(query)) {
      setIsLoading(true);
      findLocationByQuery(query, setQuery)
        .then((result) => {
          setSearchResult(result);
          setIsLoading(false);
        })
        .catch((responseError) => {
          setError(responseError);
          setIsLoading(false);
        });
    }
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="location-search-menu-container">
      <div className="location-search-menu-header">
        <span className="close-icon material-icons-outlined" onClick={onClose}>
          close
        </span>
      </div>
      <div className="search-box">
        <SearchInput onEnter={search.bind(this, query)} onChange={handleInputChange} />
        <button
          className="search-button"
          onClick={search.bind(this, query)}
          disabled={!isValidQuery(query)}
        >
          Search
        </button>
      </div>
      <div className="search-result-container">
        <SearchResult
          setLocation={setLocation}
          closeMenu={onClose}
          isLoading={isLoading}
          error={error}
          items={searchResult}
        />
      </div>
    </div>
  );
}
