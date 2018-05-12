import React from "react";
import SearchBar from "../containers/searchbar";
import SearchResults from "../components/search-results";
import VisibleSearchedMangas from "../containers/visible-searched-mangas";
import MangaInfo from "../components/manga-info";
import SelectedMangaInfo from "../containers/selected-manga-info";

const SearchMangaPage = () => (
  <div className="search-manga-page transition-item page">
    <div className="search-bar mt-5 mb-5">
      <SearchBar />
    </div>
    <div className="results">
      <VisibleSearchedMangas />
    </div>
    <SelectedMangaInfo />
  </div>
);

export default SearchMangaPage;
