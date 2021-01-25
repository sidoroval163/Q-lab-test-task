import React, { useState, memo, useEffect, useRef } from 'react';
import './style.css';
import CardBuilder from "../card_builder";



const Accordion = ({ title, fist, data }) => {
    const [isOpen, setOpen] = useState(false);
    const sensitive = useRef();
    const content = useRef();
    useEffect(() => {
        if (fist) { setOpen(isOpen => !isOpen) }
    }, [fist]);
    const scrollOnclick = () => {
        setOpen(isOpen => !isOpen);
        sensitive.current.scrollIntoView({ block: "start", inline: "nearest" });
    }

    return (
        <div className="accordion_wrapper" >
            <div className={`accordion_title ${isOpen ? "open" : ""}`}
                onClick={() => scrollOnclick()}
                ref={sensitive}
            >
                {title}
                <div className={`arrow ${isOpen ? "rotated" : ""}`}></div>
            </div>
            <div className={`accordion_item ${!isOpen ? "collapsed" : ""}`} ref={content}>
                <div className="accordion_content"><CardBuilder data={data} /></div>
            </div>
        </div>
    )
}

export default memo(Accordion);