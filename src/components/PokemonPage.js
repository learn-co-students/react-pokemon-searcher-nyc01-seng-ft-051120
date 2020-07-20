import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state={
    pokemons:[],
    search: ""
  }

  componentDidMount(){
    this.fetchPokemons()
  }

  fetchPokemons = () => {
    fetch('http://localhost:3000/pokemon')
    .then(res=>res.json())
    .then(pokeData => this.setState({ pokemons: pokeData }))
  }

  searchInput = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  addPokemon = (pokemon) => {
    this.setState(prevState => {
      return { pokemons: [...prevState.pokemons, pokemon]}
    })
  }

 
  render() {
    let searchedPokemons=this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.search))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search searchValue={this.state.search} searchInput={this.searchInput}/>
        <br />
        <PokemonCollection pokemons={searchedPokemons}/>
      </Container>
    )
  }
}

export default PokemonPage
