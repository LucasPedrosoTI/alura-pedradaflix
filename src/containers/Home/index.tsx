import React from "react";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";

import data from "../../data/dados_iniciais.json";
import PageDefault from "../PageDefault";

const Home = () => {
  return (
    <>
      <PageDefault buttonContent={"Novo vídeo"} buttonLink="/create/video">
        <BannerMain
          videoTitle={data.categorias[0].videos[0].titulo}
          url={data.categorias[0].videos[0].url}
          videoDescription={data.categorias[0].videos[0].titulo}
        />

        <Carousel ignoreFirstVideo category={data.categorias[0]} />
        <Carousel category={data.categorias[1]} />
        <Carousel category={data.categorias[2]} />
        <Carousel category={data.categorias[3]} />
        <Carousel category={data.categorias[4]} />
        <Carousel category={data.categorias[5]} />
      </PageDefault>
    </>
  );
};

export default Home;
