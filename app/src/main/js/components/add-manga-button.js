import React from "react";
import { Link } from "react-router-dom";

import "../../res/scss/add-manga-button.scss";

const AddMangaButton = () => (
  <div className="add-manga-button">
    <Link to="/search">
      <button type="button" className="btn btn-primary rounded-circle add">
        <span className="fa fa-plus" />
      </button>
    </Link>
  </div>
);

export default AddMangaButton;
