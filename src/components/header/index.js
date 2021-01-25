import React from 'react';
import './style.css';


const Header = () => {
    return (
        <div className="header_wrapper">
            <div className="left_header_block">
                <div className="company_name">
                    <p>PROGRESSIVE</p>
                </div>
                <div className="options_list">
                    <ul>
                        <li><span>О нас</span></li>
                        <li><span>Кейсы</span></li>
                        <li><span>Услуги</span></li>
                        <li><span>Контакты</span></li>
                    </ul>
                </div>
            </div>
            <div className="right_header_block">
                <span>info@q-lab.group</span>
                <button><span>+</span></button>
            </div>
        </div>
    )
}

export default Header;