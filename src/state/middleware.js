import { fetchLikedFormSubmissions } from '../service/mockServer';
import { FETCH_LIKED_ITEMS, fetchLikedItems, fetchLikedItemsSuccess } from './actions';

const refetchWithInterval = (dispatch) => {
  setTimeout(() => dispatch(fetchLikedItems()), 1000);
};

export const middleware = ({ dispatch, getState }) => next => (action) => {
  if (action.type === FETCH_LIKED_ITEMS) {
    fetchLikedFormSubmissions()
      .then(({ formSubmissions }) => {
        dispatch(fetchLikedItemsSuccess(formSubmissions));
        refetchWithInterval(dispatch);
      })
      .catch(error => {
        console.log(error);
        dispatch(fetchLikedItems());
      });
  }

  return next(action);
};
