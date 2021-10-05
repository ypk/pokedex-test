import React, { useState } from "react";
import { useFetch } from "../../hooks";
import { Layout, PokeList, Spinner } from "../index";

const Pokedex = () => {
    const { REACT_APP_POKEAPI_URL: apiUrl } = process.env;
    const [currentPageUrl, setCurrentPageUrl] = useState(apiUrl);
    const { status, data, error } = useFetch(currentPageUrl);
    return (
        <Layout>
            {status === 'error' && <div>{error}</div>}
            {status === 'init' && <Spinner color="text-yellow-300" size="6" />}
            {status === 'done' && (
                <PokeList listItems={data} />
            )}
        </Layout>
    )
}

export default Pokedex;