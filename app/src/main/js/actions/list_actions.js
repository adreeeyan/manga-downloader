import { LIST_ACTIONS } from '../consts/action_types';

export const selectMangaForDownload = manga => ({
  type: LIST_ACTIONS.MANGA_SELECT_FOR_DOWNLOAD,
  manga
});

export const addManga = manga => ({
  type: LIST_ACTIONS.MANGA_ADD,
  manga
});

export const searchManga = title => ({
  type: LIST_ACTIONS.MANGA_SEARCH,
  title
});

export const clearManga = () => ({
  type: LIST_ACTIONS.MANGA_CLEAR
});

export const updateList = (list) => ({
  type: LIST_ACTIONS.MANGA_UPDATE_LIST,
  list
});

export const setFilterValue = value => ({
  type: LIST_ACTIONS.SET_FILTER_VALUE,
  value
});

export const downloadManga = (id, chapters) => ({
  type: LIST_ACTIONS.DOWNLOAD_MANGA,
  id,
  chapters
});

export const toggleChapter = index => ({
  type: LIST_ACTIONS.CHAPTER_TOGGLE,
  index
});

export const selectAllChapters = chapters => ({
  type: LIST_ACTIONS.CHAPTER_SELECT_ALL,
  chapters
});

export const unselectAllChapters = () => ({
  type: LIST_ACTIONS.CHAPTER_UNSELECT_ALL
});

export const selectChapters = chapters => ({
  type: LIST_ACTIONS.CHAPTER_SELECT_RANGE,
  chapters
});

export const setDownloadMangaStatusFilter = status => ({
  type: LIST_ACTIONS.SET_DOWNLOAD_MANGA_FILTER_VALUE,
  status
});

export const setDownloadMangaStatus = (id, status) => ({
  type: LIST_ACTIONS.SET_DOWNLOAD_MANGA_STATUS,
  id,
  status
});

export const setIsMangaFetchingStatus = status => ({
  type: LIST_ACTIONS.SET_MANGA_INFO_IS_FETCHING,
  status
});