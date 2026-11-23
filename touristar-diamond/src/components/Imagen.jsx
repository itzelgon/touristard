/**
 * Imagen de fondo con color de respaldo: si el archivo no existe en /public/img
 * se ve un bloque beige en vez de una imagen rota.
 */
export default function Imagen({ src, alt, className = "" }) {
  return (
    <div
      className={`imagen ${className}`}
      role="img"
      aria-label={alt}
      style={src ? { backgroundImage: `url(${src})` } : undefined}
    />
  );
}
