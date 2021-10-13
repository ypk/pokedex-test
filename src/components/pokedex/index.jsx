import React, { useState, useEffect } from "react";

import { PokeAPI } from "../services";
import { Layout, Pagination, PokeCountSelect, PokeList, Spinner } from "../index";
import { UpdateUrlQueryParams, ScrollToTop } from "../../helpers";

const { GetAllPokemon, GetPokemonStats } = PokeAPI;

const Pokedex = () => {
    const { REACT_APP_POKEAPI_URL: apiUrl } = process.env;
    const [pokeData, setPokeData] = useState([]);
    const [selectedPokeCountValue, setSelectedPokeCountValue] = useState(20);
    const [currentPageUrl, setCurrentPageUrl] = useState(UpdateUrlQueryParams(apiUrl, "limit", selectedPokeCountValue));
    const [pokeSearchText, setPokeSearchText] = useState("");
    const [nextPageUrl, setNextPageUrl] = useState();
    const [prevPageUrl, setPrevPageUrl] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            let response = await GetAllPokemon(currentPageUrl);
            setNextPageUrl(response.next);
            setPrevPageUrl(response.previous);
            const { results } = response;
            const pokemonData = await GetPokemonStats(results);
            setPokeData(pokemonData);
            setLoading(false);
        }
        fetchData();
    }, [currentPageUrl]);


    useEffect(() => {
        pokeData.forEach(pokemon => {
            let foundPokemon = [];
            if (pokemon.name === pokeSearchText) {
                foundPokemon.push(pokemon);
                setPokeData(() => {
                    return foundPokemon;
                });
                return;
            }
            if (pokemon.abilities.includes(pokeSearchText)) {
                foundPokemon.push(pokemon);
                setPokeData(foundPokemon);
                return;
            }
        });
    }, [pokeSearchText]);

    const gotoNextPage = () => {
        const nextUrl = UpdateUrlQueryParams(nextPageUrl, "limit", selectedPokeCountValue);
        ScrollToTop();
        setCurrentPageUrl(nextUrl)
    }

    const gotoPrevPage = () => {
        const prevUrl = UpdateUrlQueryParams(prevPageUrl, "limit", selectedPokeCountValue);
        ScrollToTop();
        setCurrentPageUrl(prevUrl)
    }

    const handlePokeCountValueChange = (value) => {
        setSelectedPokeCountValue(value);
        let currentApiUrl = currentPageUrl;
        const updatedPokeUrl = UpdateUrlQueryParams(currentApiUrl, "limit", value);
        ScrollToTop();
        setCurrentPageUrl(updatedPokeUrl);
    }

    return (
        <Layout pokeSearchText={pokeSearchText} setPokeSearchText={setPokeSearchText}>
            {loading ? <Spinner color="text-yellow-300" size="6" /> : (
                <>
                    {pokeData.length > 1 && (<Pagination nextPageUrl={nextPageUrl ? gotoNextPage : null} prevPageUrl={prevPageUrl ? gotoPrevPage : null} />)}
                    {pokeData.length > 1 && (<PokeCountSelect selectedPokeCountValue={selectedPokeCountValue} handlePokeCountValueChange={handlePokeCountValueChange} />)}
                    <PokeList listItems={pokeData} />
                    {pokeData.length > 1 && (<Pagination nextPageUrl={nextPageUrl ? gotoNextPage : null} prevPageUrl={prevPageUrl ? gotoPrevPage : null} />)}
                </>
            )}
        </Layout>
    )
}

export default Pokedex;