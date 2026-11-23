import { Link } from "react-router-dom";
import { api } from "../api.js";
import { useApi } from "../useApi.js";

export default function Footer() {
  const { datos: empresa } = useApi(() => api.empresa());
  const correo = empresa?.correo ?? "Touristardiamond@gmail.com";
  const whatsapp = empresa?.whatsapp ?? "5214428647215";
  const instagram = empresa?.instagram ?? "https://www.instagram.com/touristardiamond1";

  return (
    <footer className="pie-oscuro">
      <div className="pie-oscuro__tarjeta">
        <div className="pie-oscuro__datos">
          <Link to="/" className="pie-oscuro__marca">Touristar Diamond</Link>
          <a href={`mailto:${correo}`} className="pie-oscuro__correo">{correo}</a>
          <p className="pie-oscuro__nota">Servicio disponible 24 horas, de lunes a domingo.</p>
        </div>

        <nav className="pie-oscuro__redes" aria-label="Contacto">
          <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 21l2.1-5.2A8.5 8.5 0 1 1 21 11.5z" />
            </svg>
          </a>
          <a href={instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>
          <a href={`mailto:${correo}`} aria-label="Correo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="3" />
              <path d="M3 8l9 6 9-6" />
            </svg>
          </a>
        </nav>
      </div>
      <p className="pie-oscuro__copy">© {new Date().getFullYear()} Touristar Diamond</p>
    </footer>
  );
}
