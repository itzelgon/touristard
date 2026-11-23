import { useEffect, useState } from "react";

/** Carga datos de la API: const { datos, cargando, error } = useApi(() => api.viajes()) */
export function useApi(funcion, dependencias = []) {
  const [estado, setEstado] = useState({ datos: null, cargando: true, error: null });

  useEffect(() => {
    let activo = true;
    setEstado({ datos: null, cargando: true, error: null });
    funcion()
      .then((datos) => activo && setEstado({ datos, cargando: false, error: null }))
      .catch((e) => activo && setEstado({ datos: null, cargando: false, error: e.message }));
    return () => { activo = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencias);

  return estado;
}
