import { api } from "../api.js";
import { useApi } from "../useApi.js";

const INSTAGRAM = "https://www.instagram.com/touristardiamond1";
const TELEFONO = "+52 1 442 864 7215";   // como quieres que se vea en la página

export default function Contacto() {
  const empresa = useApi(() => api.empresa());
  const datos = empresa.datos;
  const whatsapp = datos?.whatsapp ?? "5214428647215";
  const correo = datos?.correo ?? "Touristardiamond@gmail.com";
  const instagram = datos?.instagram ?? INSTAGRAM;
  const mensaje = encodeURIComponent("Hola, quiero cotizar un viaje.");

  return (
    <div className="con">
      <section className="con__tarjeta">
        <h1 className="titulo titulo--blanco">Comparte tu visión de viaje</h1>
        <p>Cuéntanos lo que imaginas; diseñaremos juntos una travesía tan exclusiva como tus aspiraciones.</p>
        <div className="con__acciones">
          <a className="con__boton" href={`https://wa.me/${whatsapp}?text=${mensaje}`} target="_blank" rel="noreferrer">
            Escribir por WhatsApp
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 21l2.1-5.2A8.5 8.5 0 1 1 21 11.5z" />
            </svg>
          </a>
          <a className="con__boton con__boton--borde" href={`mailto:${correo}`}>Enviar correo</a>
        </div>
      </section>

      <section className="bento__datos">
        <div className="dato">
          <span className="dato__etiqueta">Horario</span>
          <strong>Lunes a Domingo</strong>
          <span>Servicio disponible 24hrs.</span>
        </div>
        <a className="dato" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">
          <span className="dato__etiqueta">WhatsApp</span>
          <strong>{TELEFONO}</strong>
          <span className="dato__circulo" aria-hidden="true">›</span>
        </a>
        <a className="dato" href={`mailto:${correo}`}>
          <span className="dato__etiqueta">Correo</span>
          <strong>{correo}</strong>
          <span className="dato__circulo" aria-hidden="true">›</span>
        </a>
        <a className="dato" href={instagram} target="_blank" rel="noreferrer">
          <span className="dato__etiqueta">Instagram</span>
          <strong>@touristardiamond1</strong>
          <span className="dato__circulo" aria-hidden="true">›</span>
        </a>
      </section>
    </div>
  );
}