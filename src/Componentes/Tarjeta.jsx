import reactLogo from '../assets/react.svg'

function Tarjeta(){
    return(
        <article className='tarjeta'>
            <img src={reactLogo} alt ='logo de React'/>
            <h3>React</h3>
            <p>Biblioteca de javascript para construir interfaces von expresiones</p>
        </article>
                
    )
}

export default Tarjeta