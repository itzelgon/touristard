import { useState } from "react";
import { Link } from "react-router-dom";
import { empresa } from "../datos.js";
import { useCart } from "../context/CartContext.jsx";

export default function Carrito() {
  const { items, totalUsd, cambiarCantidad, quitar, vaciar } = useCart();
  const [form, setForm] = useState({ nombre: "", correo: "" });

  // Sin backend: la solicitud se envía por WhatsApp con el pedido ya escrito
  function solicitar(e) {
    e.preventDefault();
    const lineas = items.map((i) => `- ${i.cantidad} x ${i.viaje.titulo}`).join("\n");
    const texto =
      `Hola, soy ${form.nombre} (${form.correo}). Quiero solicitar:\n${lineas}` +
      (totalUsd > 0 ? `\nTotal: ${totalUsd.toFixed(2)} USD` : "");
    window.open(`https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(texto)}`, "_blank", "noopener");
    vaciar();
  }

  if (items.length === 0) {
    return (
      <section className="seccion seccion--estrecha">
        <h1 className="titulo titulo--grande">Carrito</h1>
        <p className="intro">Tu carrito está vacío. <Link to="/tienda" className="enlace">Explorar viajes</Link></p>
      </section>
    );
  }

  return (
    <section className="seccion seccion--estrecha">
      <h1 className="titulo titulo--grande">Carrito</h1>
      <ul className="carrito">
        {items.map(({ viaje, cantidad }) => (
          <li key={viaje.id}>
            <div>
              <strong>{viaje.titulo}</strong>
              <span>{viaje.precioUsd.toFixed(2)} USD c/u</span>
            </div>
            <div className="carrito__acciones">
              <button aria-label="Quitar uno" onClick={() => cambiarCantidad(viaje.id, cantidad - 1)}>−</button>
              <span>{cantidad}</span>
              <button aria-label="Agregar uno" onClick={() => cambiarCantidad(viaje.id, cantidad + 1)}>+</button>
              <button className="enlace" onClick={() => quitar(viaje.id)}>Quitar</button>
            </div>
          </li>
        ))}
      </ul>
      <p className="carrito__total">Total: {totalUsd.toFixed(2)} USD</p>

      <form className="formulario" onSubmit={solicitar}>
        <label>Nombre<input value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} required /></label>
        <label>Correo<input type="email" value={form.correo} onChange={(e) => setForm({ ...form, correo: e.target.value })} required /></label>
        <button className="boton">Solicitar por WhatsApp</button>
      </form>
    </section>
  );
}
