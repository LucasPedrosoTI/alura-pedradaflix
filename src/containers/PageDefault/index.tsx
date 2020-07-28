import React, { ReactNode } from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

interface PageDefault {
  children: ReactNode;
  buttonContent: string;
  buttonLink: string;
}

const PageDefault = ({ children, buttonContent, buttonLink }: PageDefault) => {
  return (
    <>
      <Menu buttonContent={buttonContent} buttonLink={buttonLink} />
      {children}
      <Footer />
    </>
  );
};

export default PageDefault;
