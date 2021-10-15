import React, { Component } from 'react'

import axios from 'axios';
import { saveAs } from 'file-saver'
import './Styles/Form.css'

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
        axios.post(`/pdf/create-pdf/SpPmPf`, this.state)
          .then(() => axios.get(`/pdf/fetch-pdf`, { responseType: 'blob' }))
          .then((res) => {
            const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
    
            saveAs(pdfBlob, 'newPdf.pdf');
          })
      }

    render(){
        return (
            <div className='container'>

                <label htmlFor="">Denominación Social de la empresa:</label>
               
                <input type='text'
                  placeholder='Patito S.A.P.I. De C.V.'
                  name='personaMoralDs'
                  autoComplete='name'
                  required
                  onChange={this.handleChange}
                />

                <input type="text"
                  placeholder='Nombre del Representante legal de la empresa.'
                  name='repLegalPersonaMoral'
                  autoComplete='name'
                  required
                  onChange={this.handleChange}
                />

                <input type="text"
                  placeholder="Domicilio de la persona Moral: Avenida Siempre Viva 742"
                  name='domicilioPersonaMoral'
                  autoComplete='name'
                  required
                  onChange={this.handleChange}
                />

                <input type="text"
                  placeholder="E-mail de la empresa"
                  name='emailPersonaMoral'
                  autoComplete='name'
                  required
                  onChange={this.handleChange}
                />

                <input type="text"
                  placeholder="Nombre de la persona Física: 'Juan Pérez' " 
                  name='nombrePrestador'
                  autoComplete='name'
                  required
                  onChange={this.handleChange} 
                />

                <input type="text"
                  placeholder="Domicilio de la persona Física: Avenida Siempre Viva 742"
                  name='domicilioPrestador'
                  autoComplete='name'
                  required
                  onChange={this.handleChange}
                />

                <input type="text"
                  placeholder='E-mail de la persona física'
                  name='emailPrestador'
                  autoComplete='name'
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

             <input type="text"
               placeholder='Costo total del servicio'
               name='contraprestacion'
               autoComplete='name'
               required
               onChange={this.handleChange}
             />

             <input type="text"
               placeholder='plazo que durará el contrato'
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