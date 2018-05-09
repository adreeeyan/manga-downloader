import React from "react";

import "../../res/scss/search-item.scss";

const SearchItem = () => (
  <div className="card search-item grow">
    <img
      className="card-img-top"
      src="http://via.placeholder.com/170x180"
      alt="Cover"
    />
    <div className="card-body">
      <h5 className="card-title">Manga title ni sya</h5>
    </div>
  </div>
);

export default SearchItem;
