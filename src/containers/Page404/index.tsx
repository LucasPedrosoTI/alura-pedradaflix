import React from "react";

import PageDefault from "../PageDefault";
import { Page404Base, SadFace } from "./styles";

const Page404 = () => {
  return (
    <PageDefault buttonContent={"Novo vídeo"} buttonLink="/create/video">
      <Page404Base>
        <SadFace>
          <span role="img" aria-label="sad-face">
            🙁
          </span>
        </SadFace>
        <span>Página não existe!</span>
      </Page404Base>
    </PageDefault>
  );
};

export default Page404;
