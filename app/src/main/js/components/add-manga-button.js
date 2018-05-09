import React from "react";

import "../../res/scss/add-manga-button.scss";

const AddMangaButton = () => (
  <div className="add-manga-button">
    <button type="button" className="btn btn-primary rounded-circle add">
      <span className="fa fa-plus" />
    </button>
  </div>
);

export default AddMangaButton;
