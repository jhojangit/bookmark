import React, { useState } from 'react'
import "./hamburger.css"
import rowOpen from "../../../images/icon-arrow.svg"
import rowClose from "../../../images/icon-close.svg"

const Hamburger = ({data}) => {


    const [open, setopen] = useState(false);


    const handleOpen = () => {
        open ? setopen(false) : setopen(true) 
    }


    return (
        <div className='hamburger'>

            <section onClick={handleOpen} className='hamburger__question'>
                <h3 className='hamburger__title'>{data.question}</h3>
                <div className="hamburger__rowOpen">
                    <img src={open ? rowClose : rowOpen} alt="" />
                </div>
            </section>

            <section className={open ? 'hamburger__answer hamburger__answer-open' :'hamburger__answer'} >
                <p className='hamburger__text'>{data.answer}   </p>
            </section>

                <div className='hamburger__line'></div>
        </div>
    )
}

export default Hamburger