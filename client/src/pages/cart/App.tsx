import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../modules/reducers'
import { setCart, addItem, removeItem} from '../../modules/cart/actions';
import { useStyles } from '../../hooks';
import { getCartApi } from './../../apis/cart';

import CartList from './containers/CartList';
import CartTotal from './containers/CartTotal';
import CartOrder from './containers/CartOrder';

const Cart: React.FunctionComponent = () => {

    const cssLoad = useStyles('/cart/app.css', 'service__cart');
    const carts = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        if (cssLoad === 'ready') {
            console.info('Css Load Success!!')
        }
    }, [cssLoad]);


    useEffect(() => {
        async function apiCart() {
            const data = await getCartApi('getCart');
            if (data !== null && data.hasOwnProperty('buyer')){
                dispatch(setCart(data));
            }
        }
        apiCart();
    },[]);

    return (
        <div id="content" className="cart__wrap" style={{paddingBottom: 100}}>
            <div id="cart_body">
                <div className="inner_cont">
                    <CartList />

                    <div id="cart_order">
                        <h3 className="for_a11y">최종 결제정보</h3>
                        <div className="order">
                            <CartOrder />
                            <CartTotal />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;