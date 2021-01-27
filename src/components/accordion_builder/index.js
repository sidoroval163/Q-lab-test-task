import React, { useState, memo, useEffect, useRef } from 'react';
import './style.css';
import CardBuilder from "../card_builder";



const Accordion = ({ title, fist, data }) => {
    const [isOpen, setOpen] = useState(false);
    const sensitiveRef = useRef();
    const contentRef = useRef();
    useEffect(() => {
        if (fist) { setOpen(isOpen => !isOpen) }
    }, [fist]);
    const scrollOnclick = () => {
        setOpen(isOpen => !isOpen);
        sensitiveRef.current.scrollIntoView({ block: "start", inline: "nearest" });
    }

    return (
        <div className="accordion_wrapper" >
            <div className={`accordion_title ${isOpen ? "open" : ""}`}
                onClick={() => scrollOnclick()}
                ref={sensitiveRef}
            >
                <span>{title}</span>
                <div className={`arrow ${isOpen ? "rotated" : ""}`}></div>
            </div>
            <div className={`accordion_item ${!isOpen ? "collapsed" : ""}`} ref={contentRef}>
                <div className="accordion_content"><CardBuilder data={data} /></div>
            </div>
        </div>
    )
}

export default memo(Accordion);