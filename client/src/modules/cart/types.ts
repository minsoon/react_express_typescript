import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type CartsAction = ActionType<typeof actions>;

export type Carts = {
    buyer: {
        buyerName: string;
    };
    cart: {
        cartUnitId: number;
        seller: Seller;
        item: {
            cartUnitId: number;
            itemName: string;
            itemImageUrl: string;
            quantity: number;
            itemSellPrice: number;
        }[];
    }[]
}

export type Seller = {
    miniShopName: string;
    sellerKey: string;
    sellerName: string;
    shopLink: string;
}

export type CartsState = Carts[];

