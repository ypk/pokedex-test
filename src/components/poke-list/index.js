import React from "react";

export default function PokeList({ listItems }) {
    return (
        <div className="bg-gray-100 min-h-screen pt-18 py-6 md:pt-20 md:py-12 px-10 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-10 xl-grid-cols-5 gap-y-10 gap-x-6 ">
                {
                    listItems && listItems.map((listItem, idx) => (
                        <a className="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300 cursor-pointer" key={listItem.name} href={`https://pokemondb.net/pokedex/${listItem.name}`}>
                            <img src={`https://img.pokemondb.net/artwork/large/${listItem.name}.jpg`} alt={listItem.name} className="py-4 rounded-t-lg w-full h-40 object-scale-down bg-white" />
                            <div className="p-6 bg-yellow-300 rounded-b-lg">
                                <h1 className="md:text-xl text-2xl mb-1 font-julius font-bold text-gray-900">{listItem.name}</h1>
                                <ul className="flex mb-4">
                                    {listItem.types && listItem.types.map(type => (
                                        <li className="mr-1" key={type}>
                                            <p className="inline-block border border-gray-500 shadow-md bg-yellow-400 rounded mt-1 px-3 rounded-2xl text-black bg-white" key={type}>{type}</p>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-row m-auto gap-8 mb-4">
                                    <div className="my-auto">
                                        <div className="text-lg">Height</div>
                                        <div className="text-3xl">{listItem.height}</div>
                                    </div>
                                    <div className="my-auto">
                                        <div className="text-lg">Weight</div>
                                        <div className="text-3xl">{listItem.weight}</div>
                                    </div>
                                </div>
                                <div className="flex flex-row m-auto gap-8">
                                    <div className="my-auto">
                                        <div className="text-lg">Abilities</div>
                                        <ul className="flex flex-row">
                                        {
                                            listItem.abilities && listItem.abilities.map(ability => (
                                                <li className="text-sm mr-3" key={ability}>{ability}</li>
                                            ))
                                        }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
    );
}
