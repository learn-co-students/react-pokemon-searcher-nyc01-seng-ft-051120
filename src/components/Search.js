import React from 'react'

const Search=(props)=>{
  return (
    <div className="ui search">
      <div className="ui icon input" onChange={props.handleChange} value={props.search}>
        <input className="prompt"/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
