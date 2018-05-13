import { LIST_ACTIONS } from "../consts/action_types";
import { DownloadStatus } from "../consts/download-status";

const downloadManga = (state = [], action) => {
  console.log("download action", action, "state", state);
  switch (action.type) {
    case LIST_ACTIONS.DOWNLOAD_MANGA:
      return [
        ...state,
        {
          id: action.id,
          chapters: action.chapters,
          status: DownloadStatus.ONGOING
        }
      ];
    case LIST_ACTIONS.SET_DOWNLOAD_MANGA_STATUS:
      return state.map(manga => {
        return manga.id == action.id
          ? { ...manga, status: action.status }
          : manga;
      });
    default:
      return state;
  }
};

export default downloadManga;
