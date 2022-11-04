import http from '../lib/axios-client'
import { Items } from './../modules/Items/types'

export async function getItems(itemNos: any) {
    const response = await http.post<Items>(
        `/api/items`,
        {
            itemNos: itemNos
        }
    );
    return response.data;
}
