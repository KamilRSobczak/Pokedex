import React from 'react';

const pagination = ({prevUrl, prevPage, nextPage}) => {
    console.log(prevPage);
    return (
        <div>
            {prevUrl ? <button onClick={prevPage}>Prev Page</button>: null}
            <button onClick={nextPage}>Next Page</button>
        </div>
    )
}

export default pagination;