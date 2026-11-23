// Sin backend: lee los datos de src/datos.js.
// Mantiene la misma interfaz que antes (devuelve promesas) para no tocar las páginas.
import { empresa, servicios, viajes, eventos } from "./datos.js";

const ok = (datos) => Promise.resolve(datos);

export const api = {
  empresa: () => ok(empresa),
  servicios: () => ok(servicios),
  viajes: (estado) => ok(estado ? viajes.filter((v) => v.estado === estado) : viajes),
  viaje: (id) => ok(viajes.find((v) => v.id === Number(id))),
  eventos: () => ok(eventos),
};
