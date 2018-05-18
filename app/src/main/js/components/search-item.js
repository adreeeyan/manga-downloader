import React from "react";
import { Lazy } from "react-lazy";

import "../../res/scss/search-item.scss";

const SearchItem = ({ title, cover, onClick }) => (
  <Lazy component="div"
    className="card search-item grow"
    onClick={onClick}
    cushion={500}>
      <img
        className="card-img-top"
        src={cover || "http://via.placeholder.com/170x180"}
        alt={title}
      />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
    </div>
  </Lazy>
);

export default SearchItem;
