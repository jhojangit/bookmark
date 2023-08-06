import React, { useState } from 'react'
import "./questions.css"
import Hamburger from '../hamburger/Hamburger'
import data from "../../data/questions.json"



const Questions = () => {



  return (
    <div className='questions__container'>
        <section className='questions__text'>
            <h2 className="questions__title">Frequently Asked Questions</h2>
            <p className="questions__phrase">Here are some our FAQs. 
            If you have any other questions you'd like answered please
            feel free to email us. </p>
        </section>

        <section className='questions__hamburger'>

            {
              data.map(datos => (
                <Hamburger 
                  key={datos.id}
                  data={datos}/>
              ))
            }
        </section>

        <button className='questions__btn'> More Info</button>
    </div>
  )
}

export default Questions