import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const ENLACES = [
  ["/calendario", "Calendario"],
  ["/servicios", "Servicios"],
  ["/acerca", "Acerca de"],
  ["/contacto", "Contacto"],
];

// Páginas con diseño oscuro: agrega aquí las rutas que vayas rediseñando
const RUTAS_OSCURAS = ["/", "/calendario", "/servicios", "/contacto", "/reservar", "/acerca"];

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const { pathname } = useLocation();
  const oscuro = RUTAS_OSCURAS.includes(pathname);
  const cerrar = () => setAbierto(false);

  return (
    <header className={`nav ${oscuro ? "nav--oscuro" : ""}`}>
      <Link to="/" className="nav__marca" onClick={cerrar}>Touristar Diamond</Link>

      <button className="nav__toggle" aria-expanded={abierto} aria-label="Abrir menú"
              onClick={() => setAbierto(!abierto)}>
        {abierto ? "Cerrar" : "Menú"}
      </button>

      <nav className={`nav__enlaces ${abierto ? "nav__enlaces--abierto" : ""}`}>
        {ENLACES.map(([ruta, texto]) => (
          <NavLink key={ruta} to={ruta} onClick={cerrar}>{texto}</NavLink>
        ))}
        <Link to="/reservar" className="boton nav__reservar" onClick={cerrar}>Reservar</Link>
      </nav>
    </header>
  );
}
