import React from 'react'
import heroSVG from '../../../images/illustration-hero.svg'
import './presentation.css'


const Presentation = () => {
    return (
        <section className='presentation'>

            <section className="presentation__imgs">
                <div className="presentation__hero">
                    <img src={heroSVG} alt="heroSVG" />
                </div>
                <div className="presentation__background"></div>
            </section>

            <section className="presentation__info">
                <div className="presentation__title">
                    <h1>A Simple Bookmark Manager</h1>
                </div>
                <div className="presentation__description">
                    <p>A clean and simple interface to organize your favorites websites.
                        Open a new browser tab and see your sites load instantly. Try it for free.
                    </p>
                </div>

                <article className="presentation__btns">
                    <button className='presentation__btns-btn' >Get it on Chrome</button>
                    <button className='presentation__btns-btn' >Get it on Firefox</button>
                </article>
            </section>


        </section>
    )
}

export default Presentation