import React from 'react'
import ContractCard from './ContractCard'

const ContractList = ({contracts}) => {
    return (
        <>
            {
                contracts && contracts.map(contract => 
                   <ContractCard key={contract.id} contract={contract}/> )
            }
        </>
    )
}

export default ContractList
