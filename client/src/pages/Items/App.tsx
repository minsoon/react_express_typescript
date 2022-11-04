import React, { useEffect, useState, useCallback } from 'react';
import { getItems } from './../../apis/item';
import '../../list.scss';

const List: React.FunctionComponent = () => {
    const [items, setItems] = useState<object | null>(null);
    const apiCart = async () => {
        const data = await getItems(["1100342222", "1100345094", "1100309438"]);
        setItems(data);
    };
    const addCart = useCallback((data: object) => {
        console.log(data)
    }, [])
    useEffect(() => {
        apiCart();
    }, []);
    return (
        <div className="item-list">
            <ul>
                {Array.isArray(items) && items.map((item: any, index: number) => (
                    <li key={index}>
                        <div>
                            <p><img src={item.imageUrl} alt={item.itemName} /></p>
                            <dl>
                                <dt>{item.itemName}</dt>
                                <dd>{item.sellPrice}</dd>
                            </dl>
                            <button onClick={() => addCart(item)}>
                                장바구니
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;