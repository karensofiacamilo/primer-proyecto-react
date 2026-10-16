

function Tarjeta({icono,titulo,descripcion,horas,destacada}){
   
    return(
        <article className={destacada ? 'tarjeta-destacada': "tarjeta"}> evalua la condicion
            <span className='tarjeta-icono'>{icono}</span>
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            <p className="tarjeta-horas"> {horas} horas </p>
        </article>
                
    )
}

export default Tarjeta