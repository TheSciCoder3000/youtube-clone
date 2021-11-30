import React from 'react'
import { useParams, Route } from 'react-router-dom'

function Search() {
    const { searchData } = useParams()

    return (
        <div className="app__viewer__main">
            <div className="search__filter">filter</div>
            <hr className="search__hr" />
            <div className="search__vidList">
                you searched for {searchData}
            </div>
        </div>
    )
}

export default Search
