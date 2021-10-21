import React from 'react'
import { Link } from 'react-router-dom'
import './Styles/NavBar.css'
const logo = 'https://static.wixstatic.com/media/ef01c5_6f6df2c4dcbd4f328e9b36d80b30843f~mv2.png/v1/fill/w_516,h_192,al_c,q_85,usm_0.66_1.00_0.01/Blanco%20relieve.webp'



const NavBar = () => {
    return (
        <header className="header">
        <Link to={'../home'}>
        <img className="header__img" src={logo} alt= 'logo'/>        
        </Link>
            
              
        </header>
    )
}

export default NavBar