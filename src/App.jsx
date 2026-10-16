import './App.css'
import Encabezado from './Componentes/Encabezado';
import Sidebar from './Componentes/Sidebar';
import PiePagina from './Componentes/PiePagina';
import Tarjeta from './Componentes/Tarjeta';
import Presentacion from './Componentes/Presentacion';
import fotoPerfil from './Img/foto2.jpg';


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

  
      <h2>Bienvenidos al programa {programa}</h2>
      <Presentacion usuario={usuario}/>

      <section className="tarjetas">
        
        <Tarjeta
        icono="😘"
        titulo="React"
        descripcion= "Herramienta de javascript para construir interface con componentes"
        horas={120}
        destacada={true}
        />

        <Tarjeta
        icono="😘"
        titulo="vite"
        descripcion="herramienta que crea,ejecuta y empaqueta el proyecto"
        horas={60}
        destacada={false}
        />

        <Tarjeta
        icono=""
        titulo="ESlint"
        descripcion="revisa la calidad del codigo "
        horas={20}
        destacada={true}
        />

      </section>
    </main>
    <PiePagina/>
    
    </div>
    </>
  )
}
export default App