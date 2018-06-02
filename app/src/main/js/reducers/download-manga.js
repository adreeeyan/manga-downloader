import { LIST_ACTIONS } from "../consts/action_types";
import { DownloadStatus } from "../consts/download-status";

export const downloadedMangas = (state = [], action) => {
  console.log("download action", action, "state", state);
  switch (action.type) {
    case LIST_ACTIONS.DOWNLOAD_MANGA:
      return [
        ...state,
        {
          info: action.info,
          location: action.location,
          compressToCbz: action.compressToCbz,          
          chapters: action.chapters,
          downloaded: action.finishedChapters,
          status: action.status || DownloadStatus.ONGOING
        }
      ];
    case LIST_ACTIONS.SET_DOWNLOAD_MANGA_STATUS:
      return state.map(manga => {
        return manga.info.location === action.id
          ? { ...manga, status: action.status }
          : manga;
      });
    case LIST_ACTIONS.ADD_DOWNLOADED_CHAPTER:
      return state.map(manga => {
        return manga.info.location === action.id
          ? { ...manga, downloaded: [...manga.downloaded, action.chapter] }
          : manga;
      });
    case LIST_ACTIONS.DELETE_DOWNLOADED_MANGA:
      return state.filter(manga => manga.info.location !== action.id);
    default:
      return state;
  }
};

export const downloadedMangaForDeletion = (state = null, action) => {
  console.log("downloadedMangaForDeletion action", action, "state", state);
  switch (action.type) {
    case LIST_ACTIONS.SET_DOWNLOAD_MANGA_FOR_DELETION:
      return action.manga;
    default:
      return state;
  }
};
