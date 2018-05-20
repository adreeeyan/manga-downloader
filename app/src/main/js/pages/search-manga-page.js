import React from "react";
import { connect } from "react-redux";
import { checkElementsInViewport } from "react-lazy";

import SearchBar from "../containers/searchbar";
import SearchResults from "../components/search-results";
import VisibleSearchedMangas from "../containers/visible-searched-mangas";
import MangaInfo from "../components/manga-info";
import SelectedMangaInfo from "../containers/selected-manga-info";

export class SearchMangaPage extends React.Component {

  triggerCheck = () => {
    checkElementsInViewport()
  };

  componentDidMount() {
    document
      .getElementsByClassName("content")[0]
      .addEventListener("scroll", this.triggerCheck);
  }

  componentWillUnmount() {
    document
      .getElementsByClassName("content")[0]
      .removeEventListener("scroll", this.triggerCheck);
  }

  render() {
    return (
      <div
        id="search-manga-page"
        className="search-manga-page transition-item page">
        <div className="search-bar mt-5 mb-5">
          <SearchBar />
        </div>
        <div className="results">
          <VisibleSearchedMangas />
        </div>
        {(this.props.isFetchingManga || this.props.hasSelectedManga) && <SelectedMangaInfo />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasSelectedManga: !!state.selectedMangaForDownload,
  isFetchingManga: state.isFetchingManga
});

export default connect(mapStateToProps)(SearchMangaPage);
