import React from 'react'

const Pagination = ({ nextPageUrl, prevPageUrl }) => {
    return (
        <div>
            {prevPageUrl && <button onClick={prevPageUrl}>Previous</button>}
            {nextPageUrl && <button onClick={nextPageUrl}>Next</button>}
        </div>
    )
};

export default Pagination;