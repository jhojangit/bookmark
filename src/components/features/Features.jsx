import React from 'react'
import "./features.css"

const Features = () => {
    return (
        <section className='features__container'>

            <h2 className='feaures__title'>Features</h2>
            <p className='features__paragraph'>
                Our aim is to make it quick and easy for you
                to accsess your favorites websites. Your bookmarks
                sync between your devices so you can accsess them
                on the go.
            </p>

            <section className='features__options'>
                <div className="features__line"></div>
                <div className="features__subtitle">Simple Bookmarking</div>
                <div className="features__line-active"></div>
                <div className="features__line"></div>
                <div className="features__subtitle">Speedy Searching</div>
                <div className="features__line-active"></div>
                <div className="features__line"></div>
                <div className="features__subtitle">Easy Sharing </div>
                <div className="features__line-active"></div>
                <div className="features__line"></div>
            </section>

        </section>
    )
}

export default Features