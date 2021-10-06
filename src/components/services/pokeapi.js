
const GetPokemon = (apiUrl) => {
    return new Promise((resolve, reject) => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => resolve(data))
    });
}

const GetAllPokemon = async (apiUrl) => {
    const response = await fetch(apiUrl);
    const data  = await response.json();
    return data;
}

export const PokeAPI = {
    GetPokemon,
    GetAllPokemon
};