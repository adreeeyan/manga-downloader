import React from "react";
import SearchBar from "../components/searchbar";
import SearchResults from "../components/search-results";

const SearchMangaPage = () => (
    <div className="search-manga-page transition-item page">
        <div className="search-bar mt-5 mb-5">
            <SearchBar />
        </div>
        <div className="results">
            <SearchResults />
        </div>
    </div>
);

export default SearchMangaPage;