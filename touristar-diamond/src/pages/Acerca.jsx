import { Link } from "react-router-dom";
import { api } from "../api.js";
import { useApi } from "../useApi.js";
import Imagen from "../components/Imagen.jsx";
import Estado from "../components/Estado.jsx";

export default function Acerca() {
  const realizados = useApi(() => api.viajes("realizado"));

  return (
    <div className="aco">
      <section className="aco__hero">
        <h1 className="titulo titulo--blanco">Viajes a tu medida</h1>
        <div>
          <p>
            Con una mirada atenta a la excelencia, diseñamos itinerarios donde la cultura, el
            confort y la autenticidad conviven con naturalidad. Cada destino se selecciona por su
            esencia única; cada experiencia, por su capacidad de despertar los sentidos y
            enriquecer el espíritu.
          </p>
          <p>
            Nuestro equipo de especialistas explora personalmente rutas, alojamientos y sabores
            locales para ofrecerte propuestas matizadas y profundamente humanas. Así, convertimos
            el simple acto de viajar en una experiencia fluida, memorable y única.
          </p>
        </div>
      </section>

      <section className="aco__realizados">
        <h2 className="titulo titulo--blanco">Viajes realizados</h2>
        <Estado cargando={realizados.cargando} error={realizados.error} />

        <div className="aco__lista">
          {realizados.datos?.map((v) => (
            <article key={v.id} className="srv__viaje">
              <div className="srv__foto">
                <Imagen src={v.imagen} alt={v.titulo} />
                {v.etiqueta && <span className="srv__precio">{v.etiqueta}</span>}
              </div>
              <div className="srv__cuerpo">
                <h3 className="srv__titulo">{v.titulo}</h3>
                <p>{v.descripcion}</p>
                <div className="srv__acciones">
                  <Link to="/reservar" className="srv__boton">Cotizar un viaje similar</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}