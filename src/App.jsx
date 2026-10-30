import "./App.css"
import Encabezado from './Componentes/Encabezado';
import Sidebar from './Componentes/Sidebar';
import PiePagina from './Componentes/PiePagina';
import Tarjeta from './Componentes/Tarjeta';
import {tecnologias}from'./data/tecnologia.js';
import Presentacion from './Componentes/Presentacion';
import fotoPerfil from './Img/foto2.jpg';
import Inicio from './paginas/Inicio.jsx';
import Perfil from "./paginas/Perfil.jsx"
import {Route, Routes} from "react-router"


function App (){
  const programa ='analisis y desarrollo de software';
  const usuario = {
  nombre: 'karen sofia camilo',
  rol: 'Aprendiz ADSO',
  foto: fotoPerfil,
  correo: 'karensofiacamilo70@gmail.com',
  telefono:'3216330725',
  barrio:'tomas cipriano',
}
  return(
    <>
    <div className='layout'>
    <Encabezado usuario={usuario} />
    <Sidebar usuario={usuario} />

    <main className='contenido'>
      <Routes>
        <Route path="/" element= {<Inicio/>} />
        <Route path="/perfil" element = {<Perfil />} />
      </Routes>
    </main>
    <PiePagina/>
    </div>
    </>
  )
}
export default App