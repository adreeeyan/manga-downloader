import { LIST_ACTIONS } from "../consts/action_types";
import { DownloadStatus } from "../consts/download-status";

const downloadMangaStatusFilter = (state = null, action) => {
  console.log("downloadstatusfilter action", action, "state", state);
  switch (action.type) {
    case LIST_ACTIONS.SET_DOWNLOAD_MANGA_FILTER_VALUE:
      return action.status
    default:
      return state;
  }
};

export default downloadMangaStatusFilter;
