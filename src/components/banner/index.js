import React, { useRef, useEffect } from 'react';
import './style.css';


const Banner = () => {
    const colorTextRef = useRef(null);
    const textColorizer = () => {
        setTimeout(function () {
            colorTextRef.current.style.backgroundPosition = "0";
        }, 500);
    };
    useEffect(() => {
        textColorizer()
    }, []
    )

    return (
        <div className="wrapper">
            <div className="banner_wrapper">
                <div className="banner_text_block">
                    <div className="banner_header_text">
                        <span ref={colorTextRef} className="activator">Дизайн и разработка</span>
                        <p>cайтов и интерфейсов<br />
                        для веб-сервисов<br />
                        и e-commerce
                    </p>
                    </div>
                    <div className="banner_main_text">
                        <p>Progressive — это студия дизайна и разработки,<br />
                        ориентированная на долгосрочную и продуктивную работу с <br />
                        компаниями и брендами в digital–пространстве. Мы создаем, <br />
                        развиваем и поддерживает сайты, веб–сервисы и e-commerce<br />
                        проекты для бизнеса.
                    </p>
                    </div>

                </div>
                <div className="banner_img_block">
                    <div className="banner_colored_sphere"></div>
                    <div className="banner_img"></div>
                </div>
                <div><button className="banner_main_button">
                    <span>Оставить заявку</span>
                </button>
                </div>
            </div >
        </div>
    )
}

export default Banner;