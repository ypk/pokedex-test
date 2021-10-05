import { useEffect, useRef, useReducer } from "react";

const useFetch = (apiUrl) => {

    const cache = useRef({});

    const initialState = {
        status: 'idle',
        error: null,
        data: [],
    };

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'INIT':
                return {
                    ...initialState,
                    status: 'init'
                };
            case 'DONE':
                return {
                    ...initialState,
                    status: 'done',
                    data: action.payload
                };
            case 'ERROR':
                return {
                    ...initialState,
                    status: 'error',
                    error: action.payload
                };
            default:
                return state;
        }
    }, initialState);

    useEffect(() => {
        let cancelRequest = false;
        if (!apiUrl) return;

        const fetchData = async () => {
            dispatch({ type: 'INIT' });
            if (cache.current[apiUrl]) {
                const data = cache.current[apiUrl];
                const { results } = data;
                dispatch({ type: 'DONE', payload: results });
            } else {
                try {
                    const pokeData = [];
                    const response = await fetch(apiUrl);
                    const data = await response.json();
                    const { results } = data;
                    results.forEach(async result => {
                        const statsApiUrl = result.url;
                        const response = await fetch(statsApiUrl);
                        const data = await response.json();
                        const { name, height, weight, abilities, types } = data;
                        const abilitiesList = abilities.map(a=> a.ability.name)
                        const typesList = types.map(t=> t.type.name)
                        pokeData.push({ name, height, weight, abilities: abilitiesList, types: typesList });
                    });
                    cache.current[apiUrl] = pokeData;
                    if (cancelRequest) return;
                    dispatch({ type: 'DONE', payload: pokeData });
                } catch (error) {
                    if (cancelRequest) return;
                    dispatch({ type: 'ERROR', payload: error.message });
                }
            }
        };

        fetchData();

        return function cleanup() {
            cancelRequest = true;
        };
    }, [apiUrl]);

    return state;
}

export default useFetch;