import React from 'react'
import heroSVG from '../../../images/illustration-features-tab-1.svg'
import "./oneClick.css"

const OneClick = () => {
    return (
        <section className='oneClick'>

            <section className="oneClick__imgs">
                <div className="oneClick__hero">
                    <img src={heroSVG} alt="heroSVG" />
                </div>
                <div className="oneClick__background"></div>
            </section>

            <section className="oneClick__info">
                <div className="oneClick__title">
                    <h1>Bookmark in one click </h1>
                </div>
                <div className="oneClick__description">
                    <p>Organize your bookmarks howeber you like.
                        Our simple drag-and-drop interface gives you complete control
                        over how you manages your favorite sites.
                    </p>
                </div>

                <article className="oneClick__btns">
                    <button className='oneClick__btns-btn' >More info</button>
                </article>
            </section>


        </section>
    )
}

export default OneClick