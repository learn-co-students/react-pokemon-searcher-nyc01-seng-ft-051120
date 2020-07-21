import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state ={
    name: '',
    hp:'',
    frontUrl: '',
    backUrl: ''
  }

  createPokemon = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitForm = (e) => {

    e.preventDefault();
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
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
    .then(res => res.json())
    .then(pokemon => {
      this.props.addPokemon(pokemon)
    })
    this.setState({
      name: '',
      hp:'',
      frontUrl: '',
      backUrl: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.submitForm}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.createPokemon} value={this.state.name}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.createPokemon}value={this.state.hp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl"onChange={this.createPokemon} value={this.state.frontUrl}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.createPokemon}value={this.state.backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
