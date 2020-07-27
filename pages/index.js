import React, { useEffect, useState, useContext } from "react";
import Layout from "../components/layout/Layout";
import { FirebaseContext } from "../firebase";
import firebaseConfig from "../firebase/config";

const Home = () => {
  const [productos, guardarProductos] = useState([]);

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const obtenerProductos = () => {
      firebase.db
        .collection("productos")
        .orderBy("creado", "desc")
        .onSnapshot(manejarSnapshot);
    };
    obtenerProductos();
  }, []);

  function manejarSnapshot(snapshot) {
    const productos = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    console.log(productos);
  }

  return (
    <div>
      <Layout>
        <h1>Inicio</h1>
      </Layout>
    </div>
  );
};

export default Home;
