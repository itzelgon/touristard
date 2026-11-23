import { Link } from "react-router-dom";
import { api } from "../api.js";
import { useApi } from "../useApi.js";
import Imagen from "../components/Imagen.jsx";
import Estado from "../components/Estado.jsx";

export default function Servicios() {
  const viajes = useApi(() => api.viajes("proximo"));
  const empresa = useApi(() => api.empresa());
  const whatsapp = empresa.datos?.whatsapp ?? "5214428647215";

  const cotizar = (titulo) =>
    `https://wa.me/${whatsapp}?text=${encodeURIComponent(`Hola, quiero cotizar: ${titulo}`)}`;

  return (
    <div className="srv">
      <section className="srv__intro">
        <h1 className="titulo titulo--blanco">Viajes a la medida con elegancia</h1>
        <div>
          <p>
            Cultivamos experiencias de viaje que trascienden el itinerario; cada detalle ha sido
            curado para reflejar una estética refinada y un profundo respeto por la cultura local.
          </p>
          <p>
            Nuestra filosofía privilegia el ritmo pausado; creemos que el auténtico lujo radica en
            la libertad de contemplar, degustar y descubrir a tu propio paso, acompañado siempre
            por un servicio discreto y atento.
          </p>
        </div>
      </section>

      <section className="srv__lista">
        <Estado cargando={viajes.cargando} error={viajes.error} />

        {viajes.datos?.map((v) => (
          <article key={v.id} className="srv__viaje">
            <div className="srv__foto">
              <Imagen src={v.imagen} alt={v.titulo} />
              {v.etiqueta && <span className="srv__precio">{v.etiqueta}</span>}
            </div>
            <div className="srv__cuerpo">
              <h2 className="srv__titulo">{v.titulo}</h2>
              <p>{v.descripcion}</p>
              <div className="srv__acciones">
                <a href={cotizar(v.titulo)} target="_blank" rel="noreferrer" className="srv__boton">
                  Cotizar
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 21l2.1-5.2A8.5 8.5 0 1 1 21 11.5z" />
                  </svg>
                </a>
                <Link to="/contacto" className="srv__enlace">Más información</Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}