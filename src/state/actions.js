export const RECEIVE_INCOMING_ITEM = 'submissions/receive-incoming-item';
export const LIKE_ITEM = 'submissions/like-item';
export const DISMISS_ITEM = 'submissions/dismiss-item';

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
