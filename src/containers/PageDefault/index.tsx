import React, { ReactNode } from 'react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import styled from 'styled-components';

interface PageDefault {
  children: ReactNode;
  buttonContent: string;
  buttonLink: string;
}

const PageDefaultWrapper = styled.div`
  padding: 5%;
`;

const PageDefault = ({ children, buttonContent, buttonLink }: PageDefault) => {
  return (
    <>
      <PageDefaultWrapper>
        <Menu buttonContent={buttonContent} buttonLink={buttonLink} />
        {children}
      </PageDefaultWrapper>
      <Footer />
    </>
  );
};

export default PageDefault;
