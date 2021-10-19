import React from 'react'
import { useParams } from 'react-router'
import Error404 from '../Components/Error404'
import FormNda from '../Components/FormNda'
import FormSpPmPf from '../Components/FormSpPmPf'
import NavBar from '../Components/NavBar'

const Form = () => {
    let {name}= useParams();
    
    switch (name) {
        case 'FormNda':
            return <><NavBar/><FormNda/></>
        case 'FormSpPmPf':
            return <><NavBar/><FormSpPmPf/></>
    
        default:
            return <Error404/>
    }
       
}

export default Form
