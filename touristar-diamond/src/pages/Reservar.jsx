import { useSearchParams } from "react-router-dom";
import { api } from "../api.js";
import { useApi } from "../useApi.js";

// Datos que se piden para cotizar (también se escriben en el mensaje de WhatsApp)
const PASOS = [
  "Fecha y hora de salida",
  "Punto de partida y destino",
  "Número de pasajeros",
  "Tipo de viaje (turístico, ejecutivo o traslado)",
];

export default function Reservar() {
  const [params] = useSearchParams();
  const empresa = useApi(() => api.empresa());
  const servicios = useApi(() => api.servicios());
  const whatsapp = empresa.datos?.whatsapp ?? "5214428647215";

  // Si vienes desde un servicio (/reservar?servicio=2), el mensaje lo menciona
  const servicio = servicios.datos?.find((s) => String(s.id) === params.get("servicio"));

  const mensaje = encodeURIComponent(
    `Hola, quiero cotizar ${servicio ? `el servicio "${servicio.titulo}"` : "un traslado"}.\n\n` +
      PASOS.map((p, i) => `${i + 1}. ${p}:`).join("\n")
  );

  return (
    <div className="res">
      <section className="res__tarjeta">
        <h1 className="titulo titulo--blanco">Reserva tu traslado en minutos</h1>
        <p>Para brindarte una cotización exacta de inmediato, envíanos un mensaje con los siguientes datos:</p>
        <div className="res__acciones">
          <a className="res__boton" href={`https://wa.me/${whatsapp}?text=${mensaje}`} target="_blank" rel="noreferrer">
            Cotizar por WhatsApp
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 21l2.1-5.2A8.5 8.5 0 1 1 21 11.5z" />
            </svg>
          </a>
          <a className="res__boton res__boton--borde" href={`tel:+${whatsapp}`}>Llamar ahora</a>
        </div>
      </section>

      <ol className="res__pasos">
        {PASOS.map((paso, i) => (
          <li key={paso} className="res__paso">
            <span className="res__num" aria-hidden="true">{i + 1}</span>
            {paso}.
          </li>
        ))}
      </ol>
    </div>
  );
}