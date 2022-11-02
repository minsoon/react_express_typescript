import React from 'react'
import { useHistory } from 'react-router-dom';

const Order = () => {
    const history = useHistory();

    const nextPage = (event: React.MouseEvent<HTMLElement>) => {
        history.push('/checkout')
    }
    return (
        <div className="order_action fixed">
            <div className="flex_wrap">
                <div className="flex">
                    <div className="summary">
                        <span className="item_qty">전체 <em className="text__value">31</em>개</span>
                        <span className="format-price">
                            <span className="box__format-amount">
                                <span className="text__sign"></span>
                                <strong className="text__value">99,999,000</strong>
                                <span className="text__unit">원</span>
                            </span>
                        </span>
                    </div>
                </div>
                <div className="flex">
                    <button className="btn_submit" onClick={nextPage}>
                        <span className="text">주문하기</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Order;