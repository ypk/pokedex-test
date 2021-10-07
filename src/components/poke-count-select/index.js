import React, { useState } from 'react'

const PokeCountSelect = ({ selectedPokeCountValue, handlePokeCountValueChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const AvailablePokeCountValues = [10, 20, 50];

    const handleDropdownOpen = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    const handlePokeCountSelect = (e) => {
        const value = e.currentTarget.getAttribute('data-attrib-key');
        handlePokeCountValueChange(value);
        setIsOpen(false);
    };

    return (
        <>
            <div className="relative bg-gray-100">
                <div className="absolute right-10">
                    <button
                        onClick={handleDropdownOpen}
                        className={`rounded-xl inline-flex justify-center w-full rounded-md border p-4 md:p-2 hover:rounded-xl focus:rounded-xl bg-yellow-300 text-sm leading-5 font-medium focus:outline-none hover:bg-yellow-400 focus:bg-yellow-400 focus:border-yellow-400 transition ease-in-out`}>
                        <span className="mx-1 text-md leading-6 font-bold">Dislaying&nbsp;{selectedPokeCountValue}&nbsp;Pokemons</span>
                        <svg className="fill-current w-4 h-6 ml-2 group-focus:text-blue-400 group-hover:text-blue-400" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <g>
                                <g>
                                    <path d="M506.157,132.386c-7.803-7.819-20.465-7.831-28.285-0.029l-207.73,207.299c-7.799,7.798-20.486,7.797-28.299-0.015L34.128,132.357c-7.819-7.803-20.481-7.79-28.285,0.029c-7.802,7.819-7.789,20.482,0.029,28.284l207.701,207.27c11.701,11.699,27.066,17.547,42.433,17.547c15.358,0,30.719-5.846,42.405-17.533L506.128,160.67C513.946,152.868,513.959,140.205,506.157,132.386z"></path>
                                </g>
                            </g>
                        </svg>
                    </button>
                    {isOpen && (
                        <div className="rounded-xl shadow-md relative pin-t pin-l bg-yellow-300">
                            <ul className="list-reset">
                                {
                                    AvailablePokeCountValues.map(value => (
                                        <li key={value} className="hover:bg-yellow-400" data-attrib-key={value} onClick={handlePokeCountSelect}>
                                            <p className="p-2 block text-black cursor-pointer">{value}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default PokeCountSelect;