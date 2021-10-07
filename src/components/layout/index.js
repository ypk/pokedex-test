import React from "react";
import { Header, Footer } from "../common";

const Layout = ({ pokeSearchText, setPokeSearchText, children }) => {
  return (
    <>
      <Header pokeSearchText={pokeSearchText} setPokeSearchText={setPokeSearchText} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;