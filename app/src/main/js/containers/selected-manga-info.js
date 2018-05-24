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
import { DownloadStatus } from "../consts/download-status";

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
    const state = getState();
    const manga = state.selectedMangaForDownload;
    const mappedChapters = _.map(chapters, chapter => {
      return manga.chapters.find(c => c.index === chapter);
    });
    dispatch(downloadManga(info, location, mappedChapters));
    MangaServices.download(
      info.location,
      location,
      info.title,
      mappedChapters,
      (id) => {
        return new Promise(resolve => {
          // check if manga state is paused

          const checker = () => {
            const downloadedMangas = getState().downloadedMangas;
            const manga = _.find(downloadedMangas, m => m.info.location == id);
            if (manga.status == DownloadStatus.PAUSED) {
              console.log(`${manga.info.title} is paused`);
              setTimeout(() => {
                checker();
              }, 1000);
            } else if (manga.status == DownloadStatus.ONGOING) {
              resolve();
            }
          };

          checker();
        });
      },
      (id, chapter) => {
        dispatch(addDownloadedChapter(id, chapter));
      }
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedMangaInfo);
