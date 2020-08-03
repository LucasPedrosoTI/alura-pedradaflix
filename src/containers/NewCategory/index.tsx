import React, { useState, useEffect } from 'react';
import { PageDefault, LoadingPageDefault } from '../PageDefault';
import ButtonLink from '../../components/ButtonLink';
import FormField from '../../components/FormField';

import useForm from '../../hooks/useForm';

import { Category } from '../../services/api';
import { ICategory } from '../../types/types';

const defaultValues = {
  titulo: '',
  description: '',
  cor: '#ffffff',
};

const NewCategory = () => {
  const { values, setValue } = useForm(defaultValues);
  const [categories, setCategories] = useState<ICategory[]>([] as ICategory[]);

  useEffect(() => {
    Category.getCategories().then((res: ICategory[]) =>
      setCategories([...res])
    );
  }, []);

  if (!categories || categories.length === 0) {
    return (
      <LoadingPageDefault buttonContent="&#8249;" buttonLink="/new/video" />
    );
  }

  return (
    <PageDefault buttonContent="&#8249;" buttonLink="/new/video">
      <h1>Cadastro de Categoria</h1>

      <form>
        <FormField
          label="Nome da Categoria: "
          value={values.titulo}
          onChange={setValue}
          name="name"
        />

        <FormField
          label="Descrição: "
          value={values.description}
          onChange={setValue}
          name="description"
          type="textarea"
        />

        <FormField
          label="Cor: "
          value={values.cor}
          onChange={setValue}
          type="color"
          name="color"
        />

        <div>
          <ButtonLink className="button_link">Cadastrar</ButtonLink>
        </div>
      </form>

      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.titulo}</li>
        ))}
      </ul>
    </PageDefault>
  );
};

export default NewCategory;
