import React, { memo } from 'react';
import './style.css';



const CardBuilder = ({ data }) => {
    return data.map((item, index) => {
        let { companyName, companyInfo } = item;
        return (
            <div className="card_item" key={index.toString()}>
                <div className="card_item_text">
                    <span className="card_item_company">{companyName}</span>
                    <span className="card_item_description">{companyInfo}</span>
                </div>
                <button className="card_item_button">Подробнее</button>
            </div>

        )
    })
};

export default memo(CardBuilder);