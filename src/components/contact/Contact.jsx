import React from 'react'
import "./contact.css"



const Contact = () => {


    
    return (
        <div className='contact__container'>

            <p className='contact__data'>35.000 + already joined</p>

            <p className='contact__title'>Stay up-to-date with what we´re doing </p>

            <form className="contact__form">

                <input className='contact__form-input' type="email" name="" id="" placeholder='youremail@somthing.com'  required />

                <button className='contact__form-submit' type="submit">Contact us</button>

            </form>
        </div>
    )
}

export default Contact