import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state ={
    pokemon: [],
    search: ""
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res=>res.json())
    .then(pokemon=> this.setState({pokemon}))
  }

  handleNewPokemon = (newPokemon) => {
    this.setState({pokemon: [...this.state.pokemon, newPokemon]})
  }

  handleSearchChange = e => {
    this.setState({search: e.target.value})
  }

  render() {
    let filteredPokemon = this.state.pokemon.filter(pokemon=> pokemon.name.toLowerCase().includes(this.state.search.toLowerCase()))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleNewPokemon={this.handleNewPokemon}/>
        <br />
        <Search search={this.state.search} handleChange={this.handleSearchChange}/>
        <br />
        <PokemonCollection pokemon = {filteredPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
