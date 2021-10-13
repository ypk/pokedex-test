import React from "react";
import PropTypes from "prop-types";

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

Layout.propTypes = {
  pokeSearchText: PropTypes.string,
  setPokeSearchText: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]).isRequired
};

export default Layout;