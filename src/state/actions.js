export const RECEIVE_INCOMING_ITEM = 'submissions/receive-incoming-item';
export const LIKE_ITEM = 'submissions/like-item';
export const SAVE_ITEM = 'submissions/save-item';
export const DISMISS_ITEM = 'submissions/dismiss-item';
export const FETCH_LIKED_ITEMS = 'submissions/fetch-liked-items';
export const FETCH_LIKED_ITEMS_SUCCESS = `${FETCH_LIKED_ITEMS}-success`;

export const receiveIncomingItem = item => ({
  type: RECEIVE_INCOMING_ITEM,
  item
});

export const dismissItem = item => ({
  type: DISMISS_ITEM,
  item
});

export const likeItem = item => ({
  type: LIKE_ITEM,
  item
});

export const saveItem = item => ({
  type: SAVE_ITEM,
  item
});

export const fetchLikedItems = () => ({
  type: FETCH_LIKED_ITEMS
});

export const fetchLikedItemsSuccess = (items) => ({
  type: FETCH_LIKED_ITEMS_SUCCESS,
  items
});
