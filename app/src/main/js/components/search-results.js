import React from "react";
import SearchItem from "./search-item";
import MangaInfo from "./manga-info";

import "../../res/scss/search-results.scss";

const SearchResults = () => (
  <div className="search-results">
    <h3>KissManga</h3>
    <hr />
    <div className="row rows">
      <SearchItem />
      <SearchItem />
      <SearchItem />
      <SearchItem />
      <SearchItem />
      <SearchItem />
      <SearchItem />
    </div>
    <MangaInfo />
  </div>
);

export default SearchResults;
