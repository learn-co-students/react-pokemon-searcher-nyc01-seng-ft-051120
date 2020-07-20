import React from 'react'
import { Form } from 'semantic-ui-react'

const initialState={
              name: '',
              hp: '',
              frontUrl: '',
              backUrl: ''
            }
class PokemonForm extends React.Component {
  state=initialState

  handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
         Accept: 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        hp: parseInt(this.state.hp),
        sprites: {
          front: this.state.frontUrl,
          back: this.state.backUrl
        }
      })
    })
    .then(res=>res.json())
    .then(pokemonData => {
      this.props.addPokemon(pokemonData)
      console.log(pokemonData)
      this.setState(initialState)
    })
  }

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.handleInput}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.handleInput}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} onChange={this.handleInput}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} onChange={this.handleInput}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
