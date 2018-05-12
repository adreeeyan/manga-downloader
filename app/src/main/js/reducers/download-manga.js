import { LIST_ACTIONS } from "../consts/action_types";
import { DownloadStatus } from "../consts/download-status";

const downloadManga = (state = [], action) => {
  console.log("download action", action, "state", state);
  switch (action.type) {
    case LIST_ACTIONS.DOWNLOAD_MANGA:
      return [
        ...state,
        {
          mangaId: action.mangaId,
          chapters: action.chapters,
          status: DownloadStatus.ONGOING
        }
      ];
    default:
      return state;
  }
};

export default downloadManga;
