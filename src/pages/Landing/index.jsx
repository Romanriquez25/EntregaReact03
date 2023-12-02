
import { useState,useMemo } from 'react'
import './index.css'
import BaseColaboradores from './../../store/BaseColaboradores'
import Listado from './../../components/Listado'
import Formulario from './../../components/Formulario'
import Alert from './../../components/Alert'
import Buscador  from '../../components/Buscador'

function App() {

  const [alarma, setAlarma] = useState(false)
  const [type, setType] = useState('')
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  const [busqueda, setBusqueda] = useState('')
  const colaboradoresFiltrados = useMemo(() => colaboradores.filter((colaborador) => `${colaborador.id} ${colaborador.nombre} ${colaborador.correo} ${colaborador.edad} ${colaborador.telefono} ${colaborador.cargo}`.includes(busqueda) ),[busqueda,colaboradores] )
  function appColaborador({ nombre,
    correo,
    edad,
    telefono,
    cargo }) {
    setColaboradores([...colaboradores, {
      id: colaboradores.length + 1,
      nombre: nombre,
      correo: correo,
      edad: edad,
      cargo: cargo,
      telefono: telefono
    }])
  }



  return (
    <>
      <div className='contenedor__principal'>
      <Buscador busqueda={busqueda} setBusqueda={setBusqueda}/>
      <Listado colaboradores={colaboradoresFiltrados}/>
      <Formulario setAlarma={setAlarma} setType={setType} onSubmit={appColaborador} />
      <Alert alarma={alarma} type={type} />
      </div>
      
    </>
  );
}

export default App
