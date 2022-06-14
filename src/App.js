import {useEffect, useState} from 'react'
import Formulario from "./Components/Formulario";
import Header from "./Components/Header";
import ListadoPacientes from "./Components/ListadoPacientes";


function App() {
  
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});


  useEffect(() => {

    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])

  const eliminarPaciente = id =>{
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)
  }
  

  return (
    <div>
      <Header 
       
      />

      <div className="mt-12 md:flex">
        <Formulario
          pacientes ={pacientes}
          setPacientes = {setPacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}
        
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente = {setPaciente}
          eliminarPaciente = {eliminarPaciente}
        />
      </div>

    </div>
  )
}

export default App;
