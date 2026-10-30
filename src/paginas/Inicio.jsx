import {Link} from "react-router" 

function Inicio(){
    const programa ='analisis y desarrollo de software'

return( 
    <section>
        <h2>bienvenido al programa{programa}</h2>
        <p>Este es el dashboard de la competencia de frontend con React</p>
        <p> 
            empieza por conocer <Link to="/perfil">mi perfil</Link>
            o tambien revisa las{' '}
            <Link to="/tecnologias">tecnologias</Link> que vamos a trabajar
        </p>
    </section>
)
}
export default Inicio