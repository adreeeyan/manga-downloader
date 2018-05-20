import React from "react";
import { connect } from "react-redux";

import MangaInfo from "../components/manga-info";
import {
  selectMangaForDownload,
  downloadManga,
  selectChapters,
  unselectAllChapters
} from "../actions/list_actions";
import MangaServices from "../services/manga-services";

const SelectedMangaInfo = ({
  isFetching,
  manga,
  onClickClose,
  onClickAdd,
  selectedChapters
}) => {
  return (
    <div>
      {console.log("halaaaaaaaaaaaaaaaaa", isFetching, manga)}
      {!isFetching && manga != null && (
        <MangaInfo
          manga={manga}
          onClickClose={() => {
            setTimeout(() => {
              onClickClose();
            }, 500);
          }}
          onClickAdd={onClickAdd}
          selectedChapters={selectedChapters}
        />
      )}
    </div>
  );
};

const getSelectedChapters = async state => {
  // if (state.selectedMangaForDownload == null) {
  //   return [];
  // }
  // return state.selectedChapters == null
  //   ? (await getMangaInfo(state.selectedMangaForDownload)).chapters.map(c => c.id)
  //   : state.selectedChapters;
  return [];
};

const mapStateToProps = state => ({
  isFetching: state.isFetchingManga,
  manga: state.selectedMangaForDownload,
  selectedChapters: getSelectedChapters(state)
});

const mapDispatchToProps = dispatch => ({
  onClickClose: () => dispatch(selectMangaForDownload(null)),
  onClickAdd: (id, chapters) => {
    dispatch(downloadManga(id, chapters));
    dispatch(selectMangaForDownload(null));
    dispatch(selectChapters(null));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedMangaInfo);
