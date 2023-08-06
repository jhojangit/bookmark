import React from 'react'
import "./card.css"
import dots from '../../../images/bg-dots.svg'


const Card = ({ title, image, version }) => {
    return (
        <section className="download__card">
            <header className='download__card-img'>
                <img src={image} alt={`{title} logo`} />
            </header>

            <section className='download__card-text'>
                <h4 className='download__card-title'>Add to {title}</h4>
                <p className='download__card-version'>Minimum version {version}</p>
            </section>

            <footer className='download__card-footer'>
                <section className='download__card-footer-dots'>
                    <img src={dots} alt="" />
                </section>

                <button className='download__card-footer-bnt'>Add & Install Extension</button>
            </footer>
        </section>
    )
}

export default Card