/** Mensajes de carga / error para listas que vienen de la API */
export default function Estado({ cargando, error }) {
  if (cargando) return <p className="estado" role="status">Cargando…</p>;
  if (error) return <p className="estado estado--error" role="alert">{error}</p>;
  return null;
}
