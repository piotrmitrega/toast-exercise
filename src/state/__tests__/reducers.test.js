import { RECEIVE_INCOMING_ITEM, receiveIncomingItem } from '../actions';
import { INITIAL_STATE, submissions } from '../reducers';

describe('submissions reducers tests suite', () => {
  describe(RECEIVE_INCOMING_ITEM, () => {
    test('append incoming item to the list', () => {
      const action = receiveIncomingItem({
        id: 1,
        data: { foo: 'bar' }
      });

      const state = {
        ...INITIAL_STATE,
        incomingItems: [{
          id: 0,
          data: {}
        }]
      };

      const result = submissions(state, action);

      expect(result).toMatchSnapshot();
    });
  });
});
