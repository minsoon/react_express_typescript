import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type CartsAction = ActionType<typeof actions>;

export type Carts = {
    buyer: {
        buyerName: string;
    };
    cart: {
        cartUnitId: number;
        seller: {
            miniShopName: string;
            sellerKey: string;
            sellerName: string;
            shopLink: string;
        };
        item: {
            cartUnitId: number;
            itemName: string;
            itemImageUrl: string;
            quantity: number;
            itemSellPrice: number;
        }[];
    }[]
}

export type CartsState = Carts[];

