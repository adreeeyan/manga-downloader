import React from "react";

import "../../res/scss/search-item.scss";

const SearchItem = ({title, cover}) => (
  <div className="card search-item grow">
    <img
      className="card-img-top"
      src={cover || "http://via.placeholder.com/170x180"}
      alt={title}
    />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
    </div>
  </div>
);

export default SearchItem;
