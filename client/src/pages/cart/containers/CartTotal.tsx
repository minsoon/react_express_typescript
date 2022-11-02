import React from 'react'

const Order = () => {
    return (
        <>
            <div className="order_title order_local">
                <strong className="text">전체합계</strong>
            </div>
            <div className="order_info">
            <ul className="receipt_list_box">
                <li className="list">
                    <span className="label">상품수</span>
                    <span className="format-amount">
                        <strong className="text">11</strong>
                        <span className="unit">개</span>
                    </span>
                </li>
                <li className="list">
                    <span className="label">상품금액</span>
                    <span className="format-price">
                        <span className="box__format-amount">
                            <span className="text__sign"></span>
                            <strong className="text__value">126,000</strong>
                            <span className="text__unit">원</span>
                        </span>
                    </span>
                </li>

            </ul>
            </div>
            <div className="order_summary">
            <strong className="label">총 결제금액</strong>
            <span className="format-price">
                <span className="box__format-amount">
                    <span className="text__sign"></span>
                    <strong className="text__value">122,000,999</strong>
                    <span className="text__unit">원</span>
                </span>
            </span>
        </div>
        </>
    )
}

export default Order;