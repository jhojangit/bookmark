import React from 'react'
import "./footer.css"
import logo from '../../../images/logo-bookmarkMenu.svg'
import 'boxicons'


const Footer = () => {
    return (
        <footer className='footer__container'>
            <section className='footer__links'>
                <div className="footer__links-logo">
                    <img src={logo} alt="" />
                </div>
                <ul className='footer__ul'>
                    <li className='footer__ul-li'>FEATURES</li>
                    <li className='footer__ul-li'>PRICING</li>
                    <li className='footer__ul-li'>CONTACT</li>
                </ul>
            </section>

            <section className='footer__social'>
                <box-icon type='logo' color='white'  size='md'  name='facebook-circle'></box-icon>
                <box-icon name='twitter' color='white'  size='md'  type='logo' ></box-icon>
            </section>
        </footer>
    )
}

export default Footer