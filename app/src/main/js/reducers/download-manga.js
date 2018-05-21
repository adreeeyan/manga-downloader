import { LIST_ACTIONS } from "../consts/action_types";
import { DownloadStatus } from "../consts/download-status";

const downloadManga = (state = [], action) => {
  console.log("download action", action, "state", state);
  switch (action.type) {
    case LIST_ACTIONS.DOWNLOAD_MANGA:
      return [
        ...state,
        {
          info: action.info,
          location: action.location,
          chapters: action.chapters,
          downloaded: [],
          status: DownloadStatus.ONGOING
        }
      ];
    case LIST_ACTIONS.SET_DOWNLOAD_MANGA_STATUS:
      return state.map(manga => {
        return manga.info.location == action.id
          ? { ...manga, status: action.status }
          : manga;
      });
    case LIST_ACTIONS.ADD_DOWNLOADED_CHAPTER:
      return state.map(manga => {
        return manga.info.location == action.id
          ? { ...manga, downloaded: [...manga.downloaded, action.chapter] }
          : manga;
      });
    default:
      return state;
  }
};

export default downloadManga;
