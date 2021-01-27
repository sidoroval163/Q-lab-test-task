import React, { useState, useEffect, useRef } from 'react';
import './style.css';


const Carousel = () => {
    const [left, setleft] = useState(0);
    const [percentMultipiler, setPercentMultipiler] = useState();
    const [counter, setCounter] = useState()
    const [percentage, setPercentage] = useState(0);
    const [containerItems, setContainerItemsAmount] = useState();
    const [itemsVisible, setItemsVisible] = useState(0);
    const [currPos, setCurrPos] = useState(1);
    const containerRef = useRef(null);
    const carouselRef = useRef(null);
    useEffect(() => {
        setContainerItemsAmount(Math.round((containerRef.current.offsetWidth) / 300));
        (document.body.clientWidth <= 935) ? setItemsVisible(Math.round((carouselRef.current.offsetWidth - 150) / 300)) :
            (document.body.clientWidth <= 1325) ? setItemsVisible(Math.round((carouselRef.current.offsetWidth - 300) / 300)) :
                setItemsVisible(Math.round((carouselRef.current.offsetWidth) / 300));
        setCounter(Math.abs(containerItems - itemsVisible));
        setPercentMultipiler(100 / (counter));
    }, [containerItems, itemsVisible, counter])
    const pixelsStep = 300;

    const onClickLeft = () => { if (currPos !== 1) { setleft(left + pixelsStep); setPercentage(+(percentage - percentMultipiler).toFixed(2)); setCurrPos(currPos - 1); } };
    const onClickRight = () => { if (counter >= currPos) { setleft(left - pixelsStep); setPercentage(+(percentage + percentMultipiler).toFixed(2)); setCurrPos(currPos + 1); } };
    const itemContainerStyle = { left: `${left}px` };



    return (

        <div className="carousel" ref={carouselRef}>
            <div className="carousel_items_container" style={itemContainerStyle} ref={containerRef}>
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
                        Конец Слайдера
                        </div>

                </div>

            </div>


            <div className="progress_bar_container">
                <div className="progress_bar" >
                    <div className="filler" style={{ width: `${percentage}%` }} ></div>
                </div>
            </div>
            <div className="carousel_buttons_container">
                <div className="carousel_buttons_block">
                    <div className="left_button" onClick={() => { onClickLeft() }}></div>
                    <div className="right_button" onClick={() => { onClickRight() }}></div>
                </div>

            </div>
        </div>

    )
}

export default Carousel;