import React from "react";
import SearchItem from "./search-item";

import "../../res/scss/search-results.scss";

const SearchResults = ({ collection = [], selectManga = {} }) => (
  <div className="search-results">
    {collection.map((c, i) => (
      <div key={i}>
        <h3>{c.source}</h3>
        <hr />
        <div className="row rows">
          {c.mangas.map((manga, key) => (
            <div className="" key={key}>
              <SearchItem {...manga} onClick={() => selectManga(manga.location)} />
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default SearchResults;
