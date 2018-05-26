import { downloadManga, deleteDownloadedManga, setDownloadedMangaForDeletion } from "../actions/list_actions";
import MangaServices from "../services/manga-services";
import { DownloadStatus } from "../consts/download-status";

export const doDownloadManga = (
  info,
  location,
  chapters,
  finishedChapters = [],
  status = DownloadStatus.ONGOING
) => {
  return (dispatch, getState) => {
    const state = getState();
    const mappedChapters = _.map(chapters, chapter => {
      return info.chapters.find(c => c.index === chapter);
    });
    const startingChapter = finishedChapters.length;

    dispatch(
      downloadManga(info, location, mappedChapters, finishedChapters, status)
    );
    MangaServices.download(
      info.location,
      location,
      info.title,
      mappedChapters,
      startingChapter
    );
  };
};

export const doDeleteDownloadedManga = (id, location, includeFiles) => {
  return (dispatch, getState) => {
    dispatch(deleteDownloadedManga(id, includeFiles));
    dispatch(setDownloadedMangaForDeletion(null));
    if(includeFiles){
      MangaServices.deleteDownloadedManga(location);
    }
  };
};
