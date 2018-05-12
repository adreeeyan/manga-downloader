import { LIST_ACTIONS } from "../consts/action_types";

const searchValueFilter = (state = "", action) => {
  console.log("action", action, "state", state);
  switch (action.type) {
    case LIST_ACTIONS.SET_FILTER_VALUE:
      return action.value;
    default:
      return state;
  }
};

export default searchValueFilter;
