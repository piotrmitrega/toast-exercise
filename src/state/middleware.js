import { fetchLikedFormSubmissions, saveFormSubmission } from '../service/mockServer';
import { FETCH_LIKED_ITEMS, fetchLikedItems, fetchLikedItemsSuccess, LIKE_ITEM, SAVE_ITEM, saveItem } from './actions';

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

  if (action.type === LIKE_ITEM) {
    const { item } = action;

    dispatch(saveItem(item));
  }

  if (action.type === SAVE_ITEM) {
    const { item } = action;

    saveFormSubmission(item)
      .then((r) => console.log(r))
      .catch(error => {
        console.log(error);
        dispatch(saveItem(item));
      });
  }

  return next(action);
};
