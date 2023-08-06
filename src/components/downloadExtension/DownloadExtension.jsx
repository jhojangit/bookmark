import React from 'react'
import "./downloadExtension.css"
import Card from '../card/Card'
import imgChrome from '../../../images/logo-chrome.svg'
import imgFirefox from '../../../images/logo-firefox.svg'
import imgOpera from '../../../images/logo-opera.svg'


const DownloadExtension = () => {
    return (
        <div className='download__container'>
            <section className='download__phrase'>
                <h2 className="download__title">Download the extension</h2>
                <div className="download__text">We've got more browsers in the pipeline.
                    Please do let us know if you've got a favourite you'd like as to prioritize.</div>
            </section>

            <div className="download__card-container">

                <div className='a'>
                <Card
                    title={"Chrome"}
                    image={imgChrome}
                    version={62}
                    />
                    
                </div>
                

                <div className='a'>
                <Card
                    title={"Firefox"}
                    image={imgFirefox}
                    version={55}
                />
                </div>

                <div className='a'>
                <Card
                    title={"Opera"}
                    image={imgOpera}
                    version={46}
                />
                </div>


            </div>

        </div>
    )
}

export default DownloadExtension