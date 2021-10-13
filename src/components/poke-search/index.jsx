import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import { debounce } from "debounce";

const PokeSearch = ({ pokeSearchText, setPokeSearchText }) => {
    const [searchText, setSearchText] = useState(pokeSearchText || "");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (searchText && searchText !== "") {
            setPokeSearchText(searchText);
            setSearchText("")
        }
    }

    const handleSearchTextChange = (e) => {
        e.preventDefault();
        const { value } = e.target;
        if (value && value !== "") {
            setSearchText(value)
        }
    }

    const debouncedSearchTextChange = useMemo(
        () => debounce(handleSearchTextChange, 250)
        , []);

    return (
        <div className="text-center bg-gray-800 bg-opacity-70 rounded-3xl ring ring-yellow-300 mt-24 shadow-2xl">
            <form className="group" onSubmit={handleFormSubmit}>
                <input type="text" defaultValue={searchText} onInput={debouncedSearchTextChange} className="outline-none p-4 border-0 rounded-l-3xl sm:w-64 md:w-80 bg-gradient-to-r from-transparent via-transparent to-yellow-300" placeholder="Pikachu"></input>
                <button type="submit" className="bg-yellow-300 text-gray-600 hover:text-black focus:text-black font-bold p-4 px-6 border-0 rounded-r-3xl">Search</button>
            </form>
        </div>
    )
}

PokeSearch.propTypes = {
    pokeSearchText: PropTypes.string,
    setPokeSearchText: PropTypes.func.isRequired
};

export default PokeSearch;