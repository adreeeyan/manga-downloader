import { LIST_ACTIONS } from '../consts/action_types';

export const viewManga = id => ({
  type: LIST_ACTIONS.MANGA_VIEW,
  id
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

export const setFilterValue = value => ({
  type: LIST_ACTIONS.SET_FILTER_VALUE,
  value
})