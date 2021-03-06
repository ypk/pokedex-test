import React from "react";
import PropTypes from "prop-types";

import { PokeSearch } from "../../index";

const Header = ({ pokeSearchText, setPokeSearchText }) => {
    return (
        <header>
            <div className="w-full bg-cover bg-center h-64 bg-cover bg-top" style={{ "backgroundImage": `url(/images/background.jpg)` }}>
                <div className="flex items-center justify-center h-full w-full bg-opacity-20">
                    <PokeSearch pokeSearchText={pokeSearchText} setPokeSearchText={setPokeSearchText} />
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    pokeSearchText: PropTypes.string,
    setPokeSearchText: PropTypes.func.isRequired
};

export default Header;