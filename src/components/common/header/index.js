import React from "react";

const Header = () => {
    return (
        <header>
            <div className="w-full bg-cover bg-center h-64 bg-cover bg-top" style={{"backgroundImage": `url(/images/background.jpg)`}}>
                <div className="flex items-center justify-center h-full w-full bg-opacity-20">
                    <div className="text-center bg-gray-800 bg-opacity-70 rounded-3xl ring ring-blue-600 mt-24 shadow-2xl">
                        <form className="group">
                            <input type="text" className="p-4 border-0 rounded-l-3xl w-80 bg-gradient-to-r from-transparent via-transparent to-yellow-300" placeholder="Pikachu"></input>
                            <button type="submit" className="bg-yellow-300 hover:text-blue-600 font-bold p-4 px-6 border-0 rounded-r-3xl">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;