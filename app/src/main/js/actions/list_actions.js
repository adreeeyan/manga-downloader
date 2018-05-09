import { LIST_ACTIONS } from '../consts/action_types';

export const viewManga = name => ({
  type: LIST_ACTIONS.MANGA_VIEW,
  name,
});

export const addManga = item => ({
  type: LIST_ACTIONS.MANGA_ADD,
  item,
});

export const searchManga = name => ({
  type: LIST_ACTIONS.MANGA_SEARCH,
  name,
});

export const clearManga = () => ({
  type: LIST_ACTIONS.MANGA_CLEAR,
});
