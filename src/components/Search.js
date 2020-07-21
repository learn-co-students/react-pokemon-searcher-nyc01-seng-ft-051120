import React from 'react'

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={props.searchHandler} name="search" value={props.search} className="prompt"/>
        <i className="search icon" />
      </div>
      <select onChange={props.sortPokemon} value={props.sort} name="Sort" id="sort">
        <option value="none">None</option>
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
      </select>
    </div>
  )
}

export default Search
