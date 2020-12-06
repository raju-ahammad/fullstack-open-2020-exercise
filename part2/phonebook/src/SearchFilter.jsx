import React from 'react'

const SearchFilter = ({searchHandle, searchTerm}) => {
    return (
        <div>filter shown with name <input onChange={searchHandle} value={searchTerm} type="text"/></div>
    )
}

export default SearchFilter
