import React from "react";
import { connect } from "react-redux";

import MangaInfo from "../components/manga-info";
import {
  selectMangaForDownload,
  downloadManga,
  selectChapters,
  unselectAllChapters,
  setIsMangaFetchingStatus,
  addDownloadedChapter
} from "../actions/list_actions";
import MangaServices from "../services/manga-services";

const SelectedMangaInfo = ({
  isFetchingManga,
  manga,
  onClickClose,
  onClickAdd,
  selectedChapters
}) => {
  return (
    <div>
      <MangaInfo
        manga={manga}
        onClickClose={() => {
          setTimeout(() => {
            onClickClose();
          }, 500);
        }}
        onClickAdd={onClickAdd}
        selectedChapters={selectedChapters}
        isFetchingManga={isFetchingManga}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  isFetchingManga: state.isFetchingManga,
  manga: state.selectedMangaForDownload,
  selectedChapters: state.selectedChapters
});

const mapDispatchToProps = dispatch => ({
  onClickClose: () => {
    dispatch(setIsMangaFetchingStatus(false));
    dispatch(selectMangaForDownload(null));
  },
  onClickAdd: (manga, location, chapters) => {
    dispatch(doDownloadManga(manga, location, chapters));
    dispatch(selectMangaForDownload(null));
    dispatch(selectChapters(null));
  }
});

const doDownloadManga = (info, location, chapters) => {
  return (dispatch, getState) => {
    const manga = getState().selectedMangaForDownload;
    const mappedChapters = _.map(chapters, chapter => {
      return manga.chapters.find(c => c.index === chapter);
    });
    dispatch(downloadManga(info, location, mappedChapters));
    MangaServices.download(
      info.location,
      location,
      info.title,
      mappedChapters,
      (id, chapter) => {
        dispatch(addDownloadedChapter(id, chapter));
      }
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedMangaInfo);
