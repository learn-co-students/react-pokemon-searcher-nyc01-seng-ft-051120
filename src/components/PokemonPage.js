import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searchQuery: null
  }

addPokemon = pokemon => {
  this.setState({ pokemons: [...this.state.pokemons, pokemon] })
}

  fetch = () => {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(data => {
       this.setState({pokemons: data})
    })
  }

  setQuery = (e) => {
   this.setState({searchQuery: e.target.value})
  }

  componentDidMount(){
     this.fetch()
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search setQuery={this.setQuery}/>
        <br />
        <PokemonCollection pokemons={this.state.pokemons} searchQuery={this.state.searchQuery} />
      </Container>
    )
  }
}

export default PokemonPage
