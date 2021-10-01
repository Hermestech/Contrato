import React, { Component } from 'react'

import axios from 'axios';
import { saveAs } from 'file-saver'
import './Styles/Form.css'

const Url = 'https://react-express-contrato.herokuapp.com/'

class Form extends Component {
    state = {
        dsActor:'',
        rpLegalActor:'',
        parteActor: '',
        domicilioActor:'',
        emailActor:'',
        dsResistente: '',
        rpLegalResistente:'',
        parteResistente: '',
        domicilioResistente:'',
        emailResistente:'',
        Servicios: '',
      }
    
      handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })
    
      createAndDownloadPdf = (e) => {
          e.preventDefault();
        axios.post(`${Url}create-pdf`, this.state)
          .then(() => axios.get(`${Url}fetch-pdf`, { responseType: 'blob' }))
          .then((res) => {
            const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
    
            saveAs(pdfBlob, 'newPdf.pdf');
          })
      }
    
      render() {
        return (

          <div className="container">
            <label for=""> Denominación Social Empresa 1:</label>
           <input type="text"
             placeholder='Escribe la Denominación Social de la Parte principal'
             name='dsActor'
             autoComplete='name'
             required
             onChange={this.handleChange}/>

           <label for="">Nombre completo del Representante Legal:</label>
           <input type="text" 
           placeholder='Representante legal' 
           autoComplete='name'
           data-message='algo'
           name='rpLegalActor' onChange={this.handleChange}/>

           <label >Parte 1:</label>
             <input type="text"
              placeholder='Escribe cómo te referirás a la Denominación Social 1'
              required
               name='parteActor' onChange={this.handleChange}/>

           <label for="">Domicilio de la Denominación Social de la Empresa 1:</label>
             <input type="text"
              placeholder='Domicilio Completo'
              required
               name='domicilioActor' onChange={this.handleChange}/>

            <label for="">Dirección de E-mail: </label>
             <input type="email" 
             placeholder='E-mail'
             autoComplete='email'
             required
              name='emailActor' onChange={this.handleChange} />
     
            <label for="">Denominación Social de la Contraparte:</label>
             <input type="text"
              placeholder='Escribe la denominación social de la Contraparte' 
              required
              name='dsResistente'onChange={this.handleChange}/>

            <label for="">Nombre Completo del Representante Legal de la Contraparte:</label>
             <input type="text" 
             placeholder='Escribe el nombre del Representante legal de la Contraparte' 
             autoComplete='name'
             required
             name='rpLegalResistente' onChange={this.handleChange}/>
             
            <label htmlFor="">Parte 2:</label>
             <input type="text"
              placeholder='Escribe cómo te referirás a la Denominación Social 2'
              required
              name='parteResistente' onChange={this.handleChange}/>

            <label htmlFor="">Domicilio de la Denominación Social de la Empresa 2:</label>
             <input type="text" 
             placeholder='Domicilio'
             required
            name='domicilioResistente' onChange={this.handleChange}/>

            <label for="">Dirección de E-mail: </label> 
            <input type="email" 
            placeholder='E-mail de la contraparte'
            autoComplete='email'
            required
             name='emailResistente' onChange={this.handleChange} />
     
            <label htmlFor="">Servicios a protegerse dentro de este NDA:</label>
            
             <textarea list='servicios'
              placeholder='Escribe los servicios que quieras proteger e.j.: Asesoría Comercial '
              name='Servicios' 
              required
              spellCheck='true'
              onChange={this.handleChange} />
              
            
            
            <button onClick={this.createAndDownloadPdf}>Descargar PDF</button>
          </div>
        );
      }
}

export default Form;