import { Link } from "react-router-dom";
import { api } from "../api.js";
import { useApi } from "../useApi.js";
import Imagen from "../components/Imagen.jsx";
import Estado from "../components/Estado.jsx";

export default function Calendario() {
  const eventos = useApi(() => api.eventos());

  return (
    <div className="cal">
      <section className="cal__hero">
        <h1 className="titulo titulo--blanco titulo--centro">Próximos eventos</h1>
        <p>Consulta las fechas de nuestras salidas y experiencias.</p>
      </section>

      <section className="cal__lista">
        <Estado cargando={eventos.cargando} error={eventos.error} />

        {eventos.datos?.map((e) => (
          <article key={e.id} className="cal__evento">
            <div className="cal__foto">
              <Imagen src={e.imagen} alt={e.titulo} />
              <div className="cal__fecha" aria-label={`${e.dia} de ${e.mes}`}>
                <span>{e.mes}</span>
                <strong>{e.dia}</strong>
              </div>
            </div>

            <div className="cal__info">
              <h2 className="cal__titulo">{e.titulo}</h2>
              <p className="cal__hora">{e.horario}</p>
              <p>{e.descripcion}</p>
              <Link to="/reservar" className="cal__boton">Reservar lugar</Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
