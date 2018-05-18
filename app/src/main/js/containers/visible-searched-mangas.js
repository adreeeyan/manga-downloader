import { connect } from "react-redux";
import _ from "lodash";
import SearchResults from "../components/search-results";
import { selectMangaForDownload } from "../actions/list_actions";

const filterManga = (mangas, searchValue) => {
  const filtered = mangas.map(m => {
    return {
      source: m.source,
      mangas: m.mangas.filter(manga => _.includes(manga.title.toLowerCase(), searchValue.toLowerCase()))
    }
  });
  return filtered;
};

const mapStateToProps = state => ({
  collection: (() => {
    if(_.isEmpty(state.searchValue) || state.searchValue.length < 3){
      return [];
    }
    return filterManga(state.mangas, state.searchValue);
  })()
});

const mapDispatchToProps = dispatch => ({
  selectManga: id => dispatch(selectMangaForDownload(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
