function Presentacion({usuario}) {
  return (
    <section>
      <h1>Mi presentación</h1>
      <h2>Mi nombre es {usuario.nombre}</h2>
      <h3>Vivo en el barrio {usuario.barrio}</h3>
      <h3>Mi correo es {usuario.correo}</h3>
      <h3>Mi teléfono es {usuario.telefono}</h3>
    </section>
  )
}

export default Presentacion
