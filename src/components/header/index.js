import React, { useRef, useState } from 'react';
import './style.css';


const Header = () => {
    const [menuStatus, setMenuStatus] = useState(0);
    const burgerRef = useRef(null);
    const menuRef = useRef(null);
    const burgerChange = () => {
        setMenuStatus(!menuStatus);
        burgerRef.current.classList.contains('active') ?
            burgerRef.current.classList.toggle('not_active') : burgerRef.current.classList.toggle('active');
        !menuStatus ? menuRef.current.classList.add('active') : menuRef.current.classList.remove('active');
    };


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
            <div className="burger_container" onClick={() => { burgerChange() }}>
                <div className="burger" ref={burgerRef} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="dropdown_menu" ref={menuRef}>
                <ul>
                    <li>О нас</li>
                    <li>Кейсы</li>
                    <li>Услуги</li>
                    <li>Контакты</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;