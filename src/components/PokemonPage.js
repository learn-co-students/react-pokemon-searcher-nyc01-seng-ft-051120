import React from 'react';
import PokemonCollection from './PokemonCollection';
import PokemonForm from './PokemonForm';
import Search from './Search';
import { Container } from 'semantic-ui-react';

class PokemonPage extends React.Component {
	state = {
		pokemons: [],
		search: '',
  };
  
	componentDidMount() {
		fetch('http://localhost:3000/pokemon')
			.then(resp => resp.json())
			.then(data => this.setState({ pokemons: data }));
  }
  
	handleSearch = e => {
		this.setState({ search: e.target.value });
  };
  
  handleNewPokemon = data => {
    this.setState({pokemons:[...this.state.pokemons, data]})
  }
  
	render() {
		let filteredPokemons = this.state.pokemons.filter(poke =>
			poke.name.toLowerCase().includes(this.state.search.toLowerCase())
		);
		return (
			<Container>
				<h1>Pokemon Searcher</h1>
				<br />
        <PokemonForm handleNewPokemon={this.handleNewPokemon}/>
				<br />
				<Search handleSearch={this.handleSearch} search={this.state.search} />
				<br />
				<PokemonCollection pokemons={filteredPokemons} />
			</Container>
		);
	}
}

export default PokemonPage;
