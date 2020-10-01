import { SET_ALERT, REMOVE_ALERT } from './../actions/type';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  const { payload } = action;

  switch (action.type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
};
