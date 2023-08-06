import React, { useState } from 'react'
import logo from '../../../images/logo-bookmark.svg'
import 'boxicons'
import './header.css'
import HeaderMenu from '../headerMenu/HeaderMenu'


const Header = () => {



    const [menuOpen, setMenuOpen] = useState(false);


    const handleOpenMenu = () => {
        setMenuOpen(true)
    }


    const menuClose = () => {
        setMenuOpen(false)
    }


    return (
        <>
            {menuOpen
                ?
                <HeaderMenu
                    menuOpen={menuOpen}
                    menuClose={menuClose} />
                :
                <header>
                    <div className="header__logo">
                        <img src={logo} alt="Logo bookmark" />
                    </div>

                    <div className="header__menu-button"
                        onClick={handleOpenMenu} >

                        <box-icon name='menu' size='md' ></box-icon>
                    </div>


                    <div className="header__options">
                        <h5 className='header__option'>FEATURES</h5>
                        <h5 className='header__option'>PRICING</h5>
                        <h5 className='header__option'>CONTACT</h5>
                        <h5 className='header__option header__menu-login'>LOGIN</h5>
                    </div>

                </header>
            }




        </>
    )
}

export default Header