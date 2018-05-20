import { LIST_ACTIONS } from "../consts/action_types";
import { DownloadStatus } from "../consts/download-status";

export const downloadMangaStatusFilter = (state = null, action) => {
  console.log("downloadstatusfilter action", action, "state", state);
  switch (action.type) {
    case LIST_ACTIONS.SET_DOWNLOAD_MANGA_FILTER_VALUE:
      return action.status;
    default:
      return state;
  }
};

export const searchValueFilter = (state = "", action) => {
  console.log("search action", action, "state", state);
  switch (action.type) {
    case LIST_ACTIONS.SET_FILTER_VALUE:
      return action.value;
    default:
      return state;
  }
};

export const isFetchingManga = (state = false, action) => {
  console.log("isFetchingManga action", action, "state", state);
  switch (action.type) {
    case LIST_ACTIONS.SET_MANGA_INFO_IS_FETCHING:
      return action.status;
    default:
      return state;
  }
};
