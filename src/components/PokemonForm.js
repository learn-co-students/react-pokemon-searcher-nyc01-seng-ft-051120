import React from 'react'
import { Form } from 'semantic-ui-react'

const initialState={
  name:'',
  hp:'',
  sprites: {front:'', 
            back:''}
}

class PokemonForm extends React.Component {
  state = initialState

  handleChanges=(e)=>{
    this.setState({[e.target.name]: e.target.value})
  }
  handleDeepChanges=(e)=>{
    this.setState({sprites:{...this.state.sprites, [e.target.name]: e.target.value}})
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json'},
        body: JSON.stringify(
          {name: this.state.name,
            hp: this.state.hp,
            sprites: {front: this.state.sprites.front,
                      back: this.state.sprites.back}} )
    }) 
    .then(resp=>resp.json())
    .then(newPokemon=>{
      this.setState(initialState)
      this.props.handleNewPokemon(newPokemon)})
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={() => {console.log("submitting form...")}}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChanges}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleChanges}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="front" onChange={this.handleDeepChanges}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="back" onChange={this.handleDeepChanges}/>
          </Form.Group>
          <Form.Button onClick={this.handleSubmit}>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
