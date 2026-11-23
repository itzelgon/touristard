import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Inicio from "./pages/Inicio.jsx";
import Tienda from "./pages/Tienda.jsx";
import Calendario from "./pages/Calendario.jsx";
import Servicios from "./pages/Servicios.jsx";
import Acerca from "./pages/Acerca.jsx";
import Contacto from "./pages/Contacto.jsx";
import Carrito from "./pages/Carrito.jsx";
import Reservar from "./pages/Reservar.jsx";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/reservar" element={<Reservar />} />
          <Route path="*" element={<section className="seccion"><h1 className="titulo">Página no encontrada</h1></section>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}