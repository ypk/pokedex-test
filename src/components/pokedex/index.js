import React, { useState, useEffect } from "react";
import { PokeAPI } from "../services";
import { Layout, Pagination, PokeCountSelect, PokeList, Spinner } from "../index";
import { UpdateUrlQueryParams } from "../../helpers";

const { GetPokemon, GetAllPokemon } = PokeAPI;


const Pokedex = () => {
    const { REACT_APP_POKEAPI_URL: apiUrl } = process.env;
    const [pokeData, setPokeData] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState(apiUrl);
    const [selectedPokeCountValue, setSelectedPokeCountValue] = useState("20");
    const [nextPageUrl, setNextPageUrl] = useState();
    const [prevPageUrl, setPrevPageUrl] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            let response = await GetAllPokemon(`${currentPageUrl}${selectedPokeCountValue}`);
            setNextPageUrl(response.next);
            setPrevPageUrl(response.previous);
            const { results } = response;
            setPokeData(results);
            setLoading(false);
        }
        fetchData();
    }, [currentPageUrl, selectedPokeCountValue]);

    const gotoNextPage = () => {
        setCurrentPageUrl(nextPageUrl)
    }

    const gotoPrevPage = () => {
        setCurrentPageUrl(prevPageUrl)
    }

    const handlePokeCountValueChange = (value) => {
        setSelectedPokeCountValue(value);
        let currentApiUrl = currentPageUrl;
        const updatedPokeUrl = UpdateUrlQueryParams(currentApiUrl, "limit", selectedPokeCountValue);
        setCurrentPageUrl(updatedPokeUrl);
    }

    return (
        <Layout>
            <PokeCountSelect selectedPokeCountValue={selectedPokeCountValue} handlePokeCountValueChange={handlePokeCountValueChange} />
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