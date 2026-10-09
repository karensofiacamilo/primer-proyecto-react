import './App.css'
import Encabezado from './Componentes/Encabezado';
import Sidebar from './Componentes/Sidebar';
import PiePagina from './Componentes/PiePagina';
import Tarjeta from './Componentes/Tarjeta';
import Presentacion from './Componentes/Presentacion';


function App (){
  const programa ='analisis y desarrollo de software';
  return(
    <>
    <div className='layout'>
    <Encabezado/>
    <Sidebar />

    <main className='contenido'>

  
      <h2>Bienvenidos al programa {programa}</h2>

      <section className="tarjetas">
        <h1>mi nombre es karen sofia camilo camilo</h1>
        <h2>vivo en el barrio tomas cipriano</h2>
        <h3>mi correo es karensofiacamilo70@gmail.com</h3>
        <h4> mi telefono es 3216330725</h4>
        <tarjeta/> 
        <Tarjeta/>
        <Tarjeta/>
      </section>
    </main>
    <PiePagina/>
    <Presentacion/>
    </div>
    </>
  )
}
export default App