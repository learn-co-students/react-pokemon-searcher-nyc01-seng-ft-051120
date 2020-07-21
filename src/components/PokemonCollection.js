import React from 'react';
import PokemonCard from './PokemonCard';
import { Card } from 'semantic-ui-react';

class PokemonCollection extends React.Component {
	render() {
		return (
			<Card.Group itemsPerRow={6}>
				<h1>Hello From Pokemon Collection</h1>
				{this.props.pokemons.map(pokemon => (
					<PokemonCard
						id={pokemon.id}
						name={pokemon.name}
						hp={pokemon.hp}
						front={pokemon.sprites.front}
						back={pokemon.sprites.back}
					/>
				))}
			</Card.Group>
		);
	}
}

export default PokemonCollection;
