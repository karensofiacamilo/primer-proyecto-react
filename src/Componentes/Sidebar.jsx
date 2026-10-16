function sidebar({usuario}){
    return(
        <aside className="Sidebar">
            <h3 className="sidebar-saludo">Hola {usuario.nombre}</h3>
            <h3 className="Sidebar-titulo">menu </h3>
            <nav>
                <ul className="sidebar-menu">
                    <li><a href= "#">inicio</a></li>
                    <li><a href= "#">mi perfil</a></li>
                    <li><a href= "#">tecnologias</a></li>
                    <li><a href= "#">recursos</a></li>
                    <li><a href= "#">contactos</a></li>

                </ul>
            </nav>
            <p className="sidebar-pie">3312943- ADSO</p>
        </aside>
    )
}
export default sidebar;