import { createStandardAction } from 'typesafe-actions';

export const SET_CART = 'cart/SET_CART';
export const ADD_ITEM = 'cart/ADD_ITEM';
export const REMOVE_ITEMS = 'cart/REMOVE_ITEMS';

export const setCart = createStandardAction(SET_CART)<object>();
export const addItem = createStandardAction(ADD_ITEM)<object>();
export const removeItem = createStandardAction(REMOVE_ITEMS)<object>();
