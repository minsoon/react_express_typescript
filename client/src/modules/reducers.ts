import { combineReducers } from 'redux';
import cart from './cart/reducer';

const rootReducer = combineReducers({
    cart
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

