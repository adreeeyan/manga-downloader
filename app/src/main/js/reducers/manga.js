import { LIST_ACTIONS } from '../consts/action_types';
import DEFAULT_STATE from "../consts/default_state";

const mangas = (state = DEFAULT_STATE.items, action) => {
    switch(action.type){
        case LIST_ACTIONS.MANGA_ADD:
            return [
                ...state,
                {
                    ...action.manga
                }
            ]
        default:
            return state;
    }
};

export default mangas;