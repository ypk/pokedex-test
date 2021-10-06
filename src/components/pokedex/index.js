import React, { useState, useEffect } from "react";
import { PokeAPI } from "../services";
import { Layout, Pagination, PokeList, Spinner } from "../index";
const { GetPokemon, GetAllPokemon } = PokeAPI;


const Pokedex = () => {
    const { REACT_APP_POKEAPI_URL: apiUrl } = process.env;
    const [pokeData, setPokeData] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState(apiUrl);
    const [nextPageUrl, setNextPageUrl] = useState();
    const [prevPageUrl, setPrevPageUrl] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            let response = await GetAllPokemon(currentPageUrl);
            setNextPageUrl(response.next);
            setPrevPageUrl(response.previous);
            const { results } = response;
            setPokeData(results);
            setLoading(false);
        }
        fetchData();
    }, [currentPageUrl]);

    const gotoNextPage = () => {
        setCurrentPageUrl(nextPageUrl)
    }

    const gotoPrevPage = () => {
        setCurrentPageUrl(prevPageUrl)
    }

    return (
        <Layout>
            {loading ? <Spinner color="text-yellow-300" size="6" /> : (
                <>
                    <PokeList listItems={pokeData} />
                    <Pagination
                        nextPageUrl={nextPageUrl ? gotoNextPage : null}
                        prevPageUrl={prevPageUrl ? gotoPrevPage : null}
                    />
                </>
            )}

        </Layout>
    )
}

export default Pokedex;