import React, { useState } from 'react';
import './style.css';


const Carousel = () => {
    const [left, setleft] = useState(99 - 275);
    const [counter, setCounter] = useState(0)
    const [percentage, setPercentage] = useState(0);
    const itemsVisible = 5;
    const pixelsStep = 285;
    const onClickLeft = () => { if (counter) { setleft(left + pixelsStep); setCounter(counter - 1); setPercentage(percentage - 20) } };
    const onClickRight = () => { if (counter !== itemsVisible) { setleft(left - pixelsStep); setCounter(counter + 1); setPercentage(percentage + 20) } };
    const itemContainerStyle = { left: `${left}px` };



    return (
        <div>

            <div className="carousel">
                <div className="carousel_items_container" style={itemContainerStyle}>
                    <div className="carousel_item">
                        <div className="carousel_item_header">
                            Название новости в две, три или любое количество строк
                        </div>
                        <div className="carousel_item_description">
                            Тут может быть, а может и не быть краткое описание
                        </div>
                    </div>
                    <div className="carousel_item">
                        <div className="carousel_item_header">
                            Название новости в две, три или любое количество строк
                        </div>
                        <div className="carousel_item_description">
                            Тут может быть, а может и не быть краткое описание
                        </div>
                    </div>
                    <div className="carousel_item">
                        <div className="carousel_item_header">
                            Название новости в две, три или любое количество строк
                        </div>
                        <div className="carousel_item_description">
                            Тут может быть, а может и не быть краткое описание
                        </div>
                    </div>
                    <div className="carousel_item">
                        <div className="carousel_item_header">
                            Название новости в две, три или любое количество строк
                        </div>
                        <div className="carousel_item_description">
                            Тут может быть, а может и не быть краткое описание
                        </div>
                    </div>
                    <div className="carousel_item">
                        <div className="carousel_item_header">
                            Название новости в две, три или любое количество строк
                        </div>

                    </div>
                    <div className="carousel_item">
                        <div className="carousel_item_header">
                            Название новости в две, три или любое количество строк
                        </div>
                        <div className="carousel_item_description">
                            Тут может быть, а может и не быть краткое описание
                        </div>
                    </div>
                    <div className="carousel_item">
                        <div className="carousel_item_header">
                            Название новости в две, три или любое количество строк
                        </div>

                    </div>
                    <div className="carousel_item"></div>
                </div>
                <div className="carousel_buttons_container">
                    <div className="carousel_buttons_block">
                        <div className="left_button" onClick={() => { onClickLeft() }}></div>
                        <div className="right_button" onClick={() => { onClickRight() }}></div>
                    </div>

                </div>

            </div>
            <div className="progress_bar" >
                <div className="filler" style={{ width: `${percentage}%` }} ></div>
            </div>
        </div>
    )
}

export default Carousel;