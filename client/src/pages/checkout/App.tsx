import React, { useState, useEffect } from 'react';
import { useStyles } from '../../hooks';

const Checkout: React.FunctionComponent = () => {
    const cssLoad = useStyles('/checkout/app.css', 'service__checkout');
    useEffect(() => {
        if (cssLoad === 'ready') {
            console.info('Css Load Success!!')
        }
    }, [cssLoad]);
    return (
        <div id="content" className="checkout__wrap">
            <h2 className="for-a11y">주문하기</h2>
            <section className="section__goods-info">
                <div className="box__card box__card-goods box__card-goods--no-option">
                    <div className="ord_arttit">
                        <h3>주문상품</h3>
                    </div>
                    <div className="ord_cont">
                        <ul className="list__goods-view">
                            <li className="list-item">
                                <div className="box__goods-info">
                                    <div className="box__thmb">
                                        <a href="src/pages/checkout/Checkout#"><img
                                            src="http://image.gmarket.co.kr/gmarket_mobile_image/20140327/@thmb.jpg"
                                            width="80"
                                            height="80"
                                            alt="@@상품명"
                                            className="image__goods" /></a>
                                    </div>
                                    <div className="box__info">
                                        <div className="box__goods-name">
                                            <a href="src/pages/checkout/Checkout#" className="text__goods-name">주문 상품명 노출 영역 주문 상품명 노출 영역</a>
                                        </div>
                                        <div className="box__price">
                                            <span className="text__value">30,000</span><span
                                            className="text__unit">원</span>
                                            <span className="text__amount">
                                                        / 1개</span>
                                            <span className="text__delivery">무료배송</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="section__goods--all">
                    <div className="box__card box__card-goods">
                        <p className="text__title-bundle">록시땅 코리아 같은 판매자 배송비 상이</p>
                        <ul className="list__goods-view">
                            <li className="list-item">
                                <div className="box__goods-info">
                                    <div className="box__thmb">
                                        <a href="src/pages/checkout/Checkout#"><img
                                            src="http://image.gmarket.co.kr/gmarket_mobile_image/20140327/@thmb.jpg"
                                            width="80"
                                            height="80"
                                            alt="@@상품명"
                                            className="image__goods" /></a>
                                    </div>
                                    <div className="box__info">
                                        <div className="box__goods-name">
                                            <a href="src/pages/checkout/Checkout#" className="text__goods-name">
                                                <span className="text__brand">록시땅</span>
                                                바디케어 선택 6종 중 택 2 골라담기 이벤트</a>
                                        </div>
                                        <div className="box__price">
                                            <span className="text__value">483,000</span><span
                                            className="text__unit">원</span>
                                            <span className="text__amount">
                                                        / 1개</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="box__delivery"></div>
                        <ul className="list__goods-view">
                            <li className="list-item">
                                <div className="box__goods-info">
                                    <div className="box__thmb">
                                        <a href="src/pages/checkout/Checkout#"><img
                                            src="http://image.gmarket.co.kr/gmarket_mobile_image/20140327/@thmb.jpg"
                                            width="80"
                                            height="80"
                                            alt="@@상품명"
                                            className="image__goods" /></a>
                                    </div>
                                    <div className="box__info">
                                        <div className="box__goods-name">
                                            <a href="src/pages/checkout/Checkout#" className="text__goods-name">
                                                <span className="text__brand">록시땅</span>
                                                바디케어 선택 6종 중 택 2 골라담기 이벤트</a>
                                        </div>
                                        <div className="box__price">
                                            <span className="text__value">483,000</span><span
                                            className="text__unit">원</span>
                                            <span className="text__amount">
                                                        / 1개</span>
                                        </div>

                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="section__finalpay-info">
                <div className="box__card box__card-finalpay">
                    <div className="box__total-price">
                        <div className="ord_arttit">
                            <h3>최종 결제금액</h3>
                        </div>
                        <div className="text__num">170,500<span className="unit">원</span></div>
                    </div>
                    <div className="ord_cont">
                        <div className="box__detali-price box__detali-price-renew">
                            <ul className="list__detail-price">
                                <li className="list list-total">
                                    <div className="text__title">상품금액</div>
                                    <div className="text__num">172,000<span className="unit">원</span></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="box__total--price-wrap">
                    <div className="box__total--price">
                        <button
                            className="button__total-price uxelayer_ctrl"
                            aria-haspopup="dialog">
                                    <span className="text__deco">
                                        <em>24,000</em>원</span>
                            결제하기
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Checkout;