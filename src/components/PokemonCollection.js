import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        
        {this.props.pokemons.map(pokemon =>
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            hp={pokemon.hp}
            frontImg={pokemon.sprites.front}
            backImg={pokemon.sprites.back}
          />
          )}
      </Card.Group>
    )
  }
}

export default PokemonCollection
