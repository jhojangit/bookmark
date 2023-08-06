import React from 'react'
import logo from '../../../images/logo-bookmarkMenu.svg'
import 'boxicons'
import './headerMenu.css'


const HeaderMenu = ({menuOpen, menuClose}) => {



    return (
        <div /* className={menuOpen? "header__menu-open " : "header__menu"} */
            className={menuOpen && "header__menu-open "}>
                <div className="header__menu-header">
                    <img className='header__menu-logo' src={logo} alt="Logo bookmark" />
                    <div className="header__menu-close" onClick={() => menuClose(false)}>
                        <box-icon  className='header__menu-x' color='white' name='x'></box-icon>
                        
                    </div>
                </div>


                <div className="header__menu-options">
                    <hr className='header__menu-line'/>

                    <h3 className='header__menu-option'>FEATURES</h3>
                    <hr className='header__menu-line'/>

                    <h3 className='header__menu-option'>PRICING</h3>
                    <hr className='header__menu-line'/>

                    <h3 className='header__menu-option'>CONTACT</h3>
                    <hr className='header__menu-line'/>

                    <h3 className='header__menu-option header__menu-login'>LOGIN</h3>
                </div>

                <div className="header__menu-social">
                    <box-icon type='logo' color='white'  size='md'  name='facebook-circle'></box-icon>
                    <box-icon name='twitter' color='white'  size='md'  type='logo' ></box-icon>
                </div>
        </div>  )
}

export default HeaderMenu