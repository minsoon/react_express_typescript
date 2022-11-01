import { CartsState } from './types';
import { createReducer } from 'typesafe-actions';
import { SET_CART, ADD_ITEM, REMOVE_ITEMS } from './actions';

const initialState: CartsState = [];

const Cart = createReducer(initialState, {
    [SET_CART]: (state, action) =>
        state.concat({
            ...action.payload
        }),
    [ADD_ITEM]: (state, action) => ({
        ...state,
        [action.payload.key]: action.payload.value
    }),
    [REMOVE_ITEMS]: (state, action) => ({
        ...state,
        [action.payload.key]: action.payload.value
    })
});

export default Cart;