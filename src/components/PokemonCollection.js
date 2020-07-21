import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

   render() {
      let filteredpokemons = this.props.pokemons.filter( pokemon => pokemon.name.includes(`${this.props.searchQuery}`))
       let displayPokemons = this.props.searchQuery === null ? this.props.pokemons : filteredpokemons
    return (
      <Card.Group itemsPerRow={6} pokemons={this.props.pokemons}>
        <h1>Hello From Pokemon Collection</h1>
         {
           displayPokemons.map((pokemon, index) =>
          <PokemonCard key={pokemon.id} pokemon={pokemon}/>
         )
       }
      </Card.Group>
    )
  }
}

export default PokemonCollection
