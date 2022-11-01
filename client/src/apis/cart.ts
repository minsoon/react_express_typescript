import http from '../lib/axios-client'
import { Carts } from './../modules/cart/types'

export async function getCartApi(type: string) {
    const response = await http.get<Carts>(
        `/api/${type}`
    );
    return response.data;
}
