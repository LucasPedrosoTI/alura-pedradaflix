import React from 'react';
import { PageDefault } from '../PageDefault';
import { Link } from 'react-router-dom';
import Form from '../../components/Form';

const NewVideo = () => {
  return (
    <PageDefault buttonContent="&#8249;" buttonLink="/">
      <h1>Cadastro de Video</h1>

      <Form />
      <Link to="/new/category">Cadastrar Categoria</Link>
    </PageDefault>
  );
};

export default NewVideo;
