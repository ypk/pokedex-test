import React from 'react'

const Pagination = ({ nextPageUrl, prevPageUrl }) => {
    return (
        <div className="bg-gray-100 pt-4 md:pt-8 pb-6 md:pb-12 px-10 flex flex-row justify-center">
            {
                prevPageUrl &&
                <button onClick={prevPageUrl} className="block rounded-xl shadow-lg font-bold py-4 pl-3 pr-4 mr-4 flex items-center bg-yellow-300 hover:bg-yellow-400 focus:bg-yellow-400">
                    <svg className="fill-current h-6 w-6 m-0" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 128 128" style={{ enableBackground: "new 0 0 512 512"}}>
                        <g>
                            <path xmlns="http://www.w3.org/2000/svg" d="m84 108c-1.023 0-2.047-.391-2.828-1.172l-40-40c-1.563-1.563-1.563-4.094 0-5.656l40-40c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656l-37.172 37.172 37.172 37.172c1.563 1.563 1.563 4.094 0 5.656-.781.781-1.805 1.172-2.828 1.172z"></path>
                        </g>
                    </svg>
                    <span className="ml-1">Previous page</span>
                </button>
            }
            {
                nextPageUrl &&
                <button onClick={nextPageUrl} className="block rounded-xl shadow-lg font-bold py-4 pr-3 pl-4 ml-4 flex items-center  bg-yellow-300 hover:bg-yellow-400 focus:bg-yellow-400">
                    <span className="mr-1">Next page</span>
                    <svg className="fill-current h-6 w-6 m-0" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 128 128" style={{ enableBackground: "new 0 0 512 512"}}>
                        <g>
                            <path xmlns="http://www.w3.org/2000/svg" d="m44 108c-1.023 0-2.047-.391-2.828-1.172-1.563-1.563-1.563-4.094 0-5.656l37.172-37.172-37.172-37.172c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0l40 40c1.563 1.563 1.563 4.094 0 5.656l-40 40c-.781.781-1.805 1.172-2.828 1.172z"></path>
                        </g>
                    </svg>
                </button>
            }
        </div>
    )
};

export default Pagination;