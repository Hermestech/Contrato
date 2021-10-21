import React, { Component } from 'react'

import axios from 'axios';
import { saveAs } from 'file-saver'
import './Styles/Form.css'

import { CREATE_PDF, FETCH_PDF } from '../constants';

class FormLaboralPfPm extends Component{
    state = {
        dsPersonaMoral:'',
        nombreRepresentanteLegal:'',
        nombreTrabajador:'',
        domicilioPersonaMoral:'',
        rfcPatron:'',
        registroPatronal:'',
        nacionalidadTrabajador:'',
        lugarNacimiento:'',
        fechaNacimiento:'',
        edad:'',
        sexoTrabajador:'',
        estadoCivilTrabajador:'',
        curpTrabajador:'',
        numeroSeguroSocial:'',
        domicilioTrabajador:'',
        puestoLaboral:'',
        salarioTrabajador:'',
        jornada : '',
        hrInicio : '',
        hrFinal : '',
        cantidadDias: '',
        ubicacionTrabajo :''
    }

    handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })
    
      createAndDownloadPdf = (e) => {
          e.preventDefault();
        axios.post(`${CREATE_PDF}IndTrabajo`, this.state)
          .then(() => axios.get(FETCH_PDF, { responseType: 'blob' }))
          .then((res) => {
            const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
    
            saveAs(pdfBlob, 'Contrato-Laboral.pdf');
          })
      }

    render(){
        return(
            <div className='Form__Container'>

              <label>Denominación Social del Patrón:</label>
                <input type="text"
                 placeholder= 'Patito S.A.P.I. De C.V.'
                 name='dsPersonaMoral'
                 autoComplete
                 required
                 onChange={this.handleChange}
                />
              <label>Nombre Completo del Representante Legal:</label>
                <input type="text"
                 placeholder= 'Julian Perez Fernandez'
                 name='nombreRepresentanteLegal'
                 onChange={this.handleChange}
                />
              
              <label>Nombre completo del Trabajador:</label>
                <input type="text"
                  placeholder= 'Fernando Fernandez Perez'
                  name='nombreTrabajador'
                  onChange={this.handleChange}
                />

              <label>Domicilio de la empresa:</label>
                <input type="text"
                  placeholder='Avenida Siempre Viva 732'
                  name='domicilioPersonaMoral'
                  onChange={this.handleChange}
                />
              <label>RFC de la empresa:</label>
                <input type="text"
                 placeholder='LOMP8206281HO'
                 name='rfcPatron'
                 onChange={this.handleChange}
                />

              <label>Registro Patronal:</label>
                <input type="text"
                  placeholder='Y54-99995-10-7'
                  name='registroPatronal'
                  onChange={this.handleChange}
                />

              <label>Nacionalidad del Trabajador:</label>
                <input type="text"
                  placeholder='Mexicana'
                  name='nacionalidadTrabajador'
                  onChange={this.handleChange}
                />
              
              <label>Lugar de nacimiento del Trabajador:</label>
                <input type="text"
                 placeholder='Coyoacán, CDMX.'
                 name='lugarNacimiento'
                 onChange={this.handleChange}
                 />

              <label>Fecha de nacimiento del Trabajador:</label>
                <input type="date"
                  name='fechaNacimiento'
                  onChange={this.handleChange}
                />

              <label>Edad del trabajador:</label>
                <input type="text"
                  placeholder='25 años'
                  name='edad'
                  onChange={this.handleChange}
                />

              <label>Sexo del Trabajador:</label>
                <select name="sexoTrabajador" onChange={this.handleChange} >
                    <option value="masculino">masculino</option>
                    <option value="femenino">femenino</option>
                    <option value="otro">otro</option>
                    
                </select>

              <label>Estado Civil del Trabajador:</label>
                <select name="estadoCivilTrabajador" onChange={this.handleChange}>
                    <option value="Soltero">Soltero</option>
                    <option value="Casado">Casado</option>
                </select>

              <label>CURP del trabajador:</label>
                <input type="text"
                    placeholder='MASM020203MDFRNTA6'
                    name='curpTrabajador'
                    onChange={this.handleChange}
                />

              <label>Número de Seguridad Social:</label>
                <input type="number"
                    placeholder='07-95-75-9554-8'
                    name='numeroSeguroSocial'
                    onChange={this.handleChange}
                />

              <label>Domicilio del Trabajador:</label>
                <input type="text"
                    placeholder='Avenida Siempre Viva 732'
                    name='domicilioTrabajador'
                    onChange={this.handleChange}
                />

              <label>Puesto de Trabajo:</label>
                <input type="text"
                    placeholder='Operador de Montacargas.'
                    name='puestoLaboral'
                    onChange={this.handleChange}
                />

              <label>Salario del Trabajador:</label>
                <input type="number"
                    placeholder='$2500'
                    name='salarioTrabajador'
                    onChange={this.handleChange}
                />

              <label>Jornada Laboral:</label>
                <select name="jornada">
                    <option value="diurna">DIURNA</option>
                    <option value="nocturna">NOCTURNA</option>
                </select>

              <label>Hora de Inicio de la Jornada:</label>
                <input type="time"
                    placeholder='9:00 A.M.'
                    name= 'hrInicio'
                    onChange={this.handleChange}
                />
              <label>Hora de Salida de la Jornada:</label>
                <input type="time"
                    placeholder='16:00 P.M.'
                    name= 'hrFinal'
                    onChange={this.handleChange}
                />

              <label>Cantidad de días de trabajo:</label>
                <input type="number"
                    placeholder='5'
                    name='cantidadDias'
                    onChange={this.handleChange}
                />

              <label>Domicilio del lugar de trabajo:</label>
                <input type="text"
                    placeholder='Avenida 123'
                    name='ubicacionTrabajo'
                    onChange={this.handleChange}
                />

            <button onClick={this.createAndDownloadPdf}>Descargar PDF</button>

            </div>
        )
    }

}

export default FormLaboralPfPm