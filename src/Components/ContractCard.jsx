import React from 'react'
import { Link } from 'react-router-dom'
import './Styles/ContractCard.css'

function ContractCard({contract}){
    console.log(contract.image)
    return(
        <Link to={`/Form/${contract.form_name}`}>
        <article className='card'>
         <div className='box'>
            <div className='content'>
            <h2>{contract.name}</h2>                
            <p>{contract.details}</p>

            <button> Crear Contrato </button>
            </div>
         </div>
        </article>
    </Link>
    )
}

export default ContractCard