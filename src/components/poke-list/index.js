import React from "react";

export default function PokeList({ listItems }) {
    return (
        <div className="bg-gray-100 min-h-screen py-12 md:py-24 px-10 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-10 xl-grid-cols-5 gap-y-10 gap-x-6 ">
                {
                    listItems && listItems.map((listItem) => (
                        <div className="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300 cursor-pointer" key={listItem.name}>
                            <img src={`https://img.pokemondb.net/artwork/large/${listItem.name}.jpg`} alt={listItem.name} className="py-4 rounded-t-lg w-full h-40 object-scale-down bg-white" />
                            <div className="p-6 bg-yellow-300 rounded-b-lg">
                                <h1 className="md:text-xl text-2xl mb-1 font-julius font-bold text-gray-900">{listItem.name}</h1>
                                <ul class="flex mb-4">
                                    {listItem.types && listItem.types.map(type => (
                                        <li class="mr-1" key={type}>
                                            <p class="inline-block border border-gray-500 shadow-md bg-yellow-400 rounded mt-1 px-3 rounded-2xl text-black bg-white" key={type}>{type}</p>
                                        </li>
                                    ))}
                                </ul>
                                <div class="flex flex-row m-auto gap-8 mb-4">
                                    <div class="my-auto">
                                        <div class="text-lg">Height</div>
                                        <div class="text-3xl">{listItem.height}</div>
                                    </div>
                                    <div class="my-auto">
                                        <div class="text-lg">Weight</div>
                                        <div class="text-3xl">{listItem.weight}</div>
                                    </div>
                                </div>
                                <div class="flex flex-row m-auto gap-8">
                                    <div class="my-auto">
                                        <div class="text-lg">Abilities</div>
                                        <ul class="flex flex-row">
                                        {
                                            listItem.abilities && listItem.abilities.map(ability => (
                                                <li class="text-sm mr-3" key={ability}>{ability}</li>
                                            ))
                                        }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
