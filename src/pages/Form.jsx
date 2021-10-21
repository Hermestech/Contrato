import React from 'react'
import { useParams } from 'react-router'
import NavBar from '../Components/NavBar'
import Error404 from '../Components/Error404'
import FormNda from '../Components/FormNda'
import FormSpPmPf from '../Components/FormSpPmPf'
import FormLaboralPfPm from '../Components/FormLaboralPfPm'

const Form = () => {
    let {name}= useParams();
    
    switch (name) {
        case 'FormNda':
            return <><NavBar/><FormNda/></>
        case 'FormSpPmPf':
            return <><NavBar/><FormSpPmPf/></>
        case 'FormLaboralPfPm':
            return<><NavBar/><FormLaboralPfPm/></>
    
        default:
            return <Error404/>
    }
       
}

export default Form
