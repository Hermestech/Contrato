import React from 'react'
import './Styles/ContractCard.css'

function ContractCard({contract}){
    console.log(contract.image)
    return(
        <>
        <article className='card'>
         <div className='box'>
            <div className='content'>
            <h2>{contract.name}</h2>                
            <p>{contract.details}</p>

            <button> Crear Contrato </button>
            </div>
         </div>
        </article>
    </>
    )
}

export default ContractCard