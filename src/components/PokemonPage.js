import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    search: '',
    sort: 'none'
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemon => {
       this.setState({ pokemon })
    })
  }

  searchHandler = (e) => {
    this.setState({
      search: e.target.value
      })
  }

  sortPokemon = (e) => {
    this.setState({
      sort: e.target.value
    })
  }

  addPokemon = pokemon => {
    this.setState({ pokemon: [...this.state.pokemon, pokemon] })
  }

  render() {
    console.log(this.state.sort)
    let filteredPokemon = this.state.pokemon.filter( pokemon =>
    pokemon.name.toLowerCase().includes(this.state.search.toLowerCase()))

    let sortPokes = filteredPokemon
    if(this.state.sort === 'a-z'){
      sortPokes.sort((a,b) => (a.name > b.name ? 1 : -1 ))
      }
    else if(this.state.sort === 'z-a'){
      sortPokes.sort((a,b) => (a.name < b.name ? 1: -1 ))
    }

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm
        addPokemon={this.addPokemon}/>
        <br />
        <Search
        searchHandler={this.searchHandler}
        search={this.state.search}
        sortPokemon={this.sortPokemon}
        sort={this.state.sort }/>
        <br />
        <PokemonCollection
        pokemon={filteredPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
