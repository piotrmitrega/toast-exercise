import { combineReducers } from 'redux';

import { RECEIVE_INCOMING_ITEM } from './actions';

export const INITIAL_STATE = {
  incomingItems: []
};

export const submissions = (state = INITIAL_STATE, action) => {
  if (action.type === RECEIVE_INCOMING_ITEM) {
    const { item } = action;
    const { incomingItems } = state;

    return {
      ...state,
      incomingItems: [...incomingItems, item]
    };
  }

  return state;
};

export const reducers = combineReducers({
  submissions
});
