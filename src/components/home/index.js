/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

export const Home = ({ resetSearch }) => {
  useEffect(() => {
    resetSearch();
  }, []);
  return (
    <div>
      <Helmet>
        <title>
          MercadoLibre Searcher - auto, juegos, consolas y mucho más!.
        </title>
        <meta
          name="description"
          content={
            'Un buscardo de articulos simple para encontrar todo aquello que necesites, introduce la busqueda encuentra tu articulo favorito y obtenlo en un muy corto tiempo'
          }
        />
      </Helmet>
    </div>
  );
};
