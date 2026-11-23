// =====================================================================
// DATOS DEL SITIO — edita aquí correo, WhatsApp, Instagram, viajes y eventos.
// No hay backend ni base de datos: todo se lee de este archivo.
// =====================================================================

export const empresa = {
  nombre: "Touristar Diamond",
  lema: "Explorar con elegancia",
  descripcion: "Itinerarios exclusivos y experiencias a la medida para el viajero exigente.",
  correo: "Touristardiamond@gmail.com",
  whatsapp: "5214428647215",
  instagram: "https://www.instagram.com/touristardiamond1",
};

export const servicios = [
  { id: 1, titulo: "Planificación de itinerarios personalizados",
    descripcion: "Diseño integral de rutas, alojamientos y experiencias basadas en tus intereses y tiempos." },
  { id: 2, titulo: "Reserva de transporte de todo tipo",
    descripcion: "Selección y gestión de estancias con carácter, ubicadas en entornos privilegiados." },
  { id: 3, titulo: "Asesoría de translados",
    descripcion: "Revisión de requisitos, documentación y tramitación acelerada para tu tranquilidad." },
];

// estado: "proximo" (se muestra en Servicios) o "realizado" (sección Acerca de)
export const viajes = [
  { id: 1, titulo: "Transporte ejecutivo y corporativo", etiqueta: "EJECUTIVO VIP",
    descripcion: "Traslados puntuales y discretos para directivos, empresas y eventos de negocios en unidades Suburban y Mercedes-Benz con chofer certificado.",
    precioUsd: 0, estado: "proximo", imagen: "/img/viaje-1.jpg" },
  { id: 2, titulo: "Tours privados y escapadas de lujo", etiqueta: "RUTAS A MEDIDA",
    descripcion: "Recorridos personalizados a viñedos, Pueblos Mágicos y destinos turísticos de México con total comodidad, seguridad e itinerario flexible.",
    precioUsd: 0, estado: "proximo", imagen: "/img/viaje-2.jpg" },
  { id: 3, titulo: "Traslados a aeropuertos y grupos", etiqueta: "VANS DE LUJO",
    descripcion: "Viajes cómodos y seguros en Vans equipadas hacia aeropuertos (QRO, AICM, AIFA), bodas, congresos y traslados familiares puerta a puerta.",
    precioUsd: 0, estado: "proximo", imagen: "/img/viaje-3.jpg" },
  { id: 4, titulo: "Six Flags México", etiqueta: "REALIZADO",
    descripcion: "Traslado de grupo al parque, con salida y regreso puntuales en unidades cómodas y seguras.",
    precioUsd: 0, estado: "realizado", imagen: "/img/realizado-1.jpeg" },
  { id: 5, titulo: "Festival Internacional", etiqueta: "REALIZADO",
    descripcion: "Traslado de pasajeros al festival, con servicio puntual y viaje seguro de ida y vuelta.",
    precioUsd: 0, estado: "realizado", imagen: "/img/viaje-3.jpg" },
];

export const eventos = [
  { id: 1, titulo: "Vision Summit", mes: "ENE", dia: 1, horario: "11:00 a.m. – 12:00 p.m.",
    descripcion: "Una sesión interactiva para que creadores y pensadores colaboren, conecten y generen nuevas ideas.",
    imagen: "/img/viaje-1.jpg" },
  { id: 2, titulo: "Creative Sync", mes: "ENE", dia: 2, horario: "11:00 a.m. – 12:00 p.m.",
    descripcion: "Desde talleres hasta reuniones comunitarias, esto es lo que tenemos a continuación. Marca tu calendario, nos encantaría verte allí.",
    imagen: "/img/viaje-2.jpg" },
  { id: 3, titulo: "Foro de Impact", mes: "ENE", dia: 5, horario: "11:00 a.m. – 12:00 p.m.",
    descripcion: "Una sesión interactiva para que creadores y pensadores colaboren, conecten y generen nuevas ideas.",
    imagen: "/img/viaje-3.jpg" },
];
