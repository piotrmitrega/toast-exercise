
export const RECEIVE_INCOMING_ITEM = 'submissions/receive-incoming-item';

export const receiveIncomingItem = item => ({
  type: RECEIVE_INCOMING_ITEM,
  item
});
