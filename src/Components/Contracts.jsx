import React, {useState, useEffect} from 'react';
import ContractList from './ContractList';
const url = 'http://localhost:5000/contracts'



const Contracts = () => {
    const [contracts, setContracts] = useState([]);
    // const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setContracts(data))
    }, [setContracts])


    return (
        <section className='container'>
            <ContractList contracts={contracts}/>
            {errorMsg && <p className='errorMsg'>{errorMsg}</p>}
        <div className='load-more'>
        <button className='load-button' >
                    {isLoading ? 'Loading...' : 'Load More'}
                </button>
        </div>

        </section>
    )
}

export default Contracts
