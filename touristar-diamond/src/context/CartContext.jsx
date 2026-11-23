import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);
const CLAVE = "td_carrito";

export function CartProvider({ children }) {
  // items: [{ viaje, cantidad }]
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem(CLAVE)) ?? []; } catch { return []; }
  });

  useEffect(() => {
    try { localStorage.setItem(CLAVE, JSON.stringify(items)); } catch { /* sin almacenamiento */ }
  }, [items]);

  const valor = useMemo(() => ({
    items,
    cantidadTotal: items.reduce((s, i) => s + i.cantidad, 0),
    totalUsd: items.reduce((s, i) => s + i.viaje.precioUsd * i.cantidad, 0),
    agregar: (viaje) => setItems((prev) => {
      const existe = prev.find((i) => i.viaje.id === viaje.id);
      return existe
        ? prev.map((i) => (i.viaje.id === viaje.id ? { ...i, cantidad: i.cantidad + 1 } : i))
        : [...prev, { viaje, cantidad: 1 }];
    }),
    cambiarCantidad: (id, cantidad) => setItems((prev) =>
      cantidad < 1 ? prev.filter((i) => i.viaje.id !== id)
                   : prev.map((i) => (i.viaje.id === id ? { ...i, cantidad } : i))),
    quitar: (id) => setItems((prev) => prev.filter((i) => i.viaje.id !== id)),
    vaciar: () => setItems([]),
  }), [items]);

  return <CartContext.Provider value={valor}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
