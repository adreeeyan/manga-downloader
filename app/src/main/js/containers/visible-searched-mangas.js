import { connect } from "react-redux";
import _ from "lodash";
import SearchResults from "../components/search-results";

const createCollection = (mangas, searchValue) => {
  const output = _(mangas)
    .filter(manga => manga.title.indexOf(searchValue) != -1)
    .groupBy(manga => manga.source)
    .map((value, key) => ({ source: key, mangas: value }))
    .value();
  return output;
};

const mapStateToProps = state => ({
  collection: (() => {
    return createCollection(state.mangas, state.searchValue);
  })()
});

const mapDispatchToProps = dispatch => ({
  // toggleManga: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
