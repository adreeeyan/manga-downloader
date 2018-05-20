import { connect } from "react-redux";
import _ from "lodash";
import SearchResults from "../components/search-results";
import { selectMangaForDownload, setIsMangaFetchingStatus } from "../actions/list_actions";
import MangaServices from "../services/manga-services";

const filterManga = (mangas, searchValue) => {
  // filter via title
  const mapped = mangas.map(m => {
    return {
      source: m.source,
      mangas: m.mangas.filter(manga => _.includes(manga.title.toLowerCase(), searchValue.toLowerCase()))
    }
  });
  // remove sources with empty mangas
  const filtered = mapped.filter(m => m.mangas.length != 0);
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
  selectManga: async location => {
    dispatch(setIsMangaFetchingStatus(true));
    const manga = await getMangaInfo(location);
    console.log("mangaaaaaaaaaaa", manga);
    dispatch(selectMangaForDownload(manga));
    dispatch(setIsMangaFetchingStatus(false));
  }
});

const getMangaInfo = async location => {
  if (location == null) {
    return null;
  }

  const manga = await MangaServices.getManga(location);

  const chapters = [...Array(20).keys()].map(id => ({
    id: id + 1,
    title: `Chaptero ${id + 1}`
  }));
  
  manga.chapters = chapters;
  return manga;
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
