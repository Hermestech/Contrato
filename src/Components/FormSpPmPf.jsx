import React, { Component } from 'react'

import axios from 'axios';
import { saveAs } from 'file-saver'
import './Styles/Form.css'

import { CREATE_PDF, FETCH_PDF } from '../constants';

class FormSpPmPf extends Component{
    state = {
        personaMoralDs: '',
        repLegalPersonaMoral: '',
        domicilioPersonaMoral:'',
        emailPersonaMoral: '',
        nombrePrestador: '',
        domicilioPrestador: '',
        emailPrestador: '',
        serviciosPrestador: '',
        contraprestacion: '',
        plazo: '',
        firma: '',
    }

    handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })
    
      createAndDownloadPdf = (e) => {
          e.preventDefault();
        axios.post(`${CREATE_PDF}SpPmPf`, this.state)
          .then(() => axios.get(FETCH_PDF, { responseType: 'blob' }))
          .then((res) => {
            const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
    
            saveAs(pdfBlob, 'Servicios-Profesionales.pdf');
          })
      }

    render(){
        return (
            <div className='Form__Container'>

                <label htmlFor="">Denominación Social de la empresa:</label>
               
                <input type='text'
                  placeholder='Patito S.A.P.I. De C.V.'
                  name='personaMoralDs'
                  required
                  onChange={this.handleChange}
                />

                <label htmlFor="">Nombre del representante legal de la empresa:</label>
                <input type="text"
                  placeholder='Nombre del Representante legal de la empresa.'
                  name='repLegalPersonaMoral'
                  required
                  onChange={this.handleChange}
                />

                <label htmlFor="">Domicilio de la empresa:</label>
                <input type="text"
                  placeholder="Avenida Siempre Viva 742"
                  name='domicilioPersonaMoral'
                  required
                  onChange={this.handleChange}
                />
    
                <label htmlFor="">Correo electrónico de la empresa:</label>
                <input type="email"
                  placeholder="empresa@mail.com"
                  name='emailPersonaMoral'
                  autoComplete='email'
                  required
                  onChange={this.handleChange}
                />

                <label htmlFor="">Nombre del prestador:</label>
                <input type="text"
                  placeholder="Enrique Segoviano" 
                  name='nombrePrestador'
                  required
                  onChange={this.handleChange} 
                />

                <label htmlFor="">Domicilio del prestador:</label>
                <input type="text"
                  placeholder="Avenida Siempre Viva 742"
                  name='domicilioPrestador'
                  required
                  onChange={this.handleChange}
                />

                <label htmlFor="">Correo electrónico del prestador:</label>
                <input type="text"
                  placeholder='E-mail de la persona física'
                  name='emailPrestador'
                  autoComplete='email'
                  required
                  onChange={this.handleChange}
                />

            <label htmlFor="">Servicios que cubren en este contrato:</label>
            
            <textarea list='servicios'
             placeholder='Escribe los servicios que quieras proteger e.j.: Asesoría Comercial '
             name='serviciosPrestador' 
             required
             spellCheck='true'
             onChange={this.handleChange} />

            <label htmlFor="">Contraprestación del servicio:</label>
             <input type="number"
               placeholder='$1200'
               name='contraprestacion'
               required
               onChange={this.handleChange}
             />

            <label htmlFor="">Plazo de duración:</label>
             <input type="text"
               placeholder='Del 20 de Marzo al 12 de Diciembre del 2021'
               name='plazo'
               autoComplete='name'
               required
               onChange={this.handleChange}
             />

            <button onClick={this.createAndDownloadPdf}>Descargar PDF</button>

            </div>
        )
    }
}

export default FormSpPmPf