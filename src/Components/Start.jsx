import React from 'react'
import { Link } from 'react-router-dom'
const logo = 'https://static.wixstatic.com/media/ef01c5_6f6df2c4dcbd4f328e9b36d80b30843f~mv2.png/v1/fill/w_516,h_192,al_c,q_85,usm_0.66_1.00_0.01/Blanco%20relieve.webp'

function Start() {
    return (
        <Link to={'./home'}>
            
            <article style={{backgroundColor:'#060627'}}>
                <img style={{marginTop:'15%', marginLeft:'30%', }} src={logo} alt="" />
                <button>Iniciar</button>
            </article>
        </Link>
    )
}

export default Start
