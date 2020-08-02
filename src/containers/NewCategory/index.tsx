import React, { useState, useEffect } from 'react';
import PageDefault from '../PageDefault';
import ButtonLink from '../../components/ButtonLink';
import FormField from '../../components/FormField';

const defaultValues = {
  name: '',
  description: '',
  color: '#ffffff',
};

type ICategories = {
  categorias: Category[];
};

interface Category {
  id: number;
  titulo: string;
  cor: string;
  link_extra: { text: string; url: string };
}

const NewCategory = () => {
  const [values, setValues] = useState(defaultValues);
  const [categories, setCategories] = useState<Category[]>([] as Category[]);

  const setValue = (key: string, value: string) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  useEffect(() => {
    const url =
      process.env.NODE_ENV === 'production'
        ? 'https://pedradaflix.herokuapp.com/categorias'
        : 'http://localhost:8080/categorias';
    fetch(url)
      .then((response) => response.json())
      .then((data: Category[]) => setCategories([...data]));
  }, []);

  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <PageDefault buttonContent="&#8249;" buttonLink="/">
      <h1>Cadastro de Categoria</h1>

      <form>
        <FormField
          label="Nome da Categoria: "
          value={values.name}
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
          value={values.color}
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
