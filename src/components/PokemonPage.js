import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'


const POKE_API = 'http://localhost:3000/pokemon'
const newPokemonInitialState = {
  name:"",
  hp:"",
  sprites:{
    front:"",
    back:""
  }
}

function pokemonForForm() {
  const blankPokemon = {
    name:"",
    hp:"",
  }
  const blankSprites = {
    front:"",
    back:""
  }
  const pokemonInitialState = {...blankPokemon}
  pokemonInitialState.sprites = {...blankSprites}
  return pokemonInitialState
}
class PokemonPage extends React.Component {

  state = {
    pokemon:[],
    filterByName:"",
    newPokemon: pokemonForForm()
  }

  componentDidMount(){
    fetch(POKE_API)
    .then(resp=>resp.json())
    .then(pokemon => this.setState({pokemon}))
  }
  
  newPokemonV2 = ( )=>{
    const serverData = {
      method:"POST",
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body: JSON.stringify(this.state.newPokemon)
    }

    fetch(POKE_API,serverData)
    .then(resp=> resp.json())
    .then(newlyAddedPokemon=> {
      this.setState(
              {pokemon:[...this.state.pokemon,newlyAddedPokemon],
               newPokemon: pokemonForForm()})
    })
  }

  changeFormHandlerV2 = (e) =>{
    const fieldName = e.target.name
    const value = e.target.value
    if(fieldName === 'front' || fieldName === 'back'){
      this.setState( prevState =>{
        const newState = {...prevState}
        newState.newPokemon.sprites[fieldName] = value
        return newState
      })
    }
    else{
      this.setState( prevState =>{
        const newState = {...prevState}
        newState.newPokemon[fieldName] = value
        return newState
      })
    }
  }

  

  handleFilterChange = (e)=>{
    this.setState({filterByName:e.target.value})
  }


  filterPokemon = ()=>{
    const filterWord = this.state.filterByName
    if (this.state.filterByName !== ""){
      return this.state.pokemon.filter(pokemon =>{
          if(pokemon.name.includes(filterWord)){
            return pokemon
          }
      })
    }
    return [...this.state.pokemon]
  }

  render() {
    let pokemonToBeDisplay  = this.filterPokemon()
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm 
          pokemon = {this.state.newPokemon}
          newPokemon={this.newPokemonV2} 
          changeFormHandler={this.changeFormHandlerV2 } />
        <br />
        <Search filterHandler={this.handleFilterChange} filter={this.state.filterByName}/>
        <br />
        <PokemonCollection pokemon={pokemonToBeDisplay}/>
      </Container>
    )
  }
}

export default PokemonPage
