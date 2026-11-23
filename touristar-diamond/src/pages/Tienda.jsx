import { Link } from "react-router-dom";
import { api } from "../api.js";
import { useApi } from "../useApi.js";
import { useCart } from "../context/CartContext.jsx";
import Imagen from "../components/Imagen.jsx";
import Estado from "../components/Estado.jsx";

export default function Tienda() {
  const viajes = useApi(() => api.viajes("proximo"));
  const { agregar, items } = useCart();

  return (
    <section className="seccion">
      <h1 className="titulo titulo--grande">Tienda</h1>
      <p className="intro">Elige tu próximo viaje y agrégalo al carrito. Confirmamos cada detalle contigo antes del pago.</p>
      <Estado cargando={viajes.cargando} error={viajes.error} />
      <div className="columnas">
        {viajes.datos?.map((v) => {
          const enCarrito = items.find((i) => i.viaje.id === v.id)?.cantidad ?? 0;
          return (
            <article key={v.id} className="viaje">
              <Imagen src={v.imagen} alt={v.titulo} className="viaje__imagen" />
              <h3 className="titulo titulo--medio">{v.titulo}</h3>
              <p className="viaje__precio">{v.precioUsd.toFixed(2)} USD</p>
              <p>{v.descripcion}</p>
              <button className="boton" onClick={() => agregar(v)}>
                {enCarrito ? `Agregar otro (${enCarrito} en carrito)` : "Agregar al carrito"}
              </button>
            </article>
          );
        })}
      </div>
      {items.length > 0 && <p className="intro"><Link to="/carrito" className="enlace">Ir al carrito</Link></p>}
    </section>
  );
}
