import { combineReducers } from 'redux';

import { DISMISS_ITEM, LIKE_ITEM, RECEIVE_INCOMING_ITEM } from './actions';

export const INITIAL_STATE = {
  incomingItems: [],
  likedItems: []
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

  if (action.type === LIKE_ITEM) {
    const { item } = action;
    const { incomingItems } = state;
    const { likedItems } = state;

    const newIncomingItems = incomingItems.filter(i => i.id !== item.id);
    const newLikedItems = [...likedItems, item];

    return {
      ...state,
      incomingItems: newIncomingItems,
      likedItems: newLikedItems
    };
  }

  if (action.type === DISMISS_ITEM) {
    const { item } = action;
    const { incomingItems } = state;
    const { likedItems } = state;

    const newIncomingItems = incomingItems.filter(i => i.id !== item.id);
    const newLikedItems = likedItems.filter(i => i.id !== item.id);

    return {
      ...state,
      incomingItems: newIncomingItems,
      likedItems: newLikedItems
    };
  }

  return state;
};

export const reducers = combineReducers({
  submissions
});
