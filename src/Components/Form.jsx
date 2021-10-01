import React, { Component } from 'react'

import axios from 'axios';
import { saveAs } from 'file-saver'

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
    
      createAndDownloadPdf = () => {
        axios.post('/create-pdf', this.state)
          .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
          .then((res) => {
            const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
    
            saveAs(pdfBlob, 'newPdf.pdf');
          })
      }
    
      render() {
        return (
            
          <div className="App">
            <label for="">Denominación Social Empresa 1:</label>
           <input type="text"
             placeholder='Denominación social Parte principal'
             name='dsActor' onChange={this.handleChange}/>

           <label for="">Nombre completo del Representante Legal:</label>
           <input type="text" 
           placeholder='Representante legal' 
           name='rpLegalActor' onChange={this.handleChange}/>

           <label >Parte 1:</label>
             <input type="text"
              placeholder='Parte 1'
               name='parteActor' onChange={this.handleChange}/>

           <label for="">Domicilio de la Denominación Social de la Empresa 1:</label>
             <input type="text"
              placeholder='Domicilio'
               name='domicilioActor' onChange={this.handleChange}/>

            <label for="">Dirección de E-mail: </label>
             <input type="email" 
             placeholder='E-mail'
              name='emailActor' onChange={this.handleChange} />
     
            <label for="">Denominación Social de la Contraparte:</label>
             <input type="text"
              placeholder='Nombre Contraparte' 
              name='dsResistente'onChange={this.handleChange}/>

            <label for="">Nombre Completo del Representante Legal de la Contraparte:</label>
             <input type="text" 
             placeholder='Representante legal Contraparte' 
             name='rpLegalResistente' onChange={this.handleChange}/>
             
            <label htmlFor="">Parte 2:</label>
             <input type="text"
              placeholder='Parte 2'
              name='parteResistente' onChange={this.handleChange}/>

            <label htmlFor="">Domicilio de la Denominación Social de la Empresa 2:</label>
             <input type="text" 
             placeholder='Domicilio'
            name='domicilioResistente' onChange={this.handleChange}/>

            <label for="">Dirección de E-mail: </label> 
            <input type="email" 
            placeholder='E-mail'
             name='emailResistente' onChange={this.handleChange} />
     
            <label htmlFor="">Servicios a protegerse dentro de este NDA:</label>
             <input type="text"
              placeholder='Servicios'
              name='Servicios' 
              onChange={this.handleChange} />
            
            
            <button onClick={this.createAndDownloadPdf}>Download PDF</button>
          </div>
        );
      }
}

export default Form;