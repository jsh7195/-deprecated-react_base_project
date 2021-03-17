/*
import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const PRODUCT_SEARCH_INPUT = 'product/PRODUCT_SEARCH_INPUT';

export const productSearchInput = createAction(PRODUCT_SEARCH_INPUT);

const initialState = Map({
  keyword: '',
});

export default handleActions(
  {
    [PRODUCT_SEARCH_INPUT]: (state, action) => {
      return state.set('keyword', action.payload);
    },
  },
  initialState
);


*/
