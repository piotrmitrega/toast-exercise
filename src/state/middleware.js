import { onMessage } from '../service/mockServer';
import { receiveIncomingItem } from './actions';

export const middleware = ({ dispatch, getState }) => next => {
  onMessage((item) => {
    dispatch(receiveIncomingItem(item));
  });

  return (action) => {
    return next(action);
  };
};
