import React from 'react'

const List = () => {
    return (
        <div id="cart_list">
            <h3 className="for_a11y">나의 장바구니 목록</h3>
            <ol className="basket_list_group">
                <li className="cart--basket sampleData type_minishop">
                    <div className="cart--basket_header">
                        <span className="input_custom" title="샵 내 상품 전체선택">
                            <input type="checkbox" id="item_shop_all_select" name="" className="input__checkbox sprite__cart" />
                            <label htmlFor="item_shop_all_select" className="for_a11y">샵 내 상품 전체선택</label>
                        </span>
                        <a className="link_area">
                            <strong className="shop_name">SHOP명</strong>
                            <span className="for_a11y">으로 이동</span>
                        </a>
                    </div>
                    <div className="cart--basket_body">
                        <div className="shipping--no--group">
                            <ul className="order--list">
                                <li className="order--idx">
                                    <div className="item">
                                        <div className="item_check">
                                            <span className="input_custom">
                                                <input type="checkbox" id="item_select" name="" title="상품선택" className="input__checkbox sprite__cart" />
                                                <label htmlFor="item_select" className="for_a11y">상품선택</label>
                                            </span>
                                        </div>
                                        <div className="item_img">
                                            <a><img src="http://gdimg.gmarket.co.kr/874034708/still/160?ver=0" alt="상품이미지" /></a>
                                        </div>
                                        <div className="item_info">
                                            <dl className="unit--item first">
                                                <dt>
                                                    <strong className="for_a11y">구매할 상품 상세 정보</strong>
                                                </dt>
                                                <dd className="unit--item_desc">
                                                    <div className="section item_title">
                                                        <a>
                                                            <strong className="for_a11y">상품명:
                                                            </strong>
                                                            <span id="itemName2" className="item_name">3개 조합형상품 경우의 수 샘플데이터</span>
                                                        </a>
                                                    </div>
                                                    <div className="section item_qty">
                                                        <strong className="for_a11y">상품수량</strong>
                                                        <div className="item_qty_wrap">
                                                            <input className="item_qty_count" type="text" />
                                                            <button className="btn_plus sprite__cart">
                                                                <i className="icon sp_cart btn_qty_plus">
                                                                    <span className="for_a11y">상품 수 1 증가</span>
                                                                </i>
                                                            </button>
                                                            <button className="btn_minus sprite__cart">
                                                                <i className="icon sp_cart btn_qty_minus">
                                                                    <span className="for_a11y">상품 수 1 감소</span>
                                                                </i>
                                                            </button>
                                                            <div className="loading">
                                                                <span className="for_a11y">로딩중</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="section item_price">
                                                        <strong className="for_a11y">상품 금액 :
                                                        </strong>
                                                        <span className="format-price">
                                                            <span className="box__format-amount">
                                                                <span className="text__sign"></span>
                                                                <strong
                                                                    className="text__value">20,000</strong>
                                                                <span
                                                                    className="text__unit">원</span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="section item_del">
                                                        <button className="btn_del sprite__cart">
                                                            <i className="icon sp_cart btn_cart_item_del">
                                                                <span className="for_a11y">상품 삭제</span>
                                                            </i>
                                                        </button>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="cart--basket_footer">
                        <span className="for_a11y">OOO에서 담은 장바구니 상품 소계</span>
                        <div className="cart--basket--total">
                            <div className="sub_sec">
                                <span className="label">상품금액</span>
                                <span className="format-price">
                                                <span className="box__format-amount">
                                                    <span className="text__sign"></span>
                                                    <strong className="text__value">70,000</strong>
                                                    <span className="text__unit">원</span>
                                                </span>
                                            </span>
                            </div>

                            <div className="sub_total">
                                <span className="label">주문금액</span>
                                <span className="format-price">
                                                <span className="box__format-amount">
                                                    <span className="text__sign"></span>
                                                    <strong className="text__value">45,000</strong>
                                                    <span className="text__unit">원</span>
                                                </span>
                                            </span>
                            </div>
                        </div>
                    </div>
                </li>
            </ol>
        </div>
    )
}

export default List;