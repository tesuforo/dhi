import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';




    const FormLayoutDemo = () => {
        const [countries, setCountries] = useState([]);
        const [filteredCountries, setFilteredCountries] = useState(null);
        const [value1, setValue1] = useState('');
        const [value2, setValue2] = useState(null);
        const [value3, setValue3] = useState('');
        const [value4, setValue4] = useState('');
        const [value5, setValue5] = useState('');
        const [value6, setValue6] = useState([]);
        const [value7, setValue7] = useState('');
        const [value8, setValue8] = useState(null);
        const [value9, setValue9] = useState('');
        const [value10, setValue10] = useState(null);
        const [value11, setValue11] = useState(null);
        const [value12, setValue12] = useState('');
    

      
    const [dropdownItem, setDropdownItem] = useState(null);
    const dropdownItems = [
        { name: 'CC', code: 'CC' },
        { name: 'CE', code: 'CE' },
        { name: 'TI', code: 'TI' }
    ];


    const [dropdownItem1, setDropdownItem1] = useState(null);
    const dropdownItems1 = [
        { name: 'F', code: 'F' },
        { name: 'M', code: 'M' },
        { name: 'NO Binario', code: 'No Binario' }
    ];

       const [dropdownItem2, setDropdownItem2] = useState(null);
    const dropdownItems2 = [
        { name: 'Si', code: 'Si' },
        { name: 'No', code: 'No' },
        { name: 'Doble Nacionalidad', code: 'Doble Nacionalidad' }
    ];


        
    
   
    
        const searchCountry = (event) => {
            // in a real application, make a request to a remote url with the query and
            // return filtered results, for demo we filter at client side
            const filtered = [];
            const query = event.query;
            for (let i = 0; i < countries.length; i++) {
                const country = countries[i];
                if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                    filtered.push(country);
                }
            }
            setFilteredCountries(filtered);
        };
    

    return (
        <div className="grid">
            <div className="col-12 md:col-6">
                <div className="card p-fluid">
                    <h5>Paciente DHI</h5>

                     <div className="field">
                            <label htmlFor="tipo_id">Tipo Doc</label>
                            <Dropdown id="tipo_id" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" placeholder="Select One"></Dropdown>
                     </div>  
                    <div className="field">
                        <label htmlFor="identificacion1">Identificación</label>
                        <InputText id="identificacion1" type="text" />
                    </div>
                     
                   

                     <div className="field">
                         <label htmlFor="expdoc">Fecha Expedición Documento</label>
                    <span className="p-float-label">
                        <label htmlFor="calendar">Fecha</label>
                        <label htmlFor="expdoc">Fecha de Expedición documento</label>
                        <Calendar inputId="calendar" value={value5} onChange={(e) => setValue5(e.value)}></Calendar>
                        
                    </span>
                </div>

                    
                   
                    <div className="field">
                        <label htmlFor="name1">Nombres</label>
                        <InputText id="name1" type="text" />
                    </div>
                     <div className="field">
                        <label htmlFor="name2">Apellidos</label>
                        <InputText id="name2" type="text" />
                    </div>
                    
                   
                    <div className="field">
                        <label htmlFor="edad">Edad</label>
                        <InputText id="edad" type="text" />
                    </div>


                    <div className="field">
                            <label htmlFor="sexo">sexo</label>
                            <Dropdown id="sexo" value={dropdownItem1} onChange={(e) => setDropdownItem1(e.value)} options={dropdownItems1} optionLabel="name" placeholder="Select One"></Dropdown>
                     </div>  

                     <div className="field">
                            <label htmlFor="sexo">Extranejero</label>
                            <Dropdown id="sexo" value={dropdownItem2} onChange={(e) => setDropdownItem2(e.value)} options={dropdownItems2} optionLabel="name" placeholder="Select One"></Dropdown>
                     </div>  

                     <div className="field">
                         <label htmlFor="fechnaci">Fecha Nacimiento Documento</label>
                    <span className="p-float-label">
                        
                        <label htmlFor="fechnaci">Fecha de Nacimiento</label>
                        <Calendar inputId="calendar" value={value6} onChange={(e) => setValue6(e.value)}></Calendar>
                        
                    </span>
                </div>

                    <div className="field">
                        <label htmlFor="age1">Estado Civil</label>
                        <InputText id="age1" type="text" />
                    </div>
                      <div className="field">
                        <label htmlFor="age1">Ocupación</label>
                        <InputText id="age1" type="text" />
                    </div>

                </div>

                <div className="card p-fluid">
                    <h5>Ubicación</h5>
                    
                    <div className="formgrid grid">
                        <div className="field col">
                            <label htmlFor="name2">Pais</label>
                            <InputText id="name2" type="text" />
                        </div>
                        <div className="field col">
                            <label htmlFor="email2">Departamento</label>
                            <InputText id="email2" type="text" />
                        </div>
                        
                        <div className="field col">
                            <label htmlFor="email3">Municipio</label>
                            <InputText id="email3" type="text" />
                        </div>
                    </div>


                </div>
            </div>

            <div className="col-12 md:col-6">
                <div className="card p-fluid">
                    <h5>Comunicación</h5>
                    <div className="field grid">
                        <label htmlFor="name3" className="col-12 mb-2 md:col-2 md:mb-0">
                            Telefono 1
                        </label>
                        <div className="col-12 md:col-10">
                            <InputText id="name3" type="text" />
                        </div>
                    </div>
                    <div className="field grid">
                        <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                            Telefono 2
                        </label>
                        <div className="col-12 md:col-10">
                            <InputText id="email3" type="text" />
                        </div>
                    </div>

                     <div className="field grid">
                        <label htmlFor="email4" className="col-12 mb-2 md:col-2 md:mb-0">
                            Correo
                        </label>
                        <div className="col-12 md:col-10">
                            <InputText id="email4" type="text" />
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h5>Financiero</h5>
                    <div className="formgroup-inline">
                        <div className="field">
                            <label htmlFor="firstname1" className="p-sr-only">
                                Saldo
                            </label>
                            <InputText id="firstname1" type="text" placeholder="Saldo" />
                        </div>
                        <div className="field">
                            <label htmlFor="lastname1" className="p-sr-only">
                                Referencia
                            </label>
                            <InputText id="lastname1" type="text" placeholder="Rerencias" />
                        </div>

                        <div className="field">
                            <label htmlFor="categoria" className="p-sr-only">
                                Categoria
                            </label>
                            <InputText id="categoria" type="text" placeholder="Categoria" />
                        </div>

                         <div className="field">
                            <label htmlFor="tipo_usuario" className="p-sr-only">
                                Tipo Usuario
                            </label>
                            <InputText id="tipo_usuario" type="text" placeholder="Tipo Usuario" />
                        </div>
                           <div className="field">
                            <label htmlFor="Prevision" className="p-sr-only">
                                Prevision
                            </label>
                            <InputText id="prevision" type="text" placeholder="Prevision" />
                        </div>


                        <Button label="Actualizar"></Button>
                    </div>
                </div>

                <div className="card">
                    <h5>EPS</h5>
                    <div className="field p-fluid">
                        <label htmlFor="username">Asegurador</label>
                        <InputText id="username" type="text" />
                        <small>Enter your username to reset your password.</small>
                    </div>
                </div>

                 <div className="card">
                    <h5>Creación de Usuario</h5>
                    <div className="field p-fluid">
                        <label htmlFor="username">Comercial</label>
                        <InputText id="username" type="text" />
                        <small>Usuario asigando.</small>
                    </div>
                </div>
            </div>

            <div className="col-12">
                <div className="card">
                    <h5>Datos Avanzados</h5>
                    <div className="p-fluid formgrid grid">
                        <div className="field col-12 md:col-6">
                            <label htmlFor="firstname2">Acudiente:</label>
                            <InputText id="firstname2" type="text" />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="lastname2">Ocupación</label>
                            <InputText id="lastname2" type="text" />
                        </div>
                        <div className="field col-12">
                            <label htmlFor="address">Comentario</label>
                            <InputTextarea id="address" rows="4" />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="city">City</label>
                            <InputText id="city" type="text" />
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="state">State</label>
                            <Dropdown id="state" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" placeholder="Select One"></Dropdown>
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="zip">Zip</label>
                            <InputText id="zip" type="text" />
                        </div>

                        <div className="field">
                        <label htmlFor="responsabilidad">Responsabilidad </label>
                        <InputText id="responsabilidad" type="text" />
                    </div>

                     <div className="field col-12 md:col-3">
                            <label htmlFor="esresponsable"> Es Responsable de retencion de impuestos </label>
                            <Dropdown id="esresponsable" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" placeholder="Select One"></Dropdown>
                     </div>


                    </div>
                </div>
            </div>
        </div>
    );
       
};


export default FormLayoutDemo;
