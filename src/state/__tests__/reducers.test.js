import {
  DISMISS_ITEM,
  dismissItem,
  FETCH_LIKED_ITEMS_SUCCESS,
  fetchLikedItemsSuccess,
  LIKE_ITEM,
  likeItem,
  RECEIVE_INCOMING_ITEM,
  receiveIncomingItem
} from '../actions';
import { INITIAL_STATE, submissions } from '../reducers';

describe('submissions reducers tests suite', () => {
  const dummyItem = {
    id: '1',
    data: { name: 'dummy' }
  };

  const anotherDummyItem = {
    id: '2',
    data: { name: 'anotherDummy' }
  };

  describe(RECEIVE_INCOMING_ITEM, () => {
    test('append incoming item to the list', () => {
      const action = receiveIncomingItem(dummyItem);

      const state = {
        ...INITIAL_STATE,
        incomingItems: [anotherDummyItem]
      };

      const result = submissions(state, action);

      expect(result).toMatchSnapshot();
    });
  });

  describe(LIKE_ITEM, () => {
    test('remove item from from incomingItems', () => {
      const action = likeItem(dummyItem);

      const state = {
        ...INITIAL_STATE,
        incomingItems: [dummyItem]
      };

      const result = submissions(state, action);

      expect(result).toMatchSnapshot();
    });

    test('add item to likedItems', () => {
      const action = likeItem(dummyItem);

      const state = {
        ...INITIAL_STATE
      };

      const result = submissions(state, action);

      expect(result).toMatchSnapshot();
    });
  });

  describe(DISMISS_ITEM, () => {
    test('remove item from likedItems', () => {
      const action = dismissItem(dummyItem);

      const state = {
        ...INITIAL_STATE,
        incomingItems: [anotherDummyItem],
        likedItems: [dummyItem]
      };

      const result = submissions(state, action);

      expect(result).toMatchSnapshot();
    });

    test('remove item from incomingItems', () => {
      const action = dismissItem(dummyItem);

      const state = {
        ...INITIAL_STATE,
        incomingItems: [dummyItem],
        likedItems: []
      };

      const result = submissions(state, action);

      expect(result).toMatchSnapshot();
    });
  });

  describe(FETCH_LIKED_ITEMS_SUCCESS, () => {
    test('should set fetched liked items', () => {
      const action = fetchLikedItemsSuccess([dummyItem, anotherDummyItem]);

      const state = {
        ...INITIAL_STATE
      };

      const result = submissions(state, action);

      expect(result).toMatchSnapshot();
    });

    test('should not omit locally liked items that are not included in server response', () => {
      const action = fetchLikedItemsSuccess([dummyItem]);

      const state = {
        ...INITIAL_STATE,
        likedItems: [anotherDummyItem]
      };

      const result = submissions(state, action);

      expect(result).toMatchSnapshot();
    });
  });
});
