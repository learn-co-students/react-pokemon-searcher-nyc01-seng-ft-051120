import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state={
    pokemons: [],
    search: ''
  }
  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(resp=>resp.json())
    .then(pokemons=>this.setState({pokemons}))
  }

  handleChange = e => this.setState({ search: e.target.value })

  handleNewPokemon=(newPokemon)=> {
    this.setState({pokemons:[...this.state.pokemons, newPokemon]})
  }

  render() {
    let searchedPokemon = this.state.pokemons.filter
      (pokemon=>pokemon.name.includes(this.state.search.toLowerCase()))
    
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleNewPokemon={this.handleNewPokemon}/>
        <br />
        <Search handleChange={this.handleChange} 
                search={this.state.search} />
        <br />
        <PokemonCollection pokemons={searchedPokemon} />
      </Container>
    )
  }
}

export default PokemonPage
