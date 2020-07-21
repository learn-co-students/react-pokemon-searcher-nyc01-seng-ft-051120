import React from 'react'

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" name="search" onChange={e => props.handleChange(e)} value={props.search}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
