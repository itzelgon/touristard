import { Link } from "react-router-dom";
import { api } from "../api.js";
import { useApi } from "../useApi.js";
import Imagen from "../components/Imagen.jsx";
import Estado from "../components/Estado.jsx";

const INSTAGRAM = "https://www.instagram.com/touristardiamond1";

// Fotos o video de "Experiencias" (deben estar en public/img)
const EXPERIENCIAS = [
  { src: "/img/inspiracion-1.jpg", tipo: "imagen", alt: "Globos aerostáticos al atardecer" },
  { src: "/img/inspiracion-2.jpg", tipo: "imagen", alt: "Vías del tren entre la nieve" },
  { src: "/img/inspiracion-3.jpeg", tipo: "imagen", alt: "imagen de una experiencia de viaje" },
];

export default function Inicio() {
  const servicios = useApi(() => api.servicios());
  const empresa = useApi(() => api.empresa());
  const datos = empresa.datos;

  return (
    <>
      {/* Portada */}
      <section className="inicio">
        <div className="inicio__tarjeta">
          <h1 className="titulo titulo--blanco">Explorar con elegancia</h1>
          <p>
            {datos?.descripcion ?? "Itinerarios exclusivos y experiencias a la medida para el viajero exigente."}
          </p>
          <div className="inicio__acciones">
            <Link to="/reservar" className="inicio__boton">Reservar</Link>
            <Link to="/servicios" className="inicio__enlace">Ver servicios</Link>
          </div>
        </div>
      </section>

      {/* Servicios + información */}
      <section className="bento">
        <h2 className="titulo titulo--blanco">Servicios a tu medida</h2>
        <Estado cargando={servicios.cargando} error={servicios.error} />

        <div className="bento__servicios">
          {servicios.datos?.map((s) => (
            <article key={s.id} className="burbuja">
              <div className="burbuja__foto">
                <Imagen src={`/img/servicio-${s.id}.png`} alt={s.titulo} />
              </div>
              <h3 className="burbuja__titulo">{s.titulo}</h3>
              <p>{s.descripcion}</p>
              <Link to={`/reservar?servicio=${s.id}`} className="burbuja__ir" aria-label={`Reservar: ${s.titulo}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </article>
          ))}
        </div>

        <div className="bento__datos">
          <div className="dato">
            <span className="dato__etiqueta">Horario</span>
            <strong>Lunes a Domingo</strong>
            <span>Servicio disponible 24hrs.</span>
          </div>
          <a className="dato" href={`https://wa.me/${datos?.whatsapp ?? "5214428647215"}`} target="_blank" rel="noreferrer">
            <span className="dato__etiqueta">WhatsApp</span>
            <strong>Escríbenos</strong>
            <span className="dato__circulo" aria-hidden="true">›</span>
          </a>
          <a className="dato" href={`mailto:${datos?.correo ?? "Touristardiamond@gmail.com"}`}>
            <span className="dato__etiqueta">Correo</span>
            <strong>{datos?.correo ?? "Touristardiamond@gmail.com"}</strong>
            <span className="dato__circulo" aria-hidden="true">›</span>
          </a>
          <a className="dato" href={datos?.instagram ?? INSTAGRAM} target="_blank" rel="noreferrer">
            <span className="dato__etiqueta">Instagram</span>
            <strong>Síguenos</strong>
            <span className="dato__circulo" aria-hidden="true">›</span>
          </a>
        </div>
      </section>

      {/* Cotización */}
      <section className="cotiza">
        <div className="cotiza__tarjeta">
          <div className="cotiza__texto">
            <h2 className="titulo titulo--blanco">Realiza una cotización</h2>
            <p>Agenda una cotización privada y obtén recomendaciones dirigidas a tus intereses y ritmo.</p>
            <Link to="/reservar" className="cotiza__boton">Agendar cotización</Link>
          </div>
        </div>
      </section>

      {/* Quiénes somos */}
      <section className="nosotros">
        <div className="nosotros__tarjeta">
          <h2 className="titulo titulo--blanco">Quiénes somos…</h2>
          <div className="nosotros__texto">
            <p>
              Más que un traslado, te ofrecemos la tranquilidad de viajar en las mejores manos.
              Especialistas en movilidad ejecutiva y experiencias turísticas, contamos con unidades
              de primer nivel y conductores profesionales listos para acompañarte a donde necesites.
              Olvídate del estrés del camino y disfruta de un servicio seguro, puntual y pensado
              para superar tus expectativas en cada kilómetro.
            </p>
            <p>
              Nuestro equipo investiga, prueba y perfecciona cada detalle para que tú disfrutes de
              un viaje sin sobresaltos, donde el tiempo se alía con la belleza y la logística se
              convierte en un placer silencioso.
            </p>
            <Link to="/acerca" className="nosotros__boton">Descubrir más</Link>
          </div>
        </div>
      </section>

      {/* Experiencias */}
      <section className="experiencias">
        <h2 className="titulo titulo--blanco titulo--centro">Disfruta de las mejores experiencias</h2>

        <div className="exp__galeria">
          {EXPERIENCIAS.map((item, i) => (
            <a key={item.src} href={datos?.instagram ?? INSTAGRAM} target="_blank" rel="noreferrer"
               className="exp__item" aria-label={`Ver publicación ${i + 1} en Instagram`}>
              {item.tipo === "video" ? (
                <video src={item.src} autoPlay muted loop playsInline preload="metadata" aria-label={item.alt} />
              ) : (
                <Imagen src={item.src} alt={item.alt} />
              )}
              <svg className="exp__icono" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   strokeWidth="2" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
          ))}
        </div>

        <a className="exp__boton" href={datos?.instagram ?? INSTAGRAM} target="_blank" rel="noreferrer">
          Visitar redes
        </a>
      </section>
    </>
  );
}
