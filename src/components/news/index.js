import React from 'react';
import Carousel from '../carousel'
import './style.css';


const News = () => {
    return (
        <div className="news_overflow">
            <div className="news_wrapper">
                <div className="news_header">
                    <span>Что нового?</span>
                </div>
                <div className="news_carousel">
                    <Carousel />
                </div>
            </div>
        </div>
    )
}

export default News;