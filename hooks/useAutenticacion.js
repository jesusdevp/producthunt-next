import React, { useEffect, useState } from "react";
import firebase from "../firebase/index";

function useAutenticacion() {
  const [usuarioautenticado, guardarUsuarioAutenticado] = useState(null);

  useEffect(() => {
    const unsuscribe = firebase.auth.onAuthStateChanged((usuario) => {
      if (usuario) {
        guardarUsuarioAutenticado(usuario);
      } else {
        guardarUsuarioAutenticado(null);
      }
    });
    return () => unsuscribe();
  }, []);

  return usuarioautenticado;
}

export default useAutenticacion;
