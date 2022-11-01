import { useLocation } from 'react-router-dom';
import React from 'react';

const Header = () => {
    const location = useLocation();
    return (
        <div id="header">
            <div className="box__header box__header--border">
                <div className="box__header-inner">
                    <div className="box__header-content">
                        <div className="box__header-title">
                            <h1 className="box__title">
                                <span className="text">{location.pathname === '/cart' ? '장바구니' : '주문하기'}</span></h1>
                        </div>
                        <div className="box__header-menu"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;